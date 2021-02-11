import { MenuItem } from "@material-ui/core"
import React from "react"
import AboutUs from "../components/AppComponents/AboutUs"
import DefenseSection from "../components/AppComponents/DefenseSection"
import Hero from "../components/AppComponents/Hero"
import converToSlug from "../helper/converToSlug"
import heroImg from "../images/hero-img.webp"
import heroImg2 from "../images/impact-img.webp"
import heroImgMobile from "../images/impact-image-mobile.webp"

import AppLayout from "../layout"
import ServiceSection from "../components/AppComponents/ServiceSection"
import PortfolioSection from "../components/AppComponents/Portfolio"
import ContactFormMain from "../components/AppComponents/ContactForm"
import ContactSection from "../components/AppComponents/ContactSection"
import {
  PortfolioItem,
  PortfolioItemList,
  ServiceItem,
  ServiceGraphQuery,
} from "../types"
import { graphql, useStaticQuery } from "gatsby"

interface IndexProps {
  testMe: Array<string>
  onceAgain: boolean
}

export type MenuItem = {
  menuName: string | null
  reference: React.RefObject<any> | null
  itemDocumentId: string | null
  sectionComponent?: any
  childComponent?: any
}

const IndexPage: React.FC<IndexProps> = ({ testMe, onceAgain }) => {
  const homeRef = React.useRef<HTMLDivElement | null>(null)
  const aboutUsRef = React.useRef<HTMLDivElement | null>(null)
  const servicesRef = React.useRef<HTMLDivElement | null>(null)
  const projectsRef = React.useRef<HTMLDivElement | null>(null)
  const contactRef = React.useRef<HTMLDivElement | null>(null)

  let portfolioListMockData: Array<PortfolioItem> = [
    {
      portfolioItemPicture: "https://via.placeholder.com/500",
    },
    {
      portfolioItemPicture: "https://via.placeholder.com/500",
    },
    {
      portfolioItemPicture: "https://via.placeholder.com/500",
    },
    {
      portfolioItemPicture: "https://via.placeholder.com/500",
    },
  ]

  const servicesData: ServiceGraphQuery = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              contentType
              description
              featuredImage
            }
          }
        }
      }
    }
  `)

  const makeServiceArray = (
    data: ServiceGraphQuery,
    array: Array<ServiceItem>,
    contentFilter: string
  ) => {
    data.allMarkdownRemark.edges.forEach(value => {
      if (value.node.frontmatter.contentType === contentFilter) {
        array.push({
          serviceItemDescription: value.node.frontmatter.description,
          serviceItemPicture: value.node.frontmatter.featuredImage,
          serviceItemTitle: value.node.frontmatter.title,
        })
      }
    })
  }

  let serviceSerralheria: Array<ServiceItem> = []
  let serviceEletrica: Array<ServiceItem> = []
  let serviceSegurancaEletronica: Array<ServiceItem> = []

  makeServiceArray(servicesData, serviceSerralheria, "serralheria")
  makeServiceArray(servicesData, serviceEletrica, "eletrica")
  makeServiceArray(
    servicesData,
    serviceSegurancaEletronica,
    "segurancaEletronica"
  )

  console.log(serviceSerralheria)

  let serviceListMockData: Array<ServiceItem> = [
    {
      serviceItemTitle: "Service Title",
      serviceItemDescription: "Service item description",
      serviceItemPicture: "https://via.placeholder.com/750",
    },
    {
      serviceItemTitle: "Service Title",
      serviceItemDescription: "Service item description",
      serviceItemPicture: "https://via.placeholder.com/750",
    },
    {
      serviceItemTitle: "Service Title",
      serviceItemDescription: "Service item description",
      serviceItemPicture: "https://via.placeholder.com/750",
    },
    {
      serviceItemTitle: "Service Title",
      serviceItemDescription: "Service item description",
      serviceItemPicture: "https://via.placeholder.com/750",
    },
    {
      serviceItemTitle: "Service Title",
      serviceItemDescription: "Service item description",
      serviceItemPicture: "https://via.placeholder.com/750",
    },
    {
      serviceItemTitle: "Service Title",
      serviceItemDescription: "Service item description",
      serviceItemPicture: "https://via.placeholder.com/750",
    },
    {
      serviceItemTitle: "Service Title",
      serviceItemDescription: "Service item description",
      serviceItemPicture: "https://via.placeholder.com/750",
    },
  ]

  let menu: Array<MenuItem> = [
    {
      menuName: "Home",
      reference: homeRef,
      itemDocumentId: null,
      sectionComponent: null,
      childComponent: (
        <Hero
          mainText={
            "Oferecemos soluções em serralheria, elétrica e segurança eletrônica."
          }
          heroImage={heroImg}
          subText={
            "Para cada situação temos uma solução confiável e satisfatória para nossos clientes."
          }
          callToActionRef={contactRef}
          buttonText={"Faça seu orçamento"}
        ></Hero>
      ),
    },

    {
      menuName: null,
      reference: null,
      itemDocumentId: null,
      sectionComponent: null,
      childComponent: <DefenseSection></DefenseSection>,
    },

    {
      menuName: "Sobre nós",
      reference: aboutUsRef,
      itemDocumentId: null,
      sectionComponent: null,
      childComponent: (
        <AboutUs
          backgroundImageMobile={heroImgMobile}
          backgroundImage={heroImg2}
        ></AboutUs>
      ),
    },

    {
      menuName: "Serviços",
      reference: servicesRef,
      itemDocumentId: null,
      sectionComponent: null,
      childComponent: (
        <div>
          <ServiceSection
            serviceCardActionRef={contactRef}
            serviceList={serviceSerralheria}
            serviceSectionTitle={"Serralheria"}
          />
          <ServiceSection
            serviceList={serviceListMockData}
            rootContrast={true}
            serviceSectionTitle={"Segurança eletrônica"}
          />
          <ServiceSection
            serviceList={serviceListMockData}
            serviceSectionTitle={"Elétrica"}
          />
        </div>
      ),
    },
    {
      menuName: "Últimos projetos",
      reference: projectsRef,
      itemDocumentId: null,
      sectionComponent: null,
      childComponent: (
        <PortfolioSection
          portfolioList={portfolioListMockData}
          portfolioSectionTitle="Nossos últimos serviços"
        />
      ),
    },

    {
      menuName: "Contato",
      reference: contactRef,
      itemDocumentId: null,
      sectionComponent: null,
      childComponent: <ContactSection />,
    },
  ]

  for (let i = 0; i < menu.length; i++) {
    const element = menu[i]

    let localID = (element.itemDocumentId = converToSlug(element.menuName))

    element.sectionComponent = (
      <div ref={element.reference} id={localID}>
        {element.childComponent ? (
          element.childComponent
        ) : (
          <div> No child component was passed </div>
        )}
      </div>
    )
  }

  return (
    <AppLayout menu={menu}>
      {menu.map(
        ({ menuName, itemDocumentId, reference, sectionComponent }, index) => (
          <React.Fragment key={index}>{sectionComponent}</React.Fragment>
        )
      )}
    </AppLayout>
  )
}

export default IndexPage
