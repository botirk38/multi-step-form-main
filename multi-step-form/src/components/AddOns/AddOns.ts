import {Container,Form } from '../../types/index';
import styled from 'styled-components';
import {BtnContainer, Btn, ItemContainer } from '../../types/index';


export const AddOnsContainer = styled(Container)`
    justify-content:center;
    align-items:center;

    @media (min-width:767px) {
        min-height:100%;

    }



`;

export const AddOnsForm = styled(Form)`
    background-color: ${props => props.theme.colors.neutral.white};

    @media (min-width:767px) {
        min-width: 90%;
        margin-bottom:0;
        min-height:45rem;

`;

export const AddOnsBtnContainer = styled(BtnContainer)`
    justify-content:center;
    align-items:center;
    width:100%;

    @media (min-width:767px) {
        margin-bottom:3rem;
        justify-content:start;
        align-items:start;

    }

    

`;

export const AddOnsBtn = styled(Btn)`
    flex-direction:row;
    gap: 1.5rem;
    justify-content:space-between;
    align-items:start;
    text-align:start;
    padding:1rem;

    @media (min-width:767px) {
        max-width: 90%;



`;

export const AddOnsBtnCheckBox = styled.input`
    width: 1rem;
    height: 1rem;
   



`;



export const AddOnsBtnItemContainer = styled(ItemContainer)`

`;

export const AddOnsSubtitle = styled.h3`
    font-size: ${props => props.theme.typography.body.fontSize};
    color: ${props => props.theme.colors.primary.purplishBlue};
    margin:0;

    @media (min-width:767px) {
        margin-left:10rem;
    }

`;
