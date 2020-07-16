import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  btn: {
    padding: '8px 22px',
    textTransform: 'capitalize',
    fontSize: '18px',
  },
  helperText: {
    color: '#787878',
    padding: '47px 80px 188px',
  },
  btnBox: {
    padding: '0 40px 30px',
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
  },
});

export default function ResetSuccessPage({ emailForReset, setLoginValues }) {
  const classes = useStyles();

  const handleSubmit = () => {
    // reset to default values
    setLoginValues((prevState) => ({
      ...prevState,
      email: '',
      password: '',
      // step: 1,
      // emailForReset: ''
      loginError: false,
    }));
  };

  return (
    <Grid container>
      <Grid item className={classes.helperText}>
        Новый пароль автоматически сгенерирован и выслан на{' '}
        <strong style={{ color: '#000' }}>{emailForReset}</strong>
      </Grid>
      <Grid item className={classes.btnBox}>
        <Button
          variant='contained'
          color='primary'
          onClick={handleSubmit}
          className={classes.btn}
        >
          Завершить
        </Button>
      </Grid>
    </Grid>
  );
}
