import React from "react"
import { Helmet } from "react-helmet"
import Footer from "../components/AppComponents/Footer"
import InfoSection from "../components/AppComponents/InfoSection"
import Navbar from "../components/AppComponents/Navbar"
import logo from "../images/high-tech-logo-svg.svg"
import { MenuItem } from "../pages"

type AppLayoutProps = {
  children: React.ReactNode
  menu?: Array<MenuItem>
}

const AppLayout: React.FC<AppLayoutProps> = ({ children, menu }) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>High Tech Serralheria</title>
      </Helmet>
      <Navbar menu={menu} logo={logo} />
      <main>{children}</main>

      <div>
        <InfoSection></InfoSection>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default AppLayout
