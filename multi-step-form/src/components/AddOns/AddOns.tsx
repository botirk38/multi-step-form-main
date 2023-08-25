import React from "react";
import {AddOnsContainer, AddOnsForm, AddOnsBtnContainer, AddOnsBtn, AddOnsBtnCheckBox,AddOnsBtnItemContainer, AddOnsSubtitle} from "./AddOns";
import { useForm, SubmitHandler } from "react-hook-form";
import {Title, Subtitle, ItemTitle, AddOnsProps, ComponentNavigationProps, MobileStepNavigation, } from "../../types/index";
import { DesktopNavigation } from "../NavigationBtns/StepNavigation";
import { StepNavigation } from "../NavigationBtns/StepNavigation.tsx";
import { useFormState, useSetFormState } from "../../hooks/formHooks.ts";




type AddOn = {
    name: 'Online Service' | 'Larger Storage' | 'Customizable Profile';
    monthlyPrice: string;
    yearlyPrice: string;
    description: string;
};

const ADD_ONS: AddOn[] = [
    {
        name: "Online Service",
        monthlyPrice: "$1/mo",
        yearlyPrice: "$10/yr",
        description: "Access to multiplayer games"
    },
    {
        name: "Larger Storage",
        monthlyPrice: "$2/mo",
        yearlyPrice: "$20/yr",
        description: "Extra 1TB of cloud save"
    },
    {
        name: "Customizable Profile",
        monthlyPrice: "$2/mo",
        yearlyPrice: "$20/yr",
        description: "Custom theme on your profile"
    }
];

const AddOns: React.FC<ComponentNavigationProps> = ({ handleBack, handleNext, currentStep, maxStep }) => {
    const formData = useFormState();
    const setFormData = useSetFormState();
    const { register, handleSubmit, watch, setValue } = useForm<AddOnsProps>({
        defaultValues: {
            selectedAddOns: [],
            selectedAddOnsPrice: null
        }
    });
    const isSubmittingRef = React.useRef(false);

    const handleButtonClick = (addOnName: 'Online Service' | 'Larger Storage' | 'Customizable Profile') => {
        if (selectedAddOnsWatch.includes(addOnName)) {
            // If already selected, remove the addOnName from the list
            const updatedList = selectedAddOnsWatch.filter(item => item !== addOnName);
            setValue("selectedAddOns", updatedList);
        } else {
            // If not selected, add the addOnName to the list
            setValue("selectedAddOns", [...selectedAddOnsWatch, addOnName]);
        }
    };
    

    const selectedAddOnsWatch = watch("selectedAddOns", []);

    const onSubmitForm: SubmitHandler<AddOnsProps> = (data) => {
        isSubmittingRef.current = true;
        const selectedAddOns = data.selectedAddOns || [];
        const individualPrices = calculateIndividualPrices(selectedAddOns, formData.selectedPlan.billingCycle);

        setFormData(prevState => ({
            ...prevState,
            AddOns: {
                selectedAddOns: selectedAddOns,
                selectedAddOnsPrice: calculateTotalPrice(selectedAddOns, formData.selectedPlan.billingCycle),
                individualAddOnsPrice: individualPrices
            }
        }));
    };

    const calculateIndividualPrices = (selectedAddOns: string[], billingCycle: string) => {
        const prices: { [key: string]: string } = {};
        for (const addOn of ADD_ONS) {
            if (selectedAddOns.includes(addOn.name)) {
                prices[addOn.name] = billingCycle === "monthly" ? addOn.monthlyPrice : addOn.yearlyPrice;
            }
        }
        return prices;
    };

    const calculateTotalPrice = (selectedAddOns: string[], billingCycle: string) => {
        let total = 0;
        for (const addOn of ADD_ONS) {
            if (selectedAddOns.includes(addOn.name)) {
                total += billingCycle === "monthly" ? parseFloat(addOn.monthlyPrice.slice(1)) : parseFloat(addOn.yearlyPrice.slice(1));
            }
        }
        return `$${total.toFixed(2)}${billingCycle === "monthly" ? "/mo" : "/yr"}`;
    };

    React.useEffect(() => {
        console.log("Add Ons Form Data:", formData);
        if (isSubmittingRef.current && formData.AddOns && formData.AddOns.selectedAddOns) {
            isSubmittingRef.current = false;  // Reset the ref
            handleNext();
        }

    }, [formData, handleNext]);



    return (
        <AddOnsContainer>
            <AddOnsForm onSubmit={handleSubmit(onSubmitForm)}>
                <Title>Pick add-ons</Title>
                <Subtitle>Add-ons help enhance your gaming experience</Subtitle>
    
                {ADD_ONS.map((addOn, index) => (
                    <AddOnsBtnContainer key={index}>
                        <AddOnsBtn 
                            type="button" 
                            onClick={() => handleButtonClick(addOn.name)}
                            style={{
                                backgroundColor: selectedAddOnsWatch.includes(addOn.name) ? 'rgba(123, 104, 238, 0.1)' : ''
                            }}
                        >
                            <AddOnsBtnCheckBox
                                type="checkbox"
                                {...register("selectedAddOns")}
                                value={addOn.name}
                                defaultChecked={selectedAddOnsWatch.includes(addOn.name)}
                            />
    
                            <AddOnsBtnItemContainer>
                                <ItemTitle>{addOn.name}</ItemTitle>
                                <Subtitle>{addOn.description}</Subtitle>
                            </AddOnsBtnItemContainer>
    
                            <AddOnsSubtitle>
                                {formData.selectedPlan.billingCycle === 'monthly' ? addOn.monthlyPrice : addOn.yearlyPrice}
                            </AddOnsSubtitle>
                        </AddOnsBtn>
                    </AddOnsBtnContainer>
                ))}
            </AddOnsForm>
            <DesktopNavigation>
                <StepNavigation handleBack={handleBack} handleNext={handleSubmit(onSubmitForm)} currentStep={currentStep} maxStep={maxStep} />
            </DesktopNavigation>
            <MobileStepNavigation>
                <StepNavigation handleBack={handleBack} handleNext={handleSubmit(onSubmitForm)} currentStep={currentStep} maxStep={maxStep} />
            </MobileStepNavigation>
        </AddOnsContainer>
    );
    
    
}

export default AddOns;
