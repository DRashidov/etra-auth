import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';

import { isCyrillic } from '../../utils/isCyrillic';
import { validateEmail } from '../../utils/validators';
import { ERROR_TYPES } from '../../constants/errorTypes';
import { REGISTER_TYPE } from '../../constants/registerTypes';

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
}));

const initialErrors = {
  lastName: '',
  firstName: '',
  fathersName: '',
  city: '',
  email: '',
};

export default function RegisterIndividualsForm({
  individualValues,
  handleIndividualChange,
  setIsFormSubmitted,
  setSubmittedFormType,
}) {
  const classes = useStyles();
  const [isAgree, setIsAgree] = useState(false);
  const [errorsText, setErrorsText] = useState(initialErrors);

  const handleSubmit = () => {
    const inputsToValidate = [
      'lastName',
      'firstName',
      'fathersName',
      'city',
      'country',
      'email',
    ];
    const newErrorTexts = {};

    inputsToValidate.forEach((field) => {
      if (field === 'email') {
        const isCorrect = validateEmail(individualValues[field]);
        newErrorTexts[field] = isCorrect ? '' : ERROR_TYPES.invalidEmail;
      } else if (individualValues[field] !== '') {
        const errorText = isCyrillic(individualValues[field])
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
      // check if form is not empty
      // check if there are no errors
      setSubmittedFormType(REGISTER_TYPE.individuals);
      setIsFormSubmitted(true);
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
            label='Фамилия'
            variant='outlined'
            value={individualValues.lastName}
            onChange={handleIndividualChange('lastName')}
            error={!!errorsText.lastName}
            helperText={errorsText.lastName}
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
            error={!!errorsText.firstName}
            helperText={errorsText.firstName}
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
            error={!!errorsText.fathersName}
            helperText={errorsText.fathersName}
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
            error={!!errorsText.city}
            helperText={errorsText.city}
          />
          <FormControl
            variant='outlined'
            className={classes.formControl}
            style={{ width: '100%' }}
          >
            <InputLabel htmlFor='outlined-country-native-simple'>
              Страна мобильного оператора
            </InputLabel>
            <Select
              native
              value={individualValues.country}
              onChange={handleIndividualChange('country')}
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
            error={!!errorsText.email}
            helperText={errorsText.email}
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
          </Link>{' '}
          и даю свое согласие “ЭТРА” на обработку моей персональной информации
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
            disabled={!isAgree}
            className={classes.btnGoFurther}
            onClick={handleSubmit}
          >
            Подтвердить
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
