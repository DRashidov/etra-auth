import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { isCyrillic } from '../../utils/isCyrillic';
import { ERROR_TYPES } from '../../constants/errorTypes';

const addressErrors = {
  country: '',
  city: '',
  street: '',

  actualCountry: '',
  actualCity: '',
  actualStreet: '',
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0 40px 30px',
    '& .MuiFormHelperText-root.Mui-error': {
      position: 'absolute',
      bottom: '-22px',
      fontSize: '0.85rem',
    },
    '& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
      display: 'none',
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
  adressesText: {
    display: 'flex',
    alignItems: 'flex-start',
    fontSize: '1rem',
    margin: '15px 0 30px',
  },
  checkBox: {
    padding: '0 20px 0 0',
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
  btnSubmit: {
    fontSize: '18px',
    padding: '8px 22px',
    textTransform: 'capitalize',
  },
}));

export default function SecondStep({
  setCurrentStep,
  secondStepValues,
  handleSecondStepChange,
  setIsFormSubmitted,
  setSubmittedFormType,
  setSecondStepValues
}) {
  const classes = useStyles();
  const [isAgree, setIsAgree] = useState(true);
  const [errorsText, setErrorsText] = useState(addressErrors);
  const [valuesAreEqual, setValuesAreEqual] = useState(false);

  const toggleEqualValues = () => {
    setValuesAreEqual(!valuesAreEqual);
    setErrorsText((prevState) => ({
      ...prevState,
      actualCountry: '',
      actualCity: '',
      actualStreet: '',
    }));

    setSecondStepValues((prevState) => ({
      ...prevState,
      actualCountry: '',
      actualCity: '',
      actualStreet: '',
      actualBuilding: '',
      actualAppartment: '',
      actualPostalNumber: '',
    }))
  };

  const handleSubmit = () => {
    const inputsToValidate = [
      'country',
      'city',
      'street',
      'building',
      'apartment',
      'postalNumber',

      'actualCountry',
      'actualCity',
      'actualStreet',
      'actualBuilding',
      'actualAppartment',
      'actualPostalNumber',
    ];
    const newErrorTexts = {};

    inputsToValidate.forEach((field) => {
      if (secondStepValues[field] !== '') {
        const errorText = isCyrillic(secondStepValues[field])
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
      setSubmittedFormType('LEGAL ENTETIES');
      setIsFormSubmitted(true);
    }
  };

  return (
    <div className={classes.root}>
      <Grid container>
        {/* Юридический адрес */}
        <Grid item xs={6} className={classes.gridItemLeft}>
          <Typography variant='body2' gutterBottom style={{ color: '#787878' }}>
            Юридический адрес
          </Typography>
          <TextField
            id='country-2'
            style={{ marginBottom: '30px' }}
            fullWidth
            type='text'
            label='Страна'
            variant='outlined'
            value={secondStepValues.country}
            onChange={handleSecondStepChange('country')}
            error={!!errorsText.country}
            helperText={errorsText.country}
          />
          <TextField
            id='city'
            style={{ marginBottom: '30px' }}
            fullWidth
            type='text'
            label='Населенный пункт'
            variant='outlined'
            value={secondStepValues.city}
            onChange={handleSecondStepChange('city')}
            error={!!errorsText.city}
            helperText={errorsText.city}
          />
          <TextField
            id='street'
            style={{ marginBottom: '30px' }}
            fullWidth
            type='text'
            label='Улица'
            variant='outlined'
            value={secondStepValues.street}
            onChange={handleSecondStepChange('street')}
            error={!!errorsText.street}
            helperText={errorsText.street}
          />
          <Grid container>
            <Grid item xs={6} style={{ paddingRight: '7px' }}>
              <TextField
                id='building'
                style={{ marginBottom: '30px' }}
                fullWidth
                type='number'
                label='Дом'
                variant='outlined'
                value={secondStepValues.building}
                onChange={handleSecondStepChange('building')}
              />
            </Grid>
            <Grid item xs={6} style={{ paddingLeft: '7px' }}>
              <TextField
                id='apartment'
                style={{ marginBottom: '30px' }}
                fullWidth
                type='number'
                label='Квартира/Офис'
                variant='outlined'
                value={secondStepValues.apartment}
                onChange={handleSecondStepChange('apartment')}
              />
            </Grid>
          </Grid>
          <TextField
            id='postalNumber'
            style={{ marginBottom: '30px' }}
            fullWidth
            type='number'
            label='Почтовый индекс'
            variant='outlined'
            value={secondStepValues.postalNumber}
            onChange={handleSecondStepChange('postalNumber')}
          />
        </Grid>

        {/* Фактический адрес */}
        <Grid item xs={6} className={classes.gridItemLeft}>
          <Typography variant='body2' gutterBottom style={{ color: '#787878' }}>
            Фактический адрес
          </Typography>
          <TextField
            id='actualCountry'
            style={{ marginBottom: '30px' }}
            fullWidth
            type='text'
            label='Страна'
            variant='outlined'
            value={secondStepValues.actualCountry}
            onChange={handleSecondStepChange('actualCountry')}
            disabled={valuesAreEqual} 
            error={!!errorsText.actualCountry}
            helperText={errorsText.actualCountry}
          />
          <TextField
            id='actualCity'
            style={{ marginBottom: '30px' }}
            fullWidth
            type='text'
            label='Населенный пункт'
            variant='outlined'
            value={secondStepValues.actualCity}
            onChange={handleSecondStepChange('actualCity')}
            disabled={valuesAreEqual}
            error={!!errorsText.actualCity}
            helperText={errorsText.actualCity}
          />
          <TextField
            id='actualStreet'
            style={{ marginBottom: '30px' }}
            fullWidth
            type='text'
            label='Улица'
            variant='outlined'
            value={secondStepValues.actualStreet}
            onChange={handleSecondStepChange('actualStreet')}
            disabled={valuesAreEqual}
            error={!!errorsText.actualStreet}
            helperText={errorsText.actualStreet}
          />
          <Grid container>
            <Grid item xs={6} style={{ paddingRight: '7px' }}>
              <TextField
                id='actualBuilding'
                style={{ marginBottom: '30px' }}
                fullWidth
                type='number'
                label='Дом'
                variant='outlined'
                value={secondStepValues.actualBuilding}
                onChange={handleSecondStepChange('actualBuilding')}
                disabled={valuesAreEqual}
              />
            </Grid>
            <Grid item xs={6} style={{ paddingLeft: '7px' }}>
              <TextField
                id='actualAppartment'
                style={{ marginBottom: '30px' }}
                fullWidth
                type='number'
                label='Квартира/Офис'
                variant='outlined'
                value={secondStepValues.actualAppartment}
                onChange={handleSecondStepChange('actualAppartment')}
                disabled={valuesAreEqual}
              />
            </Grid>
          </Grid>
          <TextField
            id='actualPostalNumber'
            style={{ marginBottom: '30px' }}
            fullWidth
            type='number'
            label='Почтовый индекс'
            variant='outlined'
            value={secondStepValues.actualPostalNumber}
            onChange={handleSecondStepChange('actualPostalNumber')}
            disabled={valuesAreEqual}
          />
        </Grid>
      </Grid>
      <div className={classes.adressesText}>
        <Checkbox
          checked={valuesAreEqual}
          color='primary'
          onChange={toggleEqualValues}
          inputProps={{ 'aria-label': 'primary checkbox' }}
          className={classes.checkBox}
        />
        <Box>Юридический и фактический адреса совпадают</Box>
      </div>
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
      <Grid container justify='space-between' style={{ marginTop: '40px' }}>
        <Grid item>
          <Button
            variant='outlined'
            color='primary'
            onClick={() => setCurrentStep(1)}
            className={classes.btnCancel}
          >
            Назад
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant='contained'
            color='primary'
            className={classes.btnSubmit}
            onClick={handleSubmit}
          >
            Подтвердить
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
