import Titulo from "../TItulo"
import Tags from "./Tags"
import Populares from "./Populares"
import styled from "styled-components"
import Imagen from "./Imagen/index.jsx"



const GaleriaContainer = styled.div`
    display: flex;
    gap: 152px;
`

const SeccionFluida = styled.section`
    flex-grow: 1;
`
const ImagenesContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`

const Galeria = ({fotos = [], setTag, alSelecionarFoto, alAlternarFavorito}) =>{
    return (
    <>
    <Tags setTag={setTag}/> 
    <GaleriaContainer>
        <SeccionFluida>
            <Titulo>Navegue por la galería</Titulo>
            <ImagenesContainer>
            {fotos.map(foto=> <Imagen alAlternarFavorito={alAlternarFavorito} alSolicitarZoom={alSelecionarFoto} key={foto.id} foto={foto}/>
            )}
            </ImagenesContainer>
        </SeccionFluida>
        <Populares/>
    </GaleriaContainer>
    </> 
)

}


export default Galeria