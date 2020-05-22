import React from 'react';
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/MuiTheme";
import Form from "./Components/Form"


function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Form />
    </MuiThemeProvider>
  );
}

export default App;
