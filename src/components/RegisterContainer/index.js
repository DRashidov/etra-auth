import React, { useState } from 'react';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

// import RegisterForm from './RegisterForm';

const useStyles = makeStyles((theme) => ({
  radioBtnsRoot: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

const REGISTER_TYPE = {
  individuals: 'INDIVIDUALS',
  legalEntities: 'LEGAL ENTETIES',
};

const initialRegisterType = REGISTER_TYPE.individuals;

export default function RegisterContainer() {
  const classes = useStyles();
  const [registerType, setRegisterType] = useState(initialRegisterType);

  const handleChange = (event) => {
    setRegisterType(event.target.value);
  };

  return (
    // <FormControl component='fieldset'>
      <RadioGroup
        className={classes.radioBtnsRoot}
        aria-label='register type'
        name='registerType'
        value={registerType}
        onChange={handleChange}
      >
        <FormControlLabel
          value={REGISTER_TYPE.individuals}
          control={<Radio color="primary" />}
          label='Регистрация физического лица'
        />
        <FormControlLabel
          value={REGISTER_TYPE.legalEntities}
          control={<Radio color="primary" />}
          label='Регистрация юридического лица'
        />
      </RadioGroup>
    // </FormControl>
  );
}
