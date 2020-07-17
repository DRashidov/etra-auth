import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';

import { isCyrillic } from '../../utils/isCyrillic';
import { validateEmail } from '../../utils/validators';
import { ERROR_TYPES } from '../../constants/errorTypes';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0 40px 30px',
    '& .MuiFormHelperText-root.Mui-error': {
      position: 'absolute',
      bottom: '-22px',
      fontSize: '0.85rem',
    },
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
  numberInput: {
    '& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
      display: 'none',
    },
  },
}));

const initialErrors = {
  lastName: '',
  firstName: '',
  fathersName: '',
  position: '',
  organisationName: '',
  inn: '',
  email: '',
};

export default function FirstStep({
  setCurrentStep,
  firstStepValues,
  handleFirstStepChange,
}) {
  const classes = useStyles();
  const [errorsText, setErrorsText] = useState(initialErrors);

  const handleSubmit = () => {
    const inputsToValidate = [
      'lastName',
      'firstName',
      'fathersName',
      'position',
      'organisationName',
      'inn',
      'email',
    ];
    const newErrorTexts = {};

    inputsToValidate.forEach((field) => {
      if (field === 'inn') {
        newErrorTexts[field] = firstStepValues[field].length === 10 ? '' : ERROR_TYPES.invalidInn; 

      } else if (field === 'email') {
        const isCorrect = validateEmail(firstStepValues[field]);
        newErrorTexts[field] = isCorrect ? '' : ERROR_TYPES.invalidEmail;

      } else if (firstStepValues[field] !== '') {
        const errorText = isCyrillic(firstStepValues[field])
          ? ''
          : ERROR_TYPES.nonCyrillic;
        newErrorTexts[field] = errorText;
      } else {
        newErrorTexts[field] = '';
      }
    });

    setErrorsText(newErrorTexts);
    console.log(newErrorTexts);

    const formHasNoErrors = Object.values(newErrorTexts).every(
      (error) => error === ''
    );
    console.log('formHasErrors', formHasNoErrors);

    if (formHasNoErrors) {
      setCurrentStep(2);
    }
  };

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
            error={!!errorsText.lastName}
            helperText={errorsText.lastName}
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
            error={!!errorsText.firstName}
            helperText={errorsText.firstName}
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
            error={!!errorsText.fathersName}
            helperText={errorsText.fathersName}
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
            error={!!errorsText.position}
            helperText={errorsText.position}
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
            error={!!errorsText.organisationName}
            helperText={errorsText.organisationName}
          />
          <TextField
            id='inn'
            style={{ marginBottom: '30px' }}
            fullWidth
            type='number'
            label='ИНН'
            variant='outlined'
            value={firstStepValues.inn}
            onChange={handleFirstStepChange('inn')}
            error={!!errorsText.inn}
            helperText={errorsText.inn}
            className={classes.numberInput}
          />
          <FormControl
            variant='outlined'
            className={classes.formControl}
            style={{ width: '100%' }}
          >
            <InputLabel htmlFor='outlined-age-native-simple'>
              Страна мобильного оператора
            </InputLabel>
            <Select
              native
              value={firstStepValues.country}
              onChange={handleFirstStepChange('country')}
              label='Страна мобильного оператора'
              style={{ marginBottom: '30px' }}
              inputProps={{
                name: 'country',
                id: 'outlined-country-native-simple',
              }}
            >
              <option value={'Russia'}>Россия</option>
              <option value={'Azerbaijan'}>Азербайджан</option>
              <option value={'Armenia'}>Армения</option>
              <option value={'Ukraine'}>Украина</option>
              <option value={'Belarus'}>Беларусь</option>
              <option value={'Moldova'}>Молдова</option>
              <option value={'Latvia'}>Латвия</option>
              <option value={'Lithuania'}>Литва</option>
              <option value={'Estonia'}>Эстония</option>
              <option value={'Georgia'}>Грузия</option>
              <option value={'Kazakhstan'}>Казахстан</option>
              <option value={'Kyrgyzstan'}>Киргизия</option>
              <option value={'Tajikistan'}>Таджикистан</option>
              <option value={'Turkmenistan'}>Туркмения</option>
              <option value={'Uzbekistan'}>Узбекистан</option>
            </Select>
          </FormControl>
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
            fullWidth
            type='email'
            label='Электронная почта'
            variant='outlined'
            value={firstStepValues.email}
            onChange={handleFirstStepChange('email')}
            error={!!errorsText.email}
            helperText={errorsText.email}
          />
        </Grid>
      </Grid>
      <Grid container justify='flex-end'>
        <Grid item>
          <Button
            variant='contained'
            color='primary'
            onClick={handleSubmit}
            className={classes.btnGoFurther}
          >
            Далее
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
