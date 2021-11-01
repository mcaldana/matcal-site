import Grid from '@mui/material/Grid';

const Layout = (props) => (
  <Grid container justifyContent="center">
    <Grid item xs={8}>
      {props.children}
    </Grid>
  </Grid>
)

export default Layout;