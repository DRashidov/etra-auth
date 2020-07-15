import React from 'react';

import LoginForm from './LogingForm';
import ResetPasswordForm from './ResetPasswordForm';
import ResetSuccessPage from './ResetSuccessPage';

export default function LoginContainer({
  handleChange,
  loginValues,
  handleLogin,
  handlePasswordReset,
  setLoginValues,
}) {
  if (loginValues.step === 1) {
    return (
      <LoginForm
        handleChange={handleChange}
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
        resetError={loginValues.resetError}
        setLoginValues={setLoginValues}
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
