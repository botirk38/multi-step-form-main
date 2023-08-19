import React from "react"; // Import React
import { Subtitle, Title, ComponentNavigationProps,MobileStepNavigation } from "../../types";
import { SelectPlanContainer, SelectPlanForm, PlanBtn, PlanBtnPicture,PlanBtnImg,PlanBtnContainer,PlanItemPrice,PlanItemTitle,PlanItemContainer } from "./SelectPlan";
import { DesktopNavigation } from "../NavigationBtns/StepNavigation"; // I assume they are exported from StepNavigation
import { StepNavigation } from "../NavigationBtns/StepNavigation.tsx";
import arcadeIcon from "../../assets/images/icon-arcade.svg";
import advancedIcon from "../../assets/images/icon-advanced.svg";
import proIcon from "../../assets/images/icon-pro.svg";
import { useTheme } from 'styled-components';
import Slider from "./Slider.tsx";



const SelectPlan: React.FC<ComponentNavigationProps> = ({ handleNext, handleBack, currentStep, maxStep }) => {
    const [activeBtn, setActiveBtn] = React.useState<string | null>(null);
    const theme = useTheme();


    return (
        <SelectPlanContainer>
      

            <SelectPlanForm>
                <Title>Select Your Plan</Title>
                <Subtitle>You have the option of monthly or yearly billing.</Subtitle>
                <PlanBtnContainer>
                    <PlanBtn type="button" onClick={() => setActiveBtn("arcade")}  style={activeBtn === "arcade" ? { borderColor: theme.colors.primary.purplishBlue, backgroundColor: `rgba(123, 104, 238, 0.1)`} : {borderColor: theme.colors.neutral.coolGray,backgroundColor:theme.colors.white}} >
                        <PlanBtnPicture>
                            <PlanBtnImg src={arcadeIcon} alt="Arcade Plan Option" />
                        </PlanBtnPicture>
                        <PlanItemContainer>
                            <PlanItemTitle>Arcade</PlanItemTitle>
                            <PlanItemPrice>$9/mo</PlanItemPrice>
                        </PlanItemContainer>

                    </PlanBtn>
                    
                
                    <PlanBtn type="button" onClick={() => setActiveBtn("advanced")}  style={activeBtn === "advanced" ? { borderColor: theme.colors.primary.purplishBlue, backgroundColor: `rgba(123, 104, 238, 0.1)`} : {borderColor: theme.colors.neutral.coolGray,backgroundColor:theme.colors.white}} >
                        <PlanBtnPicture>
                            <PlanBtnImg src={advancedIcon} alt="Advanced Plan Option" />
                        </PlanBtnPicture>
                        <PlanItemContainer>
                            <PlanItemTitle>Advanced</PlanItemTitle>
                            <PlanItemPrice>$12/mo</PlanItemPrice>
                        </PlanItemContainer>

                    </PlanBtn>

                    <PlanBtn type="button" onClick={() => setActiveBtn("pro")}  style={activeBtn === "pro" ? { borderColor: theme.colors.primary.purplishBlue, backgroundColor: `rgba(123, 104, 238, 0.1)`} : {borderColor: theme.colors.neutral.coolGray,backgroundColor:theme.colors.white}} >

                    <PlanBtnPicture>
                            <PlanBtnImg src={proIcon} alt="Pro Plan Option" />
                        </PlanBtnPicture>
                        <PlanItemContainer>
                            <PlanItemTitle>Pro</PlanItemTitle>
                            <PlanItemPrice>$15/mo</PlanItemPrice>
                        </PlanItemContainer>

                    </PlanBtn>
                </PlanBtnContainer>

                <Slider />  
            </SelectPlanForm>

            <DesktopNavigation>
                <StepNavigation
                    handleBack={handleBack}
                    handleNext={handleNext}
                    currentStep={currentStep}
                    maxStep={maxStep}
                />
            </DesktopNavigation>

            <MobileStepNavigation>
                <StepNavigation 
                handleBack={handleBack} 
                handleNext={handleNext} 
                currentStep={currentStep} 
                maxStep={4} 
                />
        </MobileStepNavigation>



        </SelectPlanContainer>
    );
}

export default SelectPlan;
