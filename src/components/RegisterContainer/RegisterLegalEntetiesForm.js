import React, { useState } from 'react';

import FirstStep from './FirstStep';
import SecondStep from './SecondStep';

export default function RegisterLegalEntetiesForm({
  firstStepValues,
  secondStepValues,
  handleFirstStepChange,
  handleSecondStepChange,
  setIsFormSubmitted,
  setSubmittedFormType,
  setSecondStepValues,
}) {
  const [currentStep, setCurrentStep] = useState(1);

  if (currentStep === 1) {
    return (
      <FirstStep
        firstStepValues={firstStepValues}
        handleFirstStepChange={handleFirstStepChange}
        setCurrentStep={setCurrentStep}
      />
    );
  }

  if (currentStep === 2) {
    return (
      <SecondStep
        secondStepValues={secondStepValues}
        handleSecondStepChange={handleSecondStepChange}
        setCurrentStep={setCurrentStep}
        setIsFormSubmitted={setIsFormSubmitted}
        setSubmittedFormType={setSubmittedFormType}
        setSecondStepValues={setSecondStepValues}
      />
    );
  }
}
