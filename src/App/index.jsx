import React, { useState } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import { createTheme } from "@material-ui/core/styles"; // @mui/material/styles does not work
import { ThemeProvider, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';

import NavBar from "./NavBar";
import appRoutes from "./routes";
import Layout from "../components/Layout";
import light from "../themes/light-theme";
import dark from "../themes/dark-theme";

const App = () => {
  const lightTheme = createTheme(light);
  const darkTheme = createTheme(dark);

  const [isThemeLight, setThemeLight] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <ThemeProvider theme={isThemeLight ? lightTheme : darkTheme}>
      <CssBaseline />
      <Router>
        <NavBar isMobile={!matches}
          isThemeLight={isThemeLight} setThemeLight={setThemeLight}
        />
        <Layout>
          <Switch>
            {appRoutes.map((route) => (
              route.redirect ? (
                <Redirect key={route.id} from={route.path} to={route.pathTo} />
              ) : (

                <Route key={route.id} path={route.path}
                  render={(props) => <route.component {...props} />}
                />
              )
            ))}
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;