import React, { useState } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from "@material-ui/core";

import NavBar from "./NavBar";
import appRoutes from "./routes";
import light from "../themes/light-theme";
import dark from "../themes/dark-theme";

const App = () => {
  const lightTheme = createTheme(light);
  const darkTheme = createTheme(dark);

  const [isThemeLight, setThemeLight] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <MuiThemeProvider theme={isThemeLight ? lightTheme : darkTheme}>
      <CssBaseline/>
      <Router>
        <NavBar isMobile={!matches} 
          isThemeLight={isThemeLight} setThemeLight={setThemeLight} 
        />
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
      </Router>
    </MuiThemeProvider>
  );
}

export default App;