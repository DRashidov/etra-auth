import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const AUTH_FLOW = {
  login: 'LOGIN',
  register: 'REGISTER',
};

const loginValues = {
  email: '',
  password: '',
};

export default function AuthForm() {
  const [authFlow, setAuthFlow] = useState(AUTH_FLOW.login);
  const [login, setLoginValues] = useState(loginValues);

  const nextStep = (step, handler) => {
    handler(step + 1);
  };

  const prevStep = (step, handler) => {
    handler(step - 1);
  };

  const handleChange = input => e => {
    
  };

  return <Paper elevation={3}>
    asdasdasd
  </Paper>;
}
