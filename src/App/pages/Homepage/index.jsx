import React from "react";
import { useHistory } from 'react-router-dom';

import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Grid from '@mui/material/Grid';
import { Button } from "@mui/material";
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
      <Grid container justifyContent="space-between">
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="h3" component="h2">
            Matteo Caldana
          </Typography>
          <Typography variant="h5" color="textSecondary">
            PhD Student in Mathematical Models at PoliMi
          </Typography>
        </CardContent>
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
      {/* TODO: set better secondary */}
      <Button color="secondary" endIcon={<KeyboardArrowRightIcon />} onClick={() => history.push('/bio')}>
        More about my skills and professional experience
      </Button>

      <Typography variant="h6">
        Get in contact with me!
      </Typography>
      <Typography>
        <LinkedInIcon /> Linkedin
      </Typography>
      <Typography>
        <MailOutlineIcon /> Email
      </Typography>


    </React.Fragment>
  );
}

export default Homepage;
