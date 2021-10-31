import React, { useState } from "react";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import NavBar from "./NavBar";

import appRoutes from "./routes";

import light from "../themes/light-theme";
import dark from "../themes/dark-theme";

const SwitchChild = ({ route }) => {
  const Component = route.component;
  return (
    route.redirect ? (
      <Redirect from={route.path} to={route.pathTo} />
    ) : (
      <Route path={route.path} render={() => <Component />} exact />
    )
  )
};

const App = () => {
  const lightTheme = createTheme(light);
  const darkTheme = createTheme(dark);

  const [isThemeLight, setThemeLight] = useState(false);

  return (
    <MuiThemeProvider theme={isThemeLight ? lightTheme : darkTheme}>
      <Router>
        <NavBar isThemeLight={isThemeLight} setThemeLight={setThemeLight} />
        <Switch>
          {appRoutes.map((route) => (
            <SwitchChild key={route.id} route={route} />
          ))}
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;