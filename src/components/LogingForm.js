import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles({
  root: {
    padding: '47px 80px 50px',
  },
  link: {
    textDecoration: 'underline',
    marginBottom: '30px',
    marginTop: '15px',
  },
  btn: {
    padding: '8px 27px',
    textTransform: 'capitalize',
    fontSize: '18px',
  },
  passwordInputContainer: {
    position: 'relative',
  },
  passwordInput: {
    font: 'small-caption',
    fontSize: '16px',
  },
  errorMsg: {
    color: '#E4333F',
    position: 'absolute',
    bottom: '-20px',
  },
});

export default function LogingForm({
  handleLoginValuesChange,
  loginValues,
  handleLogin,
  handlePasswordReset,
}) {
  const classes = useStyles();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const errorText = 'Неверный логин или пароль';

  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <TextField
        id='email'
        style={{ marginBottom: '30px' }}
        fullWidth
        type='email'
        label='Электронная почта'
        variant='outlined'
        value={loginValues.email}
        onChange={handleLoginValuesChange('email')}
      />
      <FormControl
        variant='outlined'
        style={{ marginBottom: '30px' }}
        fullWidth
        className={classes.passwordInputContainer}
      >
        <InputLabel htmlFor='outlined-adornment-password'>Пароль</InputLabel>
        <OutlinedInput
          id='outlined-adornment-password'
          type={showPassword ? 'text' : 'password'}
          value={loginValues.password}
          onChange={handleLoginValuesChange('password')}
          className={classes.passwordInput}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={() => setShowPassword(!showPassword)}
                onMouseDown={handleMouseDownPassword}
                edge='end'
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={70}
        />
        {loginValues.loginError && (
          <span className={classes.errorMsg}>{errorText}</span>
        )}
      </FormControl>
      <Typography className={classes.link}>
        <Link href='#' onClick={handlePasswordReset} >
          Забыли пароль?
        </Link>
      </Typography>
      <Grid container justify='flex-end'>
        <Grid item>
          <Button
            variant='contained'
            color='primary'
            onClick={handleLogin}
            className={classes.btn}
          >
            Войти
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
