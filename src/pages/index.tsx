import React from "react"
import AboutUs from "../components/AppComponents/AboutUs"
import DefenseSection from "../components/AppComponents/DefenseSection"
import Hero from "../components/AppComponents/Hero/Hero"
import converToSlug from "../helper/converToSlug"
import heroImg from "../images/hero-img.webp"
import heroImg2 from "../images/impact-img.webp"
import heroImgMobile from "../images/impact-image-mobile.webp"

import AppLayout from "../layout"
import ServiceSection from "../components/AppComponents/ServiceSection"
import PortfolioSection from "../components/AppComponents/Portfolio"
import ContactSection from "../components/AppComponents/ContactSection"
import {
  ServiceItem,
  ServiceGraphQuery,
  BlogPost,
  MenuItem,
  PortfolioItem,
} from "../types"
import { graphql, useStaticQuery } from "gatsby"
import Posts from "../components/AppComponents/Posts"
import Portfolio from "../components/AppComponents/Portfolio/Portfolio"
import ServiceTabs from "../components/AppComponents/ServiceSection/ServiceTabs"

interface IndexProps {
  testMe: Array<string>
  onceAgain: boolean
}

const IndexPage: React.FC<IndexProps> = ({ testMe, onceAgain }) => {
  const homeRef = React.useRef<HTMLDivElement | null>(null)
  const aboutUsRef = React.useRef<HTMLDivElement | null>(null)
  const servicesRef = React.useRef<HTMLDivElement | null>(null)
  const projectsRef = React.useRef<HTMLDivElement | null>(null)
  const contactRef = React.useRef<HTMLDivElement | null>(null)

  const servicesData: ServiceGraphQuery = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              portfolioItemPicture
              title
              contentType
              description
              featuredImage
              blogTitle
              blogDate
              blogFeaturedImage
              body
            }
            html
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const filterContentType = (
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

  const avgReadingSpeedByCharacterNum = (string: string) => {
    let avgTime = (string.length / 750).toFixed(0)

    return avgTime.toString()
  }

  const filterBlogPosts = (
    data: ServiceGraphQuery,
    array: Array<BlogPost>,
    contentFilter: string
  ) => {
    data.allMarkdownRemark.edges.forEach(value => {
      if (value.node.frontmatter.contentType === contentFilter) {
        array.push({
          blogTitle: value.node.frontmatter.blogTitle,
          blogDate: value.node.frontmatter.blogDate,
          blogFeaturedImage: value.node.frontmatter.blogFeaturedImage,
          html: value.node.html,
          blogURL: value.node.fields.slug,
          readingTime: avgReadingSpeedByCharacterNum(value.node.html),
        })
      }
    })
  }

  const filterPortfolioItem = (
    data: ServiceGraphQuery,
    array: Array<PortfolioItem>,
    contentFilter: string
  ) => {
    data.allMarkdownRemark.edges.forEach(value => {
      if (value.node.frontmatter.contentType === contentFilter) {
        array.push({
          portfolioItemPicture: value.node.frontmatter.portfolioItemPicture,
        })
      }
    })
  }

  let blogPosts: Array<BlogPost> = []
  let serviceSerralheria: Array<ServiceItem> = []
  let serviceEletrica: Array<ServiceItem> = []
  let serviceSegurancaEletronica: Array<ServiceItem> = []
  let portfolioList: Array<PortfolioItem> = []

  filterBlogPosts(servicesData, blogPosts, "blog")
  filterContentType(servicesData, serviceSerralheria, "serralheria")
  filterContentType(servicesData, serviceEletrica, "eletrica")
  filterContentType(
    servicesData,
    serviceSegurancaEletronica,
    "segurancaEletronica"
  )
  filterPortfolioItem(servicesData, portfolioList, "portfolio")

  // console.log(portfolioList)
  // console.log(serviceEletrica)
  // console.log(serviceSegurancaEletronica)

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
        <ServiceTabs
          tabItems={[
            {
              label: "Serralheria",
              component: (
                <ServiceSection
                  serviceList={serviceSerralheria}
                  serviceSectionTitle={"Serralheria"}
                />
              ),
            },
            {
              label: "Segurança eletrônica",
              component: (
                <ServiceSection
                  serviceList={serviceSegurancaEletronica}
                  serviceSectionTitle={"Segurança eletrônica"}
                />
              ),
            },
            {
              label: "Elétrica",
              component: (
                <ServiceSection
                  serviceList={serviceEletrica}
                  serviceSectionTitle={"Elétrica"}
                />
              ),
            },
          ]}
        />
      ),
    },
    {
      menuName: null,
      reference: null,
      itemDocumentId: null,
      sectionComponent: null,
      childComponent: <Posts blogPosts={blogPosts}></Posts>,
    },

    {
      menuName: "Últimos projetos",
      reference: projectsRef,
      itemDocumentId: null,
      sectionComponent: null,
      childComponent: (
        <Portfolio
          ctaRef={contactRef}
          portfolioList={portfolioList}
          sectionTitle="Nossos últimos serviços"
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
