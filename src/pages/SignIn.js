import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  
  function SignIn() {
    
    const classes = useStyles();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        console.log(email);  //useEffect stores the current state i. e  the state after updation happens
    }) 
    
    const handleEmailChange = (event) => {
       setEmail(event.target.value);   //The previous state gets printed on the console
       console.log(email);
    }
         
       const handlePasswordChange = (event) => {
       setPassword(event.target.value);
       console.log(password);
       }
    return (
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Email" variant="outlined" onChange={handleEmailChange} />
        <br />
        <TextField id="outlined-basic" label="Password" variant="outlined" onChange={handlePasswordChange} />
        <br />
        <Button variant="contained" color="secondary">
        Sign In
      </Button>
      </form>
    );
  }

  export default SignIn;


  