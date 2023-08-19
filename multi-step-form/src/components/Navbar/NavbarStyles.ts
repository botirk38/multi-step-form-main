import styled from 'styled-components';
import sideBarMobile from '../../assets/images/bg-sidebar-mobile.svg';
import sideBarDesktop from '../../assets/images/bg-sidebar-desktop.svg';



export const Header = styled.header `

  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: start;
  min-height:20rem;
  z-index:0;
  

  @media (min-width:767px) {
    flex-direction: column;
    height:100%;
    min-height:80vh;
    padding: 1rem;
    padding-right:0;
    max-width:25rem;
    border-radius: 20px;
   
    
  }

  @media(min-width:1600px){
    max-width:40rem;
  }
`;


export const Nav = styled(Header).attrs({ as: 'nav' })`
  display: flex;
  flex-direction:row;
  width:100%;
  padding: 2rem 0;
  background-image: url(${sideBarMobile});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  
  @media (min-width:767px) {
    height:100%;
    background-image: url(${sideBarDesktop});
    background-repeat: no-repeat;

`;

export const NavList = styled.ul `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 1rem 0;

    @media (min-width:767px) {
        flex-direction: column;
        
    
`;

export const ListItem = styled.li`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    padding: 1rem;
    width: 100%;
    gap:1rem;


   
`;

export const Button = styled.button`
  /* Button styles */
  background-color: transparent;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  
  color: ${props => props.theme.colors.neutral.white};
  border: 2px solid ${props => props.theme.colors.neutral.white};
  font-weight: ${props => props.theme.typography.font.weights.bold};
  font-size: ${props => props.theme.typography.body.fontSize};
  cursor: pointer;
  transition: background-color 0.2s;

  /* Style for active state */
  &[data-active='true'] {
    background-color: ${props => props.theme.colors.primary.lightBlue};
    color: ${props => props.theme.colors.primary.purplishBlue};
  }

`;

export const StepContainer = styled.div`
  /* Step container styles */
  display:none;
  @media (min-width:767px) {
    display:flex;
    flex-direction: column;
    text-align: start;
    justify-content: start;
    align-items:start;
    margin:0;
  }

`;

export const StepTitle = styled.p`
  /* Step title styles */
  @media (min-width:767px) {
  margin:0;
  color: ${props => props.theme.colors.neutral.coolGray};
  text-transform: uppercase;
  }
 
`;

export const StepDescription = styled.h4`
@media (min-width:767px) {
 
  text-transform: uppercase;
  margin:0;
  padding-top:0.5em;
  color: ${props => props.theme.colors.neutral.white};
}
`;

