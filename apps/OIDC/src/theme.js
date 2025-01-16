import { createTheme } from "@mui/material/styles";

const customTheme = () => {
  return createTheme({
    palette: {
      mode: 'dark', // Enables dark mode
      primary: {
        main: '#5F4BB6', // Light blue
        contrastText: '#ffffff', // White text on primary
      },
      secondary: {
        main: '#f48fb1', // Light pink
        contrastText: '#ffffff',
      },
      background: {
        default: '#121212', // Dark background
        paper: '#1e1e1e', // Slightly lighter background for surfaces (cards, dialogs, etc.)
        white: '#fff', 
      },
      text: {
        primary: '#ffffff', // Main text color
        secondary: '#b0b0b0', // Less prominent text
        disabled: '#6c6c6c', // Disabled text
      },
      divider: '#303030', // Divider color
      error: {
        main: '#ef5350', // Red for errors
      },
      warning: {
        main: '#ff9800', // Orange for warnings
      },
      info: {
        main: '#29b6f6', // Light blue for info messages
      },
      success: {
        main: '#66bb6a', // Green for success messages
      },
    },
    typography: {
      fontFamily: '"poppins", "sans-serif-pro", "Roboto", "Helvetica", "Arial", "sans-serif" ',
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightSemiBold: 700,
      fontWeightBold: 800,
      h1: {
        fontSize: "2.5rem"
      },
      h2: {
        fontSize: "2rem"
      },
      h3: {
        fontSize: "1.75rem"
      },
      h4: {
        fontSize: "1.5rem"
      },
      subtitle1: {
        fontSize: "1.25rem"
      },
      body1: {
        fontSize: "1rem"
      },
      overline: {
        fontSize: "0.875rem",
        textTransform: "none"
      },
      caption: {
        fontSize: "0.725rem"
      },

    }
  })
}

export default customTheme;