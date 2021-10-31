import React from "react";
import { NavLink } from 'react-router-dom';

import { Link, List, ListItem, Typography } from "@mui/material";

import GitHubIcon from '@mui/icons-material/GitHub';

const TopMenu = () => {
  return (
    <List style={{ display: 'flex', flexDirection: 'row' }}>
      <ListItem>
        <NavLink to="/bio" style={{ textDecoration: 'none', color: 'unset' }}>
          <Typography>
            Bio
          </Typography>
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/works" style={{ textDecoration: 'none', color: 'unset' }}>
          <Typography>
            Works
          </Typography>
        </NavLink>
      </ListItem>
      <ListItem>
        <Link href="https://github.com/mcaldana/matcal-site" style={{ textDecoration: 'none', color: 'unset' }}>
          <GitHubIcon fontSize="small" />
        </Link>
        <Link href="https://github.com/mcaldana/matcal-site" style={{ textDecoration: 'none', color: 'unset' }}>
          <Typography>
            Source
          </Typography>
        </Link>
      </ListItem>
    </List>
  )
}

export default TopMenu;