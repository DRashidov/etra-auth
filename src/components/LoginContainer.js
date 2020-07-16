import React, { useState } from 'react';

import LoginForm from './LogingForm';
import ResetPasswordForm from './ResetPasswordForm';
import ResetSuccessPage from './ResetSuccessPage';

const initialLoginValues = {
  email: '',
  password: '',
  step: 1,
  loginError: false,
  emailForReset: '',
};

export default function LoginContainer() {
  const [loginValues, setLoginValues] = useState(initialLoginValues);

  const handleLogin = () => {
    if (loginValues.email === 'mail@mail.ru') {
      if (loginValues.password === 'test123!#') {
        setLoginValues((prevState) => ({
          ...prevState,
          loginError: false,
        }));
        document.location.href = 'https://www.google.com/';
      }
    } else {
      setLoginValues((prevState) => ({
        ...prevState,
        loginError: true,
      }));
    }
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    setLoginValues((prevState) => ({
      ...prevState,
      step: 2,
    }));
  };

  const handleLoginValuesChange = (prop) => (event) => {
    setLoginValues({ ...loginValues, [prop]: event.target.value });
  };

  if (loginValues.step === 1) {
    return (
      <LoginForm
        handleLoginValuesChange={handleLoginValuesChange}
        loginValues={loginValues}
        handleLogin={handleLogin}
        handlePasswordReset={handlePasswordReset}
      />
    );
  }

  if (loginValues.step === 2) {
    return (
      <ResetPasswordForm
        emailForReset={loginValues.emailForReset}
        setLoginValues={setLoginValues}
        handleLoginValuesChange={handleLoginValuesChange}
      />
    );
  }

  if (loginValues.step === 3) {
    return (
      <ResetSuccessPage
        emailForReset={loginValues.emailForReset}
        setLoginValues={setLoginValues}
      />
    );
  }
}
