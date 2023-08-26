import { createContext,  useState } from 'react';
import { PersonalInfoInputs,PlanInputProps, AddOnsProps } from './types';
import React from 'react';



interface FormData {
  personalInfo: PersonalInfoInputs;
  selectedPlan: PlanInputProps;
  AddOns: AddOnsProps;

}



const defaultPersonalInfo: PersonalInfoInputs = {
    name: "",
    email: "",
    phoneNumber: "",
  };

const defaultSelectPlan: PlanInputProps = {
    selectedPlan: 'arcade',
    billingCycle: 'monthly',
    billingCyclePrice: '$9/mo'
}

const defaultAddOns: AddOnsProps = {
  selectedAddOns: [],
  selectedAddOnsPrice: null,
  individualAddOnsPrice: {}
};

    


  

export const FormContext = createContext<{
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}>({
  formData: {
    personalInfo: defaultPersonalInfo,
    selectedPlan: defaultSelectPlan,
    AddOns: defaultAddOns,
  
  },
  setFormData: () => {},
});

export const FormProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({
    personalInfo: defaultPersonalInfo,
    selectedPlan: defaultSelectPlan,
    AddOns: defaultAddOns,
  });

  return (
      <FormContext.Provider value={{ formData, setFormData }}>
          {children || null}
      </FormContext.Provider>
  );
};

