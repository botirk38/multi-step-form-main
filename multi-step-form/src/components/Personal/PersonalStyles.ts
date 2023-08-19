import styled from 'styled-components';
import {Container,Title,Subtitle,Form } from '../../types/index';

export const PersonalContainer = styled(Container)`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    @media (min-width:767px) {
        justify-content:start;
        align-items:end;
        padding: 1rem;
    }

`;

export const PersonalInfoTitle = styled(Title)`
    margin:0;

`

export const PersonalInfoSubtitle = styled(Subtitle)`

`

export const PersonalInfoForm = styled(Form)`
  
    background-color: ${props => props.theme.colors.neutral.white};
    z-index:100;
    max-width:24rem;

    @media (min-width:767px) {
        padding: 2rem;
        min-width:100%;
    }


`

export const PersonalInfoFormContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:start;
    align-items:start;
    padding: 0.5rem 0;
    width:100%;
`;

export const PersonalInfoFormInput = styled.input`
    width:100%;
    padding: 1rem;
    border-radius: 5px;
    border: 1px solid ${props => props.theme.colors.neutral.lightGray};
    margin: 1rem 0;
    font-size: ${props => props.theme.typography.body.fontSize};
    color: ${props => props.theme.colors.neutral.coolGray};

`