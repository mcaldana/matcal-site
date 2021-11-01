import React from "react";
import { NavLink } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import SideMenu from "./SideMenu";
import TopMenu from "./TopMenu";
import Layout from "../../components/Layout";
import Logo from '../../assets/matcal.svg';
import LogoWhite from '../../assets/matcal-white.svg';

// TODO: mettere linea sotto link navbar on hover
// TODO: colorare link se si è nella pagina 
const NavBar = ({ isMobile, isThemeLight, setThemeLight }) => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Layout>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Grid container alignItems="center">
                <Grid item>
                  {isMobile ? <SideMenu /> : null}
                </Grid>
                <Grid item style={{paddingRight: (!isMobile)*20}}>
                  <Grid container alignItems="center">
                    <NavLink to="/homepage" style={{ textDecoration: 'none', color: 'unset' }}>
                      <img alt="logo" src={isThemeLight ? Logo : LogoWhite} height={30} width={30} />
                    </NavLink>
                    <Typography variant="subtitle2">
                      <NavLink to="/homepage" style={{ textDecoration: 'none', color: 'unset' }}>
                        Matteo Caldana
                      </NavLink >
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  {isMobile ? null : <TopMenu />}
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <IconButton onClick={() => setThemeLight(x => !x)} size="medium">
                {isThemeLight ?
                  <DarkModeIcon style={{ fill: "#88F" }} />
                  :
                  <LightModeIcon style={{ fill: "#FBD38D" }} />
                }
              </IconButton>
            </Grid>
          </Grid>
        </Layout>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;