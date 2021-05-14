import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'; 
import Navbar from "./Navbar";





export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Navbar />
        <Typography component="div" style={{ backgroundColor: '#000000', height: '100vh' }} />
      </Container>
    </React.Fragment> 
  );
}
