import IconProfile from "./IconProfile/IconProfile";
import Search from "./Search/Search";
import Logo from "./Logo/Logo";

import StyledHeader from "./Header.style";

function Header(){
    return(
        <>
            <StyledHeader>
                <Logo />
                <Search />
                <IconProfile />
            </StyledHeader>
        </>
    )
}


export default Header;