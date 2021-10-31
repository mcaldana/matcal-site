import React from "react";
import { NavLink } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Typography } from "@mui/material";

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import SideMenu from "./SideMenu";
import TopMenu from "./TopMenu";
import Logo from '../../assets/matcal.svg';
import LogoWhite from '../../assets/matcal-white.svg';

// TODO: mettere linea sotto link navbar on hover
// TODO: colorare link se si è nella pagina 
const NavBar = ({ isMobile, isThemeLight, setThemeLight }) => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <NavLink to="/homepage" style={{ textDecoration: 'none', color: 'unset' }}>
            <img alt="logo" src={isThemeLight ? Logo : LogoWhite} height={25} width={25} />
        </NavLink>
        <Typography variant="subtitle2">
          <NavLink  to="/homepage" style={{ textDecoration: 'none', color: 'unset' }}>
            Matteo Caldana
          </NavLink >
        </Typography>
        {isMobile ?
          <SideMenu />
          :
          <TopMenu />
        }
        <IconButton onClick={() => setThemeLight(x => !x)} size="medium">
          {isThemeLight ?
            <DarkModeIcon style={{ fill: "#88F" }} />
            :
            <LightModeIcon style={{ fill: "#FBD38D" }} />
          }
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;