import styled from 'styled-components';
import "./App.css"
import { ThemeProvider } from 'styled-components';
import {theme} from "./themes/defaultTheme"
import { useState } from 'react';
import { FormProvider } from './FormContext.tsx';



const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100vw;
  min-height: 100vh;
  position: relative;
  
  z-index: 0;
 

  @media (min-width: 768px) {
    flex-direction: row;
    min-height: 85vh;
    align-items: center;
    justify-content: start;
    max-width: 90vw;
    min-width: 90vw;
    background-color: ${props => props.theme.colors.neutral.white};
    border-radius: 20px;

  }

  @media (min-width: 1024px) {
    max-width: 80vw;
    min-width: 80vw;
  }
 

`;






import Navbar from './components/Navbar/Navbar.tsx'
import PersonalInfo from './components/Personal/PersonalInfo.tsx';
import SelectPlan from './components/SelectPlan/SelectPlan.tsx';
import AddOns from './components/AddOns/AddOns.tsx';
import Summary from './components/Summary/Summary.tsx';
import ThankYou from './components/ThankYou/ThankYou.tsx';


function App() {

  const [currentStep, setCurrentStep] = useState(1);
  const [showThankYou, setShowThankYou] = useState(false);


    const handleNext = () => {
        if (currentStep < 4) { // Assuming you have 4 steps
            setCurrentStep(prevStep => prevStep + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(prevStep => prevStep - 1);
        }
    };

    const goToStep = (step: number) => {
      setCurrentStep(step);
    }

  
  

    return (
      <FormProvider>
        <ThemeProvider theme={theme}>
          <Main>
            <Navbar currentStep={currentStep} />
            
            {currentStep === 1 && 
            <PersonalInfo 
              handleBack={handleBack} 
              handleNext={handleNext} 
              currentStep={currentStep} 
              maxStep={4}
            />
          }
            {currentStep === 2 && 
            <SelectPlan 
            handleBack={handleBack} 
            handleNext={handleNext} 
            currentStep={currentStep} 
            maxStep={4} 
            />
            }
            {currentStep === 3 && <AddOns 
            handleBack={handleBack} 
            handleNext={handleNext} 
            currentStep={currentStep} 
            maxStep={4} 
            />}
            {currentStep === 4 && !showThankYou && 
            <Summary 
              handleBack={handleBack}
              handleNext={handleNext}
              goToStep={goToStep}
              currentStep={currentStep}
              maxStep={4}
              setShowThankYou={setShowThankYou}
            />
            }

            {currentStep === 4 && showThankYou && 
            <ThankYou
              handleBack={handleBack}
              handleNext={handleNext}
              currentStep={currentStep}
              maxStep={4}
              
            />
            }

      

          
            

          </Main>   
       
        </ThemeProvider>
      </FormProvider>
    );
    
}

export default App;