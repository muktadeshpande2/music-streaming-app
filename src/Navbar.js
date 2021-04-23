import React from 'react';
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SignInModal from './pages/SignInModal';
import SignUpModal from './pages/SignUpModal';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          </IconButton>
          <MenuIcon />    
          <Typography variant="h6" className={classes.title}>
            <b>Soul Sessions</b>
          </Typography>
          <Link to='/home'>
                <Button color="inherit">Home</Button>  
            </Link>
            {/* <Link to='/signin'>
                <Button color="inherit">Sign In</Button>
            </Link>
            <Link to='/signup'>
                <Button color="inherit">Sign Up</Button>  
            </Link>*/}
            <SignInModal /> 
            <SignUpModal />
            
        </Toolbar>
      </AppBar>
    </div>
  );
}
