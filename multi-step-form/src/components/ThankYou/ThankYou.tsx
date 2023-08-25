import { ThankYouContainer, ThankYouForm, ThankYouTitle, ThankYouSubtitle, ThankYouImgContainer, ThankYouImg } from "./ThankYou";
import thankYouImg from "../../assets/images/icon-thank-you.svg";
import { DesktopNavigation } from "../NavigationBtns/StepNavigation";
import { StepNavigation } from "../NavigationBtns/StepNavigation.tsx";
import { MobileStepNavigation,  ComponentNavigationProps} from "../../types";


const ThankYou: React.FC<ComponentNavigationProps> = () => {
   


    return(
        <ThankYouContainer>

            <ThankYouForm>
                <ThankYouImgContainer>
                    <ThankYouImg src={thankYouImg} alt="Thank you" />
                </ThankYouImgContainer>

                <ThankYouTitle>Thank you!</ThankYouTitle>
                <ThankYouSubtitle>Thanks for confirming your subscription! We hope you feel fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</ThankYouSubtitle>
                </ThankYouForm>


                
        </ThankYouContainer>

    )

}

export default ThankYou;