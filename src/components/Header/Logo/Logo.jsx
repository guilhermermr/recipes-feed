import { useNavigate } from "react-router-dom";
import logo from "../../../assets/imagens/logo.png";

import StyledLogo from "./Logo.style";

function Logo(){
    const navigate = useNavigate()

    const goToTimeline = () => {
        navigate('/')
    }

    return <StyledLogo onClick={goToTimeline} src={logo} alt="" srcset="" />
}

export default Logo