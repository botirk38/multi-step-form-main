
import styled from 'styled-components';
import {Container,Form,PlanBtnProps, BtnContainer, Btn, ItemContainer } from '../../types/index';


export const SelectPlanContainer = styled(Container)`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding: 1rem;

    @media (min-width:767px) {
        justify-content:start;
        align-items:end;
        padding: 1rem;
    }
    

`

export const SelectPlanForm = styled(Form)`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:start;
    background-color: ${props => props.theme.colors.neutral.white};
    z-index:100;
    top:40%;

    @media (min-width:767px) {
        padding: 2rem;
        min-width:100%;
    }


`;

export const PlanBtnContainer = styled(BtnContainer)`

`;

export const PlanBtn = styled(Btn)<PlanBtnProps>`

`;

export const PlanBtnPicture = styled.picture`
    width: 3rem;
    height: 3rem;
    margin-right:1rem;


`;

export const PlanBtnImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;


`;

export const PlanItemContainer = styled(ItemContainer)`

`;

export const PlanItemTitle = styled.h2`
    font-size: ${props => props.theme.typography.body.itemTitle};
    color: ${props => props.theme.colors.primary.marineBlue};
    margin:0;

`;

export const PlanItemPrice = styled.h3`
    font-size: ${props => props.theme.typography.body.itemSubtitle};
    color: ${props => props.theme.colors.neutral.coolGray};
    font-weight: ${props => props.theme.typography.font.weights.regular};
    margin-top:0.5rem;
`;


