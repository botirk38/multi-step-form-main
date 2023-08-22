import { useContext } from "react";
import { FormContext } from "../FormContext";

export function useFormState(){
    const context = useContext(FormContext);
    if(!context){
        throw new Error("useFormState must be used within a FormProvider");
    }

    return context.formData;

}

export function useSetFormState(){
    const context = useContext(FormContext);
    if(!context){
        throw new Error("useSetFormState must be used within a FormProvider");
    }

    return context.setFormData;
}