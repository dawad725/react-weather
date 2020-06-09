import { createMuiTheme } from "@material-ui/core/styles";
// import "typeface-roboto";
// import backgroundImage from "./images/blue_sky.jpg"

const theme = createMuiTheme({
    // typography: {
    //   htmlFontSize: 16,
    //   fontFamily: "Verdana",
    //   body1: {
    //     lineHeight: "2.5rem;",
    //     fontSize: "1.5rem"
    //   },
    //   h3: {
    //     fontSize: "1.5rem",
    //     fontWeight: "bold"
    //   }
    // },
    palette: {
        primary: {
            main: "#233768"
        },
        secondary: {
            main: "#5b5b5b"
        },
        background: {
            // default: "#e6e3e0"
            // default: "white"

        }

    }
});

export default theme;
