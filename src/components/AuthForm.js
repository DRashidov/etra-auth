import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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

// const AUTH_FLOW = {
//   login: 'LOGIN',
//   register: 'REGISTER',
// };

const initialLoginValues = {
  email: '',
  password: '',
  step: 1,
  loginError: false,
  resetError: false,
  emailForReset: ''
};

export default function AuthForm() {
  const classes = useStyles();
  const [loginValues, setLoginValues] = useState(initialLoginValues);
  // const [authFlow, setAuthFlow] = useState(AUTH_FLOW.login);
  // const [registerValues, setLoginValues] = useState(loginValues);

  const handleLogin = () => {
    if (loginValues.email === 'mail@mail.ru') {
      if (loginValues.password === 'test123!#') {
        setLoginValues((prevState) => ({
          ...prevState,
          loginError: false,
        }));
        document.location.href = 'https://www.google.com/';
      }
    } else {
      setLoginValues((prevState) => ({
        ...prevState,
        loginError: true,
      }));
    }
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    setLoginValues((prevState) => ({
      ...prevState,
      step: 2,
    }));
  };

  const handleLoginChange = (prop) => (event) => {
    setLoginValues({ ...loginValues, [prop]: event.target.value });
  };

  // const handleRegisterChange= (prop) => (event) => {
  //   setLoginValues({ ...values, [prop]: event.target.value });
  // };

  return (
    <Paper elevation={3} className={classes.paper}>
      <Grid container>
        <Grid item className={classes.header}>
          <img alt='logo' src={logo} />
        </Grid>
      </Grid>
      <Tabs
        handleLoginChange={handleLoginChange}
        handleLogin={handleLogin}
        loginValues={loginValues}
        handlePasswordReset={handlePasswordReset}
        setLoginValues={setLoginValues}
      />
    </Paper>
  );
}
