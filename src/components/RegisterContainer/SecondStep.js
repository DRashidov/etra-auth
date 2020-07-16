import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

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
  toggleEqualValues
}) {
  const classes = useStyles();
  const [isAgree, setIsAgree] = useState(true);

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
            style={{ marginBottom: '15px' }}
            fullWidth
            type='text'
            label='Страна'
            variant='outlined'
            value={secondStepValues.country}
            onChange={handleSecondStepChange('country')}
          />
          <TextField
            id='city'
            style={{ marginBottom: '15px' }}
            fullWidth
            type='text'
            label='Населенный пункт'
            variant='outlined'
            value={secondStepValues.city}
            onChange={handleSecondStepChange('city')}
          />
          <TextField
            id='street'
            style={{ marginBottom: '15px' }}
            fullWidth
            type='text'
            label='Улица'
            variant='outlined'
            value={secondStepValues.street}
            onChange={handleSecondStepChange('street')}
          />
          <Grid container>
            <Grid item xs={6} style={{ paddingRight: '7px' }}>
              <TextField
                id='building'
                style={{ marginBottom: '15px' }}
                fullWidth
                type='text'
                label='Дом'
                variant='outlined'
                value={secondStepValues.building}
                onChange={handleSecondStepChange('building')}
              />
            </Grid>
            <Grid item xs={6} style={{ paddingLeft: '7px' }}>
              <TextField
                id='apartment'
                style={{ marginBottom: '15px' }}
                fullWidth
                type='text'
                label='Квартира/Офис'
                variant='outlined'
                value={secondStepValues.apartment}
                onChange={handleSecondStepChange('apartment')}
              />
            </Grid>
          </Grid>
          <TextField
            id='postalNumber'
            style={{ marginBottom: '15px' }}
            fullWidth
            type='text'
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
            style={{ marginBottom: '15px' }}
            fullWidth
            type='text'
            label='Страна'
            variant='outlined'
            value={secondStepValues.actualCountry}
            onChange={handleSecondStepChange('actualCountry')}
            disabled={secondStepValues.valuesAreEquel}
          />
          <TextField
            id='actualCity'
            style={{ marginBottom: '15px' }}
            fullWidth
            type='text'
            label='Населенный пункт'
            variant='outlined'
            value={secondStepValues.actualCity}
            onChange={handleSecondStepChange('actualCity')}
            disabled={secondStepValues.valuesAreEquel}
          />
          <TextField
            id='actualStreet'
            style={{ marginBottom: '15px' }}
            fullWidth
            type='text'
            label='Улица'
            variant='outlined'
            value={secondStepValues.actualStreet}
            onChange={handleSecondStepChange('actualStreet')}
            disabled={secondStepValues.valuesAreEquel}
          />
          <Grid container>
            <Grid item xs={6} style={{ paddingRight: '7px' }}>
              <TextField
                id='actualBuilding'
                style={{ marginBottom: '15px' }}
                fullWidth
                type='text'
                label='Дом'
                variant='outlined'
                value={secondStepValues.actualBuilding}
                onChange={handleSecondStepChange('actualBuilding')}
                disabled={secondStepValues.valuesAreEquel}
              />
            </Grid>
            <Grid item xs={6} style={{ paddingLeft: '7px' }}>
              <TextField
                id='actualAppartment'
                style={{ marginBottom: '15px' }}
                fullWidth
                type='text'
                label='Квартира/Офис'
                variant='outlined'
                value={secondStepValues.actualAppartment}
                onChange={handleSecondStepChange('actualAppartment')}
                disabled={secondStepValues.valuesAreEquel}
              />
            </Grid>
          </Grid>
          <TextField
            id='actualPostalNumber'
            style={{ marginBottom: '15px' }}
            fullWidth
            type='text'
            label='Почтовый индекс'
            variant='outlined'
            value={secondStepValues.actualPostalNumber}
            onChange={handleSecondStepChange('actualPostalNumber')}
            disabled={secondStepValues.valuesAreEquel}
          />
        </Grid>
      </Grid>
      <div className={classes.adressesText}>
        <Checkbox
          checked={secondStepValues.valuesAreEquel}
          color='primary'
          // value={secondStepValues.valuesAreEquel}
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
            onClick={() => setCurrentStep(2)}
            className={classes.btnSubmit}
          >
            Подтвердить
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
