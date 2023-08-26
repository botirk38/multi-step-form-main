import styled from 'styled-components';
export const NavigationBtns = styled.button `
    width: 7rem;
    padding: 1rem;
    border-radius: 5px;
    border: none;
    background-color: ${props => props.theme.colors.primary.marineBlue};
    color: ${props => props.theme.colors.neutral.white};
    font-size: ${props => props.theme.typography.body.fontSize};
    font-weight: ${props => props.theme.typography.font.weights.bold};
    cursor: pointer;
    transition: background-color 0.2s;
    justify-self:end;
    margin: 1rem 0;
    &:hover {
        background-color: ${props => props.theme.colors.primary.purplishBlue};
    }
`;

export const NavigationBtnBack = styled(NavigationBtns) `
    background-color: ${props => props.theme.colors.neutral.white};
    color: ${props => props.theme.colors.neutral.coolGray};
    justify-self: start;

    &:hover {
        color: ${props => props.theme.colors.primary.marineBlue };
    }

`;

export const DesktopNavigation = styled.div `
display:none;


@media (min-width: 768px) { // 768px is a common breakpoint for tablets
    display: flex;
    justify-content:space-between;
    align-items:end;

    width:100%;
    min-height:100%;
    padding: 0 1rem;
    
}
`