import styled from 'styled-components';
import "./App.css"
import { ThemeProvider } from 'styled-components';
import {theme} from "./themes/defaultTheme"
import { useState } from 'react';


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


function App() {

  const [currentStep, setCurrentStep] = useState(1);

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

    return (
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
          {currentStep === 3 && <AddOns />}
          {currentStep === 4 && <Summary />}
    

        
          

        </Main>   
       
      </ThemeProvider>
    );
    
}

export default App;