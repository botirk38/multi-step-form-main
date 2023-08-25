// StepNavigation.tsx
import React from 'react';
import { NavigationBtns, NavigationBtnBack } from './StepNavigation';

type Props = {
  handleNext: () => void;
  handleBack: () => void;
  currentStep: number;
  maxStep: number;
  goToStep?: (step: number) => void;
  setShowThankYou?: (showThankYou: boolean) => void;
};

export const StepNavigation: React.FC<Props> = ({ handleNext, handleBack, currentStep, maxStep, setShowThankYou }) => (
  <>
    {currentStep > 1 && 
      <NavigationBtnBack onClick={handleBack}>
        Go Back
      </NavigationBtnBack>
    }
    {currentStep < maxStep && currentStep < 4 &&
      <NavigationBtns type="submit" onClick={handleNext}>
        Next Step
      </NavigationBtns>
    }

    {currentStep === 4 &&
      <NavigationBtns type="submit" onClick={() => {
        if (setShowThankYou) {
          setShowThankYou(true);
        } else {
          handleNext();
        }
      }}>
        Confirm
      </NavigationBtns>
    }
  </>
);
