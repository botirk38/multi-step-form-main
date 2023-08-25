import { Subtitle, Title, ComponentNavigationProps, PersonalInfoInputs, ErrorMessages,LabelContainer, MobileStepNavigation } from "../../types";
import {
  PersonalContainer,
  PersonalInfoForm,
  PersonalInfoFormContainer,
  PersonalInfoFormInput,
  
} from "./PersonalStyles";
import { StepNavigation } from "../NavigationBtns/StepNavigation.tsx";
import { DesktopNavigation } from "../NavigationBtns/StepNavigation";

import { useForm, SubmitHandler } from "react-hook-form";
import { useSetFormState, useFormState } from "../../hooks/formHooks.ts";



const PersonalInfo: React.FC<ComponentNavigationProps> = ({
  handleNext,
  handleBack,
  currentStep,
  maxStep,
}) => {
    const formData = useFormState();
    const setFormData = useSetFormState();

    const { register, handleSubmit, formState: { errors } } = useForm<PersonalInfoInputs>();
    const onSubmit: SubmitHandler<PersonalInfoInputs> = (data: PersonalInfoInputs) => {
        console.log(data);
        setFormData({ ...formData, personalInfo: data });
        console.log(formData);

        handleNext();

    }


    return (
        <PersonalContainer>

        <PersonalInfoForm onSubmit={handleSubmit(onSubmit)}>
            <Title>Personal Info</Title>
            <Subtitle>
                Please provide your name, email address, and phone number
            </Subtitle>
            <PersonalInfoFormContainer>
            <LabelContainer>
                <label htmlFor="name">Name</label>
                {errors.name && <ErrorMessages>This field is required</ErrorMessages>}
            </LabelContainer>
            <PersonalInfoFormInput
                type="text"
                placeholder="Vanessa Mint"
                {...register("name", { required: true })}
            />
            
            </PersonalInfoFormContainer>

            <PersonalInfoFormContainer>

            <LabelContainer>
                <label htmlFor="email">Email Address</label>
                {errors.email && <ErrorMessages>This field is required</ErrorMessages>}
                {errors.email && errors.email.type === "pattern" && (
                    <ErrorMessages>Please enter a valid email address</ErrorMessages>
                )}
            </LabelContainer>

            <PersonalInfoFormInput
                type="email"
                placeholder="vanessamint@"
                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            </PersonalInfoFormContainer>

            <PersonalInfoFormContainer>

            <LabelContainer>
                <label htmlFor="phone">Phone Number</label>
                {errors.phoneNumber && errors.phoneNumber.type === "required" && (
                        <ErrorMessages>This field is required</ErrorMessages>
                )}
                {errors.phoneNumber && errors.phoneNumber.type === "pattern" && (
                    <ErrorMessages>Please enter a valid phone number</ErrorMessages>
                )}
            </LabelContainer>

            <PersonalInfoFormInput
                type="tel"
                id="phone"
                placeholder="e.g. +1 234 567 890"
                {...register("phoneNumber", { required: true, maxLength: 14
            })}
            />
            

            </PersonalInfoFormContainer>
        </PersonalInfoForm>

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

        </PersonalContainer>
    );
};

export default PersonalInfo;
