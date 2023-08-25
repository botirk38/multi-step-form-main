import styled from 'styled-components';
import {Container,Form, BtnContainer, Btn, ItemContainer, Title, Subtitle , ItemTitle} from '../../types/index';

export const SummaryContainer = styled(Container)`



`;

export const SummaryForm = styled(Form)`

    max-width: 100%;
    margin-left:2rem;
    padding: 2rem;
    
   

`;

export const SummaryTitle = styled(Title)`
    text-align:start;
`;

export const SummaryBtnContainer = styled(BtnContainer)`

`;

export const SummaryBtn = styled(Btn)`

`;

export const SummarySubtitle = styled(Subtitle)`
    color: ${props => props.theme.colors.primary.marineBlue};
    font-weight: ${props => props.theme.typography.font.weights.bold};
    margin-bottom:0.5rem;

`;

export const CheckOutContainer = styled(ItemContainer)`
    background-color: ${props => props.theme.colors.neutral.magnolia};
    padding: 1rem;
    min-width: 100%;
    margin-bottom: 1rem;
    border-radius: 10px;

`;

export const SummaryItemContainer = styled(ItemContainer)`
    flex-direction:row;
    justify-content:space-between;
    margin-bottom:0.5rem;
    align-items:center;
    

`;

export const SummaryItemTitle = styled(ItemTitle)`
    color: ${props => props.theme.colors.neutral.coolGray};
    font-weight: ${props => props.theme.typography.font.weights.regular};

`;

export const TotalPrice = styled(ItemTitle)`
    color: ${props => props.theme.colors.primary.purplishBlue};

`;

