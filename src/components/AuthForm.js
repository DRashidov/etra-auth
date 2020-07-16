import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Tabs from './Tabs';
import logo from '../static/images/ETRA-Logo.png';

const useStyles = makeStyles((theme) => ({
  paperLogin: {
    margin: 'auto',
    maxWidth: 500,
    minWidth: 500,
  },
  paperRegister: {
    width: 790,
    margin: 'auto',
  },  
  header: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    padding: '30px 45px',
  },
  tabs: {
    background: '#0C63AD',
    width: '100%',
  },
}));

const AUTH_FLOW = {
  login: 'LOGIN',
  register: 'REGISTER',
};



export default function AuthForm() {
  const classes = useStyles();
  const [authFlow, setAuthFlow] = useState(AUTH_FLOW.login);

  // const handleRegisterChange= (prop) => (event) => {
  //   setLoginValues({ ...values, [prop]: event.target.value });
  // };

  if (authFlow === AUTH_FLOW.login) {
    return (
      <Paper elevation={3} className={classes.paperLogin}>
        <Grid container>
          <Grid item className={classes.header}>
            <img alt='logo' src={logo} />
          </Grid>
        </Grid>
        <Tabs
          setAuthFlow={setAuthFlow}
        />
      </Paper>
    );
  }
  
  return (
    <Paper elevation={3} className={classes.paperRegister}>
      <Grid container>
        <Grid item className={classes.header}>
          <img alt='logo' src={logo} />
        </Grid>
      </Grid>
      <Tabs
        setAuthFlow={setAuthFlow}
      />
    </Paper>
  );

  
}
