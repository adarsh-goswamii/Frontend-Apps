import {createTheme} from "@mui/material/styles";

const customTheme = () => {
  return createTheme({
    palette: {
      typography: {
        primary: "#000"
      },
      background: {
        white: "#FFF"
      },
      border: {
        grayLight: "#F7F7F7",
        grayDark: "#EFEFEF",
      },
    },
    typography: {
      fontFamily: ' "", "Roboto", "Helvetica", "Arial", "sans-serif" ',
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightSemiBold: 700,
      fontWeightBold: 800,
      h1: {
        fontSize: "40px",
        lineHeight: 1.2
      },
      h2: {
        fontSize: "40px",
        lineHeight: 1.2
      },
      h3: {
        fontSize: "40px",
        lineHeight: 1.2
      },
      h4: {
        fontSize: "40px",
        lineHeight: 1.2
      },
      subtitle: {
        fontSize: "40px",
        lineHeight: 1.2
      },
      body1: {
        fontSize: "40px",
        lineHeight: 1.2
      },
      label: {
        fontSize: "40px",
        lineHeight: 1.2
      },
      caption: {
        fontSize: "40px",
        lineHeight: 1.2
      },

    }
  })
}

export default customTheme;