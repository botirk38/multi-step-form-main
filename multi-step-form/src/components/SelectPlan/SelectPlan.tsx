import React from "react";
import { Subtitle, Title, ComponentNavigationProps, MobileStepNavigation, PlanInputProps } from "../../types";
import { SelectPlanContainer, SelectPlanForm, PlanBtn, PlanBtnPicture, PlanBtnImg, PlanBtnContainer, PlanItemPrice, PlanItemTitle, PlanItemContainer } from "./SelectPlan";
import { DesktopNavigation } from "../NavigationBtns/StepNavigation";
import { StepNavigation } from "../NavigationBtns/StepNavigation.tsx";
import arcadeIcon from "../../assets/images/icon-arcade.svg";
import advancedIcon from "../../assets/images/icon-advanced.svg";
import proIcon from "../../assets/images/icon-pro.svg";
import { useTheme } from 'styled-components';
import Slider from "./Slider.tsx";
import { useForm, SubmitHandler } from "react-hook-form";
import {useFormState, useSetFormState} from "../../hooks/formHooks.ts";

type PlanName = 'arcade' | 'advanced' | 'pro';

const ICONS: Record<PlanName, string> = {
    arcade: arcadeIcon,
    advanced: advancedIcon,
    pro: proIcon,
};

const PLAN_PRICES: Record<PlanName, Record<'monthly' | 'yearly', string>> = {
    arcade: { monthly: '$9/mo', yearly: '$90/yr' },
    advanced: { monthly: '$12/mo', yearly: '$120/yr' },
    pro: { monthly: '$15/mo', yearly: '$150/yr' },
};

const SelectPlan: React.FC<ComponentNavigationProps> = ({ handleNext, handleBack, currentStep, maxStep }) => {
    const [activeBtn, setActiveBtn] = React.useState<PlanName>('arcade');
    const theme = useTheme();
    const [billingCycle, setBillingCycle] = React.useState<'monthly' | 'yearly'>('monthly');
    const { register, handleSubmit, watch, setValue } = useForm<PlanInputProps>({
        defaultValues: {
            selectedPlan: 'arcade',
            billingCycle: 'monthly',
            billingCyclePrice: PLAN_PRICES['arcade']['monthly']
        }
    });
    const formData = useFormState();
    const setFormData = useSetFormState();
    const isSubmittingRef = React.useRef(false);

    

    const selectedPlan = watch('selectedPlan');

    React.useEffect(() => {
        setActiveBtn(selectedPlan as PlanName);
    }, [selectedPlan]);

    React.useEffect(() => {
        setValue("billingCycle", billingCycle);
        setValue("billingCyclePrice", PLAN_PRICES[activeBtn][billingCycle]);
    }, [billingCycle, activeBtn, setValue]);

    const onSubmit: SubmitHandler<PlanInputProps> = (data) => {
        isSubmittingRef.current = true;
        console.log("Plan Data:", data);
        setFormData(prev => ({ ...prev, selectedPlan: data }));

    }

    React.useEffect(() => {
        console.log("Form Data:", formData);
        if (isSubmittingRef.current && formData.selectedPlan && formData.selectedPlan.selectedPlan) {
            isSubmittingRef.current = false;  // Reset the ref
            handleNext();
        }
    }, [formData,handleNext]);
    
    

    return (
        <SelectPlanContainer>
            <SelectPlanForm onSubmit={handleSubmit(onSubmit)}>
                <Title>Select Your Plan</Title>
                <Subtitle>You have the option of monthly or yearly billing.</Subtitle>
                <PlanBtnContainer>
                    {(Object.keys(ICONS) as PlanName[]).map(plan => (
                        <PlanBtn
                            key={plan}
                            type="button"
                            onClick={() => {
                                setActiveBtn(plan);
                                setValue("selectedPlan", plan);
                            }}
                            style={activeBtn === plan ? {
                                borderColor: theme.colors.primary.purplishBlue,
                                backgroundColor: `rgba(123, 104, 238, 0.1)`
                            } : {
                                backgroundColor: theme.colors.white
                            }}
                        >
                            <PlanBtnPicture>
                                <PlanBtnImg src={ICONS[plan]} alt={`${plan} Plan Option`} />
                            </PlanBtnPicture>
                            <PlanItemContainer>
                                <PlanItemTitle>{plan.charAt(0).toUpperCase() + plan.slice(1)}</PlanItemTitle>
                                <PlanItemPrice>{PLAN_PRICES[plan][billingCycle]}</PlanItemPrice>
                            </PlanItemContainer>
                        </PlanBtn>
                    ))}
                </PlanBtnContainer>
                <Slider setBillingCycle={setBillingCycle} />

                <input type="hidden" {...register("selectedPlan")} value={activeBtn} />
                <input type="hidden" {...register("billingCycle")} value={billingCycle} />
                <input type="hidden" {...register("billingCyclePrice")} value={PLAN_PRICES[activeBtn][billingCycle]} />
                
            </SelectPlanForm>
            <DesktopNavigation>
                <StepNavigation
                    handleBack={handleBack}
                    handleNext={handleSubmit(onSubmit)}
                    currentStep={currentStep}
                    maxStep={maxStep}
                />
            </DesktopNavigation>
            <MobileStepNavigation>
                <StepNavigation
                    handleBack={handleBack}
                    handleNext={handleSubmit(onSubmit)}
                    currentStep={currentStep}
                    maxStep={4}
                />
            </MobileStepNavigation>
        </SelectPlanContainer>
    );
}

export default SelectPlan;
