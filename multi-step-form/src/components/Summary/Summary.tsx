import React from "react";
import { SummaryContainer, SummaryForm, CheckOutContainer, SummaryTitle, SummaryItemContainer, SummarySubtitle, SummaryItemTitle, TotalPrice} from "./Summary";
import {Subtitle, ItemContainer, MobileStepNavigation, ComponentNavigationProps} from "../../types";
import { useFormState } from "../../hooks/formHooks.ts";
import { StepNavigation } from "../NavigationBtns/StepNavigation.tsx";
import { DesktopNavigation } from "../NavigationBtns/StepNavigation";



const Summary: React.FC<ComponentNavigationProps> = ({handleNext, handleBack, currentStep, maxStep , goToStep}) => {
    const formData = useFormState();
   



    const capitalizeFirstLetter = (string: string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        if (formData.selectedPlan.selectedPlan && formData.selectedPlan.billingCyclePrice) {
            totalPrice += parseFloat(formData.selectedPlan.billingCyclePrice.slice(1));
        }
        if (formData.AddOns.selectedAddOns.length > 0) {
            const totalAddOnsPrice = formData.AddOns.selectedAddOnsPrice;
            if (totalAddOnsPrice) {
                totalPrice += parseFloat(totalAddOnsPrice.slice(1));
            }
        }
        return `$${totalPrice.toFixed(2)}`; 
    }
    


    return (
        <SummaryContainer>
            <SummaryForm>
                <SummaryTitle>Finishing up</SummaryTitle>
                <Subtitle>Double-check everything looks OK before confirming.</Subtitle>

                <CheckOutContainer>
                    <SummaryItemContainer>

                        <ItemContainer>

                            <SummaryItemContainer>
                                <SummarySubtitle style={{marginBottom:"0"}}>
                                    {formData.selectedPlan.selectedPlan ? capitalizeFirstLetter(formData.selectedPlan.selectedPlan) : ''}
                                </SummarySubtitle>
                                <SummarySubtitle style={{marginBottom:"0"}}>
                                    ({capitalizeFirstLetter(formData.selectedPlan.billingCycle)})
                                </SummarySubtitle>
                            
                            </SummaryItemContainer>
                            

                            <Subtitle onClick={() => goToStep && goToStep(2)} style={{textDecoration:"underline", marginTop:"0"}}>
                                Change 
                            </Subtitle>
                            
                        </ItemContainer>

                        <SummarySubtitle>{formData.selectedPlan.billingCyclePrice}</SummarySubtitle>
                        
                    </SummaryItemContainer>

                   

                    <ItemContainer style={{borderTop: `1px solid gray`}}>
                        {formData.AddOns.selectedAddOns.length > 0 ? formData.AddOns.selectedAddOns.map((addOn: string) => (
                            <SummaryItemContainer key={addOn}>
                                <SummaryItemTitle>{addOn}</SummaryItemTitle>
                                <SummarySubtitle style={{fontWeight: "normal"}}>{formData.AddOns.individualAddOnsPrice[addOn]}</SummarySubtitle>
                            </SummaryItemContainer>
                        )) : 'No Add-Ons'}
                    </ItemContainer>
                </CheckOutContainer>

                <SummaryItemContainer style={{width:"100%"}}>
                    <Subtitle>{formData.selectedPlan.billingCycle === "monthly" ? "Total (per month)": "Total (per year)"}</Subtitle>
                    <TotalPrice>{calculateTotalPrice()}</TotalPrice>
                </SummaryItemContainer>
            </SummaryForm>

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

        </SummaryContainer>
    )
}

export default Summary;

