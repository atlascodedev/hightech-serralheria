import React from "react"
import { CssBaseline, MuiThemeProvider } from "@material-ui/core"
import { theme } from "./src/theme"
import { FirebaseContext } from "./src/context/firebase"
import { config as firebaseConfig } from "./config/firebase.config"

// If using firebase, you must import firebase app and every firebased related service you're planning on using
import firebase from "firebase/app"
import "firebase/firestore"

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

// Firebase Config will try to get its data from .env files on build time, be sure to update them

const app = firebase.initializeApp(firebaseConfig)

const firestore = app.firestore()

if (process.env.NODE_ENV !== "production") {
  firestore.useEmulator("localhost", 8080)

  console.log("Running local instance of Firestore at localhost:8080")
}

// Wraps root element with Firebase, css reset and Material UI theme provider. If you're planning on using Redux, use this functional component and wrap root with your store provider

const FireApp = ({ root }) => {
  return (
    <FirebaseContext.Provider value={{ app, firestore }}>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>{root}</MuiThemeProvider>
    </FirebaseContext.Provider>
  )
}

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
