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



export const Container = styled.section`
    height:100%;
    width:100%;
    display:flex;
    flex-direction:column;
    min-height:80vh;


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

export const Form = styled.form`
    display:flex;
    position:absolute;
    padding: 1rem;

    left:50%;
    transform: translate(-50%, -50%);
    width:100%; 


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
        margin-bottom:15rem;
       
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
