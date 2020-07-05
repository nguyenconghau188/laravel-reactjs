import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    color: {
        primary: "#1976D2",
        secondary: "#607D8B",
        error: "#D32F2F"
    },
    typography: {
        fontFamily: "Roboto",
        color: "#ffffff"
    },
});

export default theme;