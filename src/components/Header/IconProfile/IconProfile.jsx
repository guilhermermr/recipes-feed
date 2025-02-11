
import { useNavigate } from "react-router-dom";
import StyledIconProfile from "./IconProfile.style";

function IconProfile(){
    
    const navigate = useNavigate();

    const goToProfilePage = () =>{
        navigate("/profile");
    }


    return(
        <>
            <StyledIconProfile onClick={goToProfilePage} className="material-symbols-outlined">account_circle</StyledIconProfile>
        </>
    )
}

export default IconProfile;