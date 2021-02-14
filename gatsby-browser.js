import React from "react"
import { CssBaseline, MuiThemeProvider } from "@material-ui/core"
import { theme, styledTheme } from "./src/theme"
import {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider,
} from "styled-components"

import "@fontsource/barlow"
import "@fontsource/barlow/400.css"
import "@fontsource/barlow/500.css"
import "@fontsource/barlow/600.css"
import "@fontsource/barlow/700.css"
import "@fontsource/barlow/800.css"
import "@fontsource/barlow/900.css"
import Scrollbar from "react-scrollbars-custom"

require("swiper/swiper.min.css")
require("swiper/components/navigation/navigation.min.css")
require("swiper/components/pagination/pagination.min.css")
require("swiper/components/scrollbar/scrollbar.min.css")
require("swiper/components/effect-fade/effect-fade.min.css")
require("swiper/components/scrollbar/scrollbar.min.css")
require("swiper/components/lazy/lazy.min.css")

const App = ({ root }) => {
  return (
    <React.Fragment>
        <CssBaseline />
        <StyledThemeProvider theme={styledTheme}>
          <MuiThemeProvider theme={theme}>{root}</MuiThemeProvider>
        </StyledThemeProvider>
    </React.Fragment>
  )
}

export const wrapRootElement = ({ element }) => <App root={element} />

// Uncomment if you setup a loading screen to be displayed before initial client render on html.js located at src folder

export const onInitialClientRender = () => {
  window.scroll(0, 0)

  setTimeout(() => {
    document.getElementById("atlas-loader").style.opacity = "0"

    document.body.style.textRendering = "optimizeLegibility"

    setTimeout(() => {
      document.getElementById("atlas-loader").style.display = "none"
      document.body.style.overflow = "initial"
    }, 500)
  }, 2000)
}
