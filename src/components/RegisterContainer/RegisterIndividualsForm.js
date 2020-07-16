import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0 40px 30px',
  },
  gridItemLeft: {
    paddingRight: '15px',
  },
  gridItemRight: {
    paddingLeft: '15px',
  },
  rulesContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    fontSize: '1rem',
  },
  checkBox: {
    padding: '0 20px 0 0',
  },
  btnGoFurther: {
    textTransform: 'capitalize',
    marginTop: '50px',
    padding: '8px 32px',
    fontSize: '1rem',
  },
}));

export default function RegisterIndividualsForm({
  individualValues,
  handleIndividualChange,
}) {
  const classes = useStyles();
  const [isAgree, setIsAgree] = useState(true);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={6} className={classes.gridItemLeft}>
          <TextField
            id='lastName'
            style={{ marginBottom: '30px' }}
            fullWidth
            type='text'
            label='Фамилия'
            variant='outlined'
            value={individualValues.lastName}
            onChange={handleIndividualChange('lastName')}
          />
          <TextField
            id='firstName'
            style={{ marginBottom: '30px' }}
            fullWidth
            type='text'
            label='Имя'
            variant='outlined'
            value={individualValues.firstName}
            onChange={handleIndividualChange('firstName')}
          />
          <TextField
            id='fathersName'
            style={{ marginBottom: '30px' }}
            fullWidth
            type='text'
            label='Отчество'
            variant='outlined'
            value={individualValues.fathersName}
            onChange={handleIndividualChange('fathersName')}
          />
        </Grid>
        <Grid item xs={6} className={classes.gridItemRight}>
          <TextField
            id='city'
            style={{ marginBottom: '30px' }}
            fullWidth
            type='text'
            label='Город проживания'
            variant='outlined'
            value={individualValues.city}
            onChange={handleIndividualChange('city')}
          />
          <TextField
            id='country'
            style={{ marginBottom: '30px' }}
            fullWidth
            type='text'
            label='Страна мобильного оператора'
            variant='outlined'
            value={individualValues.country}
            onChange={handleIndividualChange('country')}
          />
          <TextField
            id='phoneNumber'
            style={{ marginBottom: '30px' }}
            fullWidth
            type='text'
            label='Номер телефона'
            variant='outlined'
            value={individualValues.phoneNumber}
            onChange={handleIndividualChange('phoneNumber')}
          />
          <TextField
            id='email'
            style={{ marginBottom: '30px' }}
            fullWidth
            type='email'
            label='Электронная почта'
            variant='outlined'
            value={individualValues.email}
            onChange={handleIndividualChange('email')}
          />
        </Grid>
      </Grid>
      <div className={classes.rulesContainer}>
        <Checkbox
          checked={isAgree}
          color='primary'
          onChange={() => setIsAgree(!isAgree)}
          inputProps={{ 'aria-label': 'primary checkbox' }}
          className={classes.checkBox}
        />
        <Box className={classes.rulesText}>
          Я принимаю условия{' '}
          <Link
            href='#'
            underline='always'
            onClick={(event) => event.preventDefault()}
          >
            Пользовательского соглашения
          </Link>
          {' '}и даю свое согласие “ЭТРА” на обработку моей персональной информации
          на условиях, определенных{' '}
          <Link
            href='#'
            underline='always'
            onClick={(event) => event.preventDefault()}
          >
            Политикой конфиденциальности
          </Link>
          .
        </Box>
      </div>
      <Grid container justify='flex-end'>
        <Grid item>
          <Button
            variant='contained'
            color='primary'
            className={classes.btnGoFurther}
          >
            Подтвердить
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
