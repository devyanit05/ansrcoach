import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff242a",
    },
    secondary: {
      main: "#FFFFFF",
    },
    tertiary: {
      main: "#000000",
    },
  },
  typography: {
    h1: {
      fontFamily: "'Space Grotesk', sans-serif",
    },
    h2: {
      fontFamily: "'Montserrat', sans-serif",
        fontWeight: "bold",
    },
    h3: {
      fontFamily: "'Inter', sans-serif",
      fontSize: "18px",
    },
    h4: {
      fontFamily: "'Inter', sans-serif",
      fontSize: "xx-large",
    },
    h5: {
        fontFamily: "'Open Sans', sans-serif"
    },
  },
});

export default theme;