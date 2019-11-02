import { createMuiTheme } from "@material-ui/core/styles";

const COLORS = {
  primary: "#87b726"
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: COLORS.primary
    }
  }
});

export default theme;
