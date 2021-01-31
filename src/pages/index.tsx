import { MenuItem } from "@material-ui/core"
import React from "react"
import converToSlug from "../helper/converToSlug"

import AppLayout from "../layout"

interface IndexProps {
  testMe: Array<string>
  onceAgain: boolean
}

export type MenuItem = {
  menuName: string
  reference: React.RefObject<any> | null
  itemDocumentId: string | null
  sectionComponent?: any
  childComponent?: any
}

let SectionComponentTest: React.FC<any> = props => {
  return <div>hello </div>
}

const IndexPage: React.FC<IndexProps> = ({ testMe, onceAgain }) => {
  const homeRef = React.useRef<HTMLDivElement | null>(null)
  const aboutUsRef = React.useRef<HTMLDivElement | null>(null)
  const servicesRef = React.useRef<HTMLDivElement | null>(null)
  const projectsRef = React.useRef<HTMLDivElement | null>(null)
  const contactRef = React.useRef<HTMLDivElement | null>(null)

  let menu: Array<MenuItem> = [
    {
      menuName: "Home",
      reference: homeRef,
      itemDocumentId: null,
      sectionComponent: null,
      childComponent: null,
    },

    {
      menuName: "Sobre nós",
      reference: aboutUsRef,
      itemDocumentId: null,
      sectionComponent: null,
      childComponent: null,
    },

    {
      menuName: "Serviços",
      reference: servicesRef,
      itemDocumentId: null,
      sectionComponent: null,
      childComponent: null,
    },
    {
      menuName: "Últimos projetos",
      reference: projectsRef,
      itemDocumentId: null,
      sectionComponent: null,
      childComponent: null,
    },

    { menuName: "Contato", reference: contactRef, itemDocumentId: null },
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

  console.log(menu)

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
