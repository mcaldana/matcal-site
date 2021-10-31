import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const NavBar = ({ isThemeLight, setThemeLight }) => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton className={classes.menuButton}>
          <MenuIcon />
        </IconButton>
        <IconButton className={classes.menuButton}
          onClick={()=>setThemeLight(x=>!x)}
        >
          {isThemeLight ? <DarkModeIcon /> : <LightModeIcon /> }
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;