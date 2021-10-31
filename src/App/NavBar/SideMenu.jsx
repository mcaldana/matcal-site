import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

import { Drawer, Link, List, ListItem, Typography } from "@mui/material";
import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';

const TypographyLink = (props) => {
  return (
    <NavLink style={{ textDecoration: 'none', color: 'unset' }} {...props}>
      <Typography>
        {props.children}
      </Typography>
    </NavLink>
  );
}

const SideMenu = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <React.Fragment>
      <IconButton onClick={() => setDrawerOpen(x => !x)}>
        <MenuIcon />
      </IconButton>
      <Drawer open={isDrawerOpen} onClose={closeDrawer}>
        <List>
          <ListItem>
            <TypographyLink to="/bio" onClick={closeDrawer}>
              Bio
            </TypographyLink>
          </ListItem>
          <ListItem>
            <TypographyLink to="/works" onClick={closeDrawer}>
              Works
            </TypographyLink>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/mcaldana/matcal-site"
              style={{ textDecoration: 'none', color: 'unset' }}
            >
              <GitHubIcon fontSize="small" />
            </Link>
            <Link href="https://github.com/mcaldana/matcal-site"
              style={{ textDecoration: 'none', color: 'unset' }}
            >
              <Typography>
                Source
              </Typography>
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  );
}

export default SideMenu;