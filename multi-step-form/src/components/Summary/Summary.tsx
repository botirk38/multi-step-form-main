import React from "react";
import { SummaryContainer, SummaryForm, CheckOutContainer } from "./Summary";
import { Title, Subtitle, ItemContainer, ItemTitle, Btn } from "../../types";
import { ComponentNavigationProps } from "../../types";
import { useFormState } from "../../hooks/formHooks.ts";

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
                <Title>Finishing up</Title>
                <Subtitle>Double-check everything looks OK before confirming.</Subtitle>

                <CheckOutContainer>
                    <ItemContainer>
                        <ItemTitle>
                            {formData.selectedPlan.selectedPlan ? capitalizeFirstLetter(formData.selectedPlan.selectedPlan) : ''}
                            ({capitalizeFirstLetter(formData.selectedPlan.billingCycle)})
                        </ItemTitle>
                        <Subtitle>{formData.selectedPlan.billingCyclePrice}</Subtitle>
                    </ItemContainer>

                    <ItemContainer onClick={() => goToStep(2)}>
                        Change 
                    </ItemContainer>

                    <ItemContainer>
                        {formData.AddOns.selectedAddOns.length > 0 ? formData.AddOns.selectedAddOns.map((addOn: string) => (
                            <ItemContainer key={addOn}>
                                <ItemTitle>{addOn}</ItemTitle>
                                <Subtitle>{formData.AddOns.individualAddOnsPrice[addOn]}</Subtitle>
                            </ItemContainer>
                        )) : 'No Add-Ons'}
                    </ItemContainer>
                </CheckOutContainer>

                <ItemContainer>
                    <Subtitle>{formData.selectedPlan.billingCycle === "monthly" ? "Total (per month)": "Total (per year)"}</Subtitle>
                    <ItemTitle>{calculateTotalPrice()}</ItemTitle>
                </ItemContainer>
            </SummaryForm>
        </SummaryContainer>
    )
}

export default Summary;

