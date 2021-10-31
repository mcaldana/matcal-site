import React from "react";
import { NavLink } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { Typography } from "@mui/material";

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import SideMenu from "./SideMenu";
import TopMenu from "./TopMenu";
import Logo from '../../assets/matcal.svg';
import LogoWhite from '../../assets/matcal-white.svg';

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