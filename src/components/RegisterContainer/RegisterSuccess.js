import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0 40px 30px',
  },
  button: {
    textTransform: 'capitalize',
    marginTop: '50px',
    padding: '8px 32px',
    fontSize: '1rem',
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
  },
  textContainer: {
    margin: '75px auto 180px',
  },
}));

export default function RegisterSuccess({ email }) {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const classes = useStyles();

  const finalText = (
    <Typography variant='body2' gutterBottom style={{ color: '#787878' }}>
      Ваш почтовый адрес был успешно подтвержден. Наш менеджер свяжется с вами в
      течение трех рабочих дней.
    </Typography>
  );

  const confirmText = (
    <Typography variant='body2' gutterBottom style={{ color: '#787878' }}>
      На почтовый ящик <strong style={{ color: '#000' }}>{email}</strong> придет
      письмо, содержащее ссылку для подтверждения адреса.
    </Typography>
  );

  return (
    <Grid container className={classes.root}>
      <Grid item xs={6} className={classes.textContainer}>
        {isConfirmed ? finalText : confirmText}
      </Grid>
      <Grid item className={classes.btnContainer}>
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          onClick={() => setIsConfirmed(true)}
        >
          Завершить
        </Button>
      </Grid>
    </Grid>
  );
}
