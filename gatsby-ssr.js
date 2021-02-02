import React from "react"
import { CssBaseline, MuiThemeProvider } from "@material-ui/core"
import { theme, styledTheme } from "./src/theme"
import { ThemeProvider as StyledThemeProvider } from "styled-components"

// Import fonts and CSS that should be seen globally to avoid SSR bugs
import "@fontsource/barlow"
import "@fontsource/barlow/400.css"
import "@fontsource/barlow/500.css"
import "@fontsource/barlow/600.css"
import "@fontsource/barlow/700.css"
import "@fontsource/barlow/800.css"
import "@fontsource/barlow/900.css"

// For some reason unknown to me you need to use CommonJS syntax to import some css from certain npm packages

// Uncomment following lines if you're using Swiper.js

require("swiper/swiper.min.css")
require("swiper/components/navigation/navigation.min.css")
require("swiper/components/pagination/pagination.min.css")
require("swiper/components/scrollbar/scrollbar.min.css")
require("swiper/components/effect-fade/effect-fade.min.css")
require("swiper/components/scrollbar/scrollbar.min.css")
require("swiper/components/lazy/lazy.min.css")

// Without Firebase

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

