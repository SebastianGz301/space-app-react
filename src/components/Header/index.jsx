import styled from "styled-components"
import CampoTexto from "../CampoTexto/index.jsx"


const HeaderStyled = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img{
        width: 212px;
        
    }
`





const Header = () =>{
    return <HeaderStyled>
        <img src="/img/img/logo.png" alt="Logo de space app" />
        <CampoTexto/>
    </HeaderStyled>
}

export default Header