import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

import Tabs from './Tabs';

import logo from '../static/images/ETRA-Logo.png';

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: 'auto',
    maxWidth: 500,
    minWidth: 500,
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

const loginValues = {
  email: '',
  password: '',
};

export default function AuthForm() {
  const classes = useStyles();
  const [authFlow, setAuthFlow] = useState(AUTH_FLOW.login);
  const [login, setLoginValues] = useState(loginValues);

  const nextStep = (step, handler) => {
    handler(step + 1);
  };

  const prevStep = (step, handler) => {
    handler(step - 1);
  };

  const handleChange = (input) => (e) => {};

  return (
    <Paper elevation={3} className={classes.paper}>
      <Grid container>
        <Grid item className={classes.header}>
          <img alt='logo' src={logo} />
        </Grid>
      </Grid>
      <Tabs />
    </Paper>
  );
}
