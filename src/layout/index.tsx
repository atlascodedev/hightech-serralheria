import React from "react"
import Footer from "../components/AppComponents/Footer"
import InfoSection from "../components/AppComponents/InfoSection"
import Navbar from "../components/AppComponents/Navbar"
import logo from "../images/high-tech-logo.png"
import { MenuItem } from "../pages"

type AppLayoutProps = {
  children: React.ReactNode
  menu?: Array<MenuItem>
}

const AppLayout: React.FC<AppLayoutProps> = ({ children, menu }) => {
  return (
    <React.Fragment>
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
