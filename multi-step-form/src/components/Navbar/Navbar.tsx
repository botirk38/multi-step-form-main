import { Header, Nav, NavList, Button, ListItem, StepContainer, StepTitle, StepDescription} from './NavbarStyles';
import { ButtonComponentProps, NavbarProps  } from '../../types';

  
  const ButtonComponent: React.FC<ButtonComponentProps & NavbarProps> = ({ id, currentStep }) => (
      <Button
          data-active={id === currentStep}
          disabled
      >
          {id}
      </Button>
  );
  
  const stepDescriptions: Record<number, string> = {
    1: "Your Info",
    2: "Select Plan",
    3: "Add-ons",
    4: "Summary"
  };
  
  function Navbar({ currentStep }: NavbarProps) {
      return (
          <Header>
              <Nav>
                  <NavList>
                      {[1, 2, 3, 4].map((id) => (
                          <ListItem key={id}>
                              <ButtonComponent
                                  id={id} 
                                  currentStep={currentStep} 
                              />
                              <StepContainer>
                                  <StepTitle>
                                      Step {id}
                                  </StepTitle>
                                  <StepDescription>
                                      {stepDescriptions[id]}
                                  </StepDescription>
                              </StepContainer>
                          </ListItem>
                      ))}
                  </NavList>
              </Nav>
          </Header>
      );
  }
  
  export default Navbar;
  

