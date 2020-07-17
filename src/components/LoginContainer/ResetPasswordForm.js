import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { validateEmail } from '../../utils/validators';
import { ERROR_TYPES } from '../../constants/errorTypes';

const useStyles = makeStyles({
  root: {
    padding: '47px 80px 0',
  },
  inputWrapper: {
    marginBottom: '30px',
    position: 'relative',
  },
  btnCancel: {
    padding: '8px 22px',
    textTransform: 'capitalize',
    fontSize: '18px',
    border: '2px solid #0C63AD',

    '&:hover': {
      border: '2px solid #0C63AD',
    },
  },
  btn: {
    padding: '8px 22px',
    textTransform: 'capitalize',
    fontSize: '18px',
  },
  helperText: {
    marginBottom: '100px',
    color: '#787878',
  },
  errorMsg: {
    color: '#E4333F',
    position: 'absolute',
    bottom: '-20px',
    left: '0',
  },
  btnBox: {
    padding: '0 40px 30px',
  },
});

export default function ResetPasswordForm({ emailForReset, setLoginValues }) {
  const classes = useStyles();
  const [emailValue, setEmailValue] = useState(emailForReset);
  const [errorsText, setErrorsText] = useState('');

  const goBack = () => {
    setLoginValues((prevState) => ({
      ...prevState,
      step: 1,
    }));
  };

  const handleSubmit = () => {
    const isCorrect = validateEmail(emailValue);

    if (isCorrect) {
      if (emailValue === 'mail@mail.ru') {
        setErrorsText('');
        setLoginValues((prevState) => ({
          ...prevState,
          step: 3,
          emailForReset: emailValue,
        }));
      } else {
        setErrorsText(ERROR_TYPES.noSuchEmail);
      }
    } else {
      setErrorsText(ERROR_TYPES.invalidEmail);
    }
  };

  // PREVIOUS VALUE
  // const handleSubmit = () => {
  //   if (emailValue === 'mail@mail.ru') {
  //     setLoginValues((prevState) => ({
  //       ...prevState,
  //       step: 3,
  //       emailForReset: emailValue,
  //     }));
  //   }
  // };

  return (
    <>
      <form className={classes.root} noValidate autoComplete='off'>
        <div className={classes.inputWrapper}>
          <TextField
            id='email'
            fullWidth
            type='email'
            label='Электронная почта'
            variant='outlined'
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            error={!!errorsText}
            helperText={errorsText}
          />
        </div>

        <Typography className={classes.helperText}>
          Новый пароль будет автоматически сгенерирован и выслан на указанный
          адрес электронной почты.
        </Typography>
      </form>
      <Box className={classes.btnBox}>
        <Grid container justify='space-between'>
          <Grid item>
            <Button
              variant='outlined'
              color='primary'
              onClick={goBack}
              className={classes.btnCancel}
            >
              Отмена
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant='contained'
              color='primary'
              onClick={handleSubmit}
              className={classes.btn}
            >
              Подтвердить
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
