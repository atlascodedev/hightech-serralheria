import React from "react"
import { CssBaseline, MuiThemeProvider } from "@material-ui/core"
import { theme } from "./src/theme"

// Import fonts and CSS that should be seen globally to avoid SSR bugs
import "@fontsource/barlow"

// For some reason unknown to me you need to use CommonJS syntax to import some css from certain npm packages

// Uncomment following lines if you're using Swiper.js

// require("swiper/swiper.min.css")
// require("swiper/components/navigation/navigation.min.css")
// require("swiper/components/pagination/pagination.min.css")
// require("swiper/components/scrollbar/scrollbar.min.css")
// require("swiper/components/effect-fade/effect-fade.min.css")
// require("swiper/components/scrollbar/scrollbar.min.css")
// require("swiper/components/lazy/lazy.min.css")

// Without Firebase

const App = ({ root }) => {
  return (
    <div>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>{root}</MuiThemeProvider>
    </div>
  )
}

export const wrapRootElement = ({ element }) => <App root={element} />

// Uncomment if you setup a loading screen to be displayed before initial client render on html.js located at src folder

// export const onInitialClientRender = () => {
//   window.scroll(0, 0)

//   setTimeout(() => {
//     document.getElementById("atlas-loader").style.opacity = "0"

//     setTimeout(() => {
//       document.getElementById("atlas-loader").style.display = "none"
//       document.body.style.overflow = "initial"
//     }, 500)
//   }, 2000)
// }
