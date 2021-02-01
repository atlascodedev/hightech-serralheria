import { createMuiTheme } from "@material-ui/core"
import { createGlobalStyle } from "styled-components"

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#289FEB",
      contrastText: "#fff",
    },
    secondary: {
      main: "#17396B",
    },
  },

  typography: {
    fontFamily: "Barlow",
  },
})

export const styledTheme = {
  palette: {
    primary: {
      main: "#289FEB",
      contrastText: "#fff",
    },
    secondary: {
      main: "#17396B",
    },
  },

  typography: {
    fontFamily: "Barlow",
  },
}
