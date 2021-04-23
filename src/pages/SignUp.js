import React, { useState } from "react";
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

  function SignUp() {
    const classes = useStyles();

    const [firstName , setFirstName] = useState("");
    const [lastName , setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handlefirstNameChange = (event) => {
        setFirstName(event.target.value);   //The previous state gets printed on the console
        
     }

     const handlelastNameChange = (event) => {
        setLastName(event.target.value);   //The previous state gets printed on the console
        
     }

     const handleEmailChange = (event) => {
        setEmail(event.target.value);   //The previous state gets printed on the console
        
     }
          
        const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="First Name" variant="outlined" onChange={handlefirstNameChange} />
                
            <TextField id="outlined-basic" label="Last Name" variant="outlined" onChange={handlelastNameChange} />
                <br />
            <TextField id="outlined-basic" label="Email" variant="outlined" onChange={handleEmailChange} />
                <br />
            <TextField id="outlined-basic" label="Password" variant="outlined" onChange={handlePasswordChange} />
                <br />
            <Button variant="contained" color="secondary">
                Sign Up
            </Button>
        </form>
      );
  
}

  export default SignUp;