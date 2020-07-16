import React, { useState } from 'react';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';

import RegisterIndividualsForm from './RegisterIndividualsForm';
import RegisterLegalEntetiesForm from './RegisterLegalEntetiesForm';

const useStyles = makeStyles((theme) => ({
  radioBtnsRoot: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    padding: '30px 0',
  },
}));

const REGISTER_TYPE = {
  individuals: 'INDIVIDUALS',
  legalEntities: 'LEGAL ENTETIES',
};

const initialRegisterType = REGISTER_TYPE.individuals;

const initialValuesIndividual = {
  lastName: '',
  firstName: '',
  fathersName: '',
  city: '',
  country: '',
  phoneNumber: '',
  email: '',
};

const legalEntetiesFirstStep = {
  lastName: '',
  firstName: '',
  fathersName: '',
  position: '',
  organisationName: '',
  inn: '',
  country: '',
  phoneNumber: '',
  email: '',
};

const legalEntetiesSecondStep = {
  valuesAreEquel: false,

  country: '',
  city: '',
  street: '',
  building: '',
  apartment: '',
  postalNumber: '',

  actualCountry: '',
  actualCity: '',
  actualStreet: '',
  actualBuilding: '',
  actualAppartment: '',
  actualPostalNumber: '',
};

export default function RegisterContainer() {
  const classes = useStyles();
  const [registerType, setRegisterType] = useState(initialRegisterType);
  const [individualValues, setIndividualValues] = useState(
    initialValuesIndividual
  );
  const [firstStepValues, setFirstStepValues] = useState(
    legalEntetiesFirstStep
  );

  const [secondStepValues, setSecondStepValues] = useState(
    legalEntetiesSecondStep
  );

  const handleIndividualChange = (prop) => (event) => {
    setIndividualValues({ ...individualValues, [prop]: event.target.value });
  };

  const handleFirstStepChange = (prop) => (event) => {
    setFirstStepValues({ ...firstStepValues, [prop]: event.target.value });
  };

  const handleSecondStepChange = (prop) => (event) => {
    setSecondStepValues({ ...secondStepValues, [prop]: event.target.value });
  };

  const handleRegisterTypeChange = (event) => {
    setRegisterType(event.target.value);
  };

  const toggleEqualValues = () => {
    setSecondStepValues((prevState) => ({
      ...prevState,
      valuesAreEquel: !secondStepValues.valuesAreEquel,
    }));
  };

  return (
    <>
      <RadioGroup
        className={classes.radioBtnsRoot}
        aria-label='register type'
        name='registerType'
        value={registerType}
        onChange={handleRegisterTypeChange}
      >
        <FormControlLabel
          value={REGISTER_TYPE.individuals}
          control={<Radio color='primary' />}
          label='Регистрация физического лица'
          style={{ margin: '0' }}
        />
        <FormControlLabel
          value={REGISTER_TYPE.legalEntities}
          control={<Radio color='primary' />}
          style={{ marginLeft: '30px' }}
          label='Регистрация юридического лица'
        />
      </RadioGroup>

      {registerType === REGISTER_TYPE.individuals && (
        <RegisterIndividualsForm
          individualValues={individualValues}
          handleIndividualChange={handleIndividualChange}
        />
      )}
      {registerType === REGISTER_TYPE.legalEntities && (
        <RegisterLegalEntetiesForm
          firstStepValues={firstStepValues}
          secondStepValues={secondStepValues}
          handleFirstStepChange={handleFirstStepChange}
          handleSecondStepChange={handleSecondStepChange}
          toggleEqualValues={toggleEqualValues}
        />
      )}
    </>
  );
}
