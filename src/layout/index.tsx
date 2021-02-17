import React from "react"
import { Helmet } from "react-helmet"
import Footer from "../components/AppComponents/Footer"
import InfoSection from "../components/AppComponents/InfoSection"
import Navbar from "../components/AppComponents/Navbar"
import logo from "../images/high-tech-logo-svg.svg"
import { MenuItem } from "../types"
import "../css/global.module.css"

type AppLayoutProps = {
  children: React.ReactNode
  menu?: Array<MenuItem>
}

const AppLayout: React.FC<AppLayoutProps> = ({ children, menu }) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>High Tech Serralheria</title>

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-MVN6JE404R"
        ></script>
        <script>
          {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-MVN6JE404R');`}
        </script>
      </Helmet>
      <Navbar height={"50px"} menu={menu} logo={logo} />
      <main>{children}</main>

      <Footer />
    </React.Fragment>
  )
}

export default AppLayout
