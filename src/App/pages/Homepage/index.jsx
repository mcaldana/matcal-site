import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const Homepage = () => (
  <Card>
    <CardContent>
      <Typography color="textSecondary" gutterBottom>
        Homepage
      </Typography>
      <Typography variant="h5" component="h2">
        Matteo Caldana
      </Typography>
      <Typography color="textSecondary">PhD Student</Typography>
      <Typography component="p">
        Matematician, sowftware engineer and technology enthusiast.
      </Typography>
    </CardContent>
  </Card>
);

export default Homepage;
