import React from "react";
import { useHistory } from 'react-router-dom';

import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import { Button, List, ListItem } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import myProfilePic from '../../../assets/me.jpg';

const Homepage = () => {
  const history = useHistory();
  return (
    <React.Fragment>
      {/* TODO: carousel here https://github.com/Learus/react-material-ui-carousel */}
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h3" component="h2">
            Matteo Caldana
          </Typography>
          <Typography variant="h5" color="textSecondary">
            PhD Student in Mathematical Models at PoliMi
          </Typography>
        </Grid>
        <CardMedia
          component="img"
          sx={{ width: 140, height: 140, borderRadius: "50%", padding: "10px" }}
          image={myProfilePic}
          alt="Live from space album cover"
        />
      </Grid>

      <Typography component="p">
        I am a matematician and programmer. My main professional interests are scientific computing, finite elements methods, software engineering, big data and machine learning.
      </Typography>
      <Typography component="p">
        I have worked as Junior Data Engineer at Quantyca and as a free-lance Software Engineer at ToolsPole.
      </Typography>
      {/* TODO: better description of skills */}
      <Typography component="p">
        Proficient in many programming languages, among them: C++, Python, Javascript, SQL.
      </Typography>

      <Button color="secondary" endIcon={<KeyboardArrowRightIcon />} onClick={() => history.push('/bio')}>
        More about my skills and professional experience
      </Button>

      <Typography variant="h6">
        Get in contact with me:
      </Typography>
      <List>
        <ListItem dense>
          <Button color="info" href="https://it.linkedin.com/in/matteo-caldana-7671851b0" startIcon={<LinkedInIcon />}>
            Linkedin
          </Button>
        </ListItem>
        <ListItem dense>
          <Button color="info" href="mailto:username@example.com" startIcon={<MailOutlineIcon />}>
            Email
          </Button>
        </ListItem>
      </List>
    </React.Fragment>
  );
}

export default Homepage;
