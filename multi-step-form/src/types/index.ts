import styled from "styled-components";
export interface NavbarProps {
    currentStep: number;
  } 


export interface ButtonComponentProps {
    id: number;
    currentStep: number;
}

export type ComponentNavigationProps = {
    handleNext: () => void;
    handleBack : () => void;
    currentStep : number;
    maxStep : number;
}

export type PersonalInfoInputs = {
    name: string;
    email: string;
    phoneNumber: string;
}

export type PlanBtnProps = {
    activeBtn ?: string | null;
  }

export type SliderProps = {
  setBillingCycle: (billing: 'monthly' | 'yearly') => void;
};

export type PlanInputProps = {
  billingCycle: 'monthly' | 'yearly';
  billingCyclePrice: string | null;
  selectedPlan: 'arcade' | 'advanced' | 'pro' | null;
};

export type AddOnsProps = {
  selectedAddOns: ('Online Service' | 'Larger Storage' | 'Customizable Profile')[];
  selectedAddOnsPrice: string | null;
  individualAddOnsPrice: {[key: string]: string};
};








export const Container = styled.section`
    height:100%;
    width:100%;
    display:flex;
    flex-direction:column;
    min-height:80vh;


`;


export const BtnContainer = styled.div`
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 1rem;

    @media (min-width: 767px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 5rem;
    }
`;


export const Btn = styled.button<PlanBtnProps>`
    width: 100%;
    padding: 1.5rem;
    border-radius: 10px;
    border: 1px solid ${props => props.theme.colors.neutral.lightGray};
    background-color: ${props => props.theme.colors.neutral.white};
    display:flex;
    justify-content:start;
    align-items:start;

    &:hover{
        border: 1px solid ${props => props.theme.colors.primary.purplishBlue};
        cursor:pointer;

    }

    @media (min-width:767px) {
        flex-direction: column;
        gap: 4rem;
    
`;

export const Title = styled.h1`
  font-size: ${props => props.theme.typography.body.fontSizeH1};
  color: ${props => props.theme.colors.primary.marineBlue};
    margin-bottom:0;
`;

export const Subtitle = styled.p`
    font-size: ${props => props.theme.typography.body.fontSize};
    color: ${props => props.theme.colors.neutral.coolGray};
`

export const ItemTitle = styled.h2`
  font-size: ${props => props.theme.typography.body.itemTitle};
  color: ${props => props.theme.colors.primary.marineBlue};
  margin:0;


`;

export const ItemContainer = styled.div`
    display:flex;
    flex-direction:column;
    text-align:start;

`;

export const Form = styled.form`
    display:flex;
    position:absolute;
    padding: 1rem;

    left:50%;
    transform: translate(-50%, -50%);
    width:100%; 
    max-width:24rem;
    background-color: ${props => props.theme.colors.neutral.white}; 




    border-radius: 20px;
    flex-direction:column;
    align-items:start;
    justify-content:start;
    position:absolute;

    @media (min-width:767px) {
        position:relative;
        transform: translate(0,0);
        left:0;
        width:auto;
        margin-left:5rem;
    
        margin-bottom:12rem;
        max-width:28rem;

       
`;

export const FormContainer = styled.div`
    display:flex;

`;

export const ErrorMessages = styled.span`
        color:red;
        font-size: ${props => props.theme.typography.body.fontSize};
        margin:0;
        font-weight: ${props => props.theme.typography.font.weights.bold};

`;

export const LabelContainer = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
`;


export const MobileStepNavigation = styled.div`
  position:absolute;
  display: flex;
  width: 100vw;
  bottom:0;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  background-color: ${props => props.theme.colors.neutral.white};
  

  @media (min-width: 768px) { // 768px is a common breakpoint for tablets
    display: none; // Hide on tablet and desktop
  }
`;
