import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
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

export default function FirstStep({
  setCurrentStep,
  firstStepValues,
  handleFirstStepChange,
}) {
  const classes = useStyles();
  const [isAgree, setIsAgree] = useState(true);;

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={6} className={classes.gridItemLeft}>
          <TextField
            id='lastName'
            style={{ marginBottom: '30px' }}
            fullWidth
            type='text'
            label='Фамилия сотрудника'
            variant='outlined'
            value={firstStepValues.lastName}
            onChange={handleFirstStepChange('lastName')}
          />
          <TextField
            id='Имя сотрудника'
            style={{ marginBottom: '30px' }}
            fullWidth
            type='text'
            label='Имя'
            variant='outlined'
            value={firstStepValues.firstName}
            onChange={handleFirstStepChange('firstName')}
          />
          <TextField
            id='fathersName'
            style={{ marginBottom: '30px' }}
            fullWidth
            type='text'
            label='Отчество сотрудника'
            variant='outlined'
            value={firstStepValues.fathersName}
            onChange={handleFirstStepChange('fathersName')}
          />
          <TextField
            id='position'
            style={{ marginBottom: '30px' }}
            fullWidth
            type='text'
            label='Должность сотрудника'
            variant='outlined'
            value={firstStepValues.position}
            onChange={handleFirstStepChange('position')}
          />
        </Grid>
        <Grid item xs={6} className={classes.gridItemRight}>
          <TextField
            id='organisationName'
            style={{ marginBottom: '30px' }}
            fullWidth
            type='text'
            label='Наименование организации'
            variant='outlined'
            value={firstStepValues.organisationName}
            onChange={handleFirstStepChange('organisationName')}
          />
          <TextField
            id='inn'
            style={{ marginBottom: '30px' }}
            fullWidth
            type='text'
            label='ИНН'
            variant='outlined'
            value={firstStepValues.inn}
            onChange={handleFirstStepChange('inn')}
          />
          <TextField
            id='country'
            style={{ marginBottom: '30px' }}
            fullWidth
            type='text'
            label='Страна мобильного оператора'
            variant='outlined'
            value={firstStepValues.country}
            onChange={handleFirstStepChange('country')}
          />
          <TextField
            id='phoneNumber'
            style={{ marginBottom: '30px' }}
            fullWidth
            type='text'
            label='Номер телефона'
            variant='outlined'
            value={firstStepValues.phoneNumber}
            onChange={handleFirstStepChange('phoneNumber')}
          />
          <TextField
            id='email'
            // style={{ marginBottom: '30px' }}
            fullWidth
            type='email'
            label='Электронная почта'
            variant='outlined'
            value={firstStepValues.email}
            onChange={handleFirstStepChange('email')}
          />
        </Grid>
      </Grid>
      <Grid container justify='flex-end'>
        <Grid item>
          <Button
            variant='contained'
            color='primary'
            onClick={() => setCurrentStep(2)}
            className={classes.btnGoFurther}
          >
            Далее
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
