
import styled from 'styled-components';
import {Container,Form,PlanBtnProps } from '../../types/index';


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
    max-width:24rem;

    @media (min-width:767px) {
        padding: 2rem;
        min-width:100%;
    }


`;

export const PlanBtnContainer = styled.div`
    display:flex;
    gap:1.5rem;

    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100%;
    margin-bottom:1rem;
`;

export const PlanBtn = styled.button<PlanBtnProps>`
    width: 100%;
    padding: 1.5rem;
    border-radius: 10px;
    border: 1px solid ${props => props.theme.colors.neutral.lightGray};
    background-color: ${props => props.theme.colors.neutral.white};
    display:flex;
    justify-content:start;
    align-items:start;
    
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

export const PlanItemContainer = styled.div`
    display:flex;
    flex-direction:column;
    text-align:start;

`;

export const PlanItemTitle = styled.h2`
    font-size: ${props => props.theme.typography.body.itemTitle};
    color: ${props => props.theme.colors.primary.marineBlue};
    margin:0;

`;

export const PlanItemPrice = styled.h3`
    font-size: ${props => props.theme.typography.body.itemSubtitle};
    color: ${props => props.theme.colors.neutral.coolGray};
    margin-top:0.5rem;
`;


