import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles/index.jsx"
import Header from "./components/Header/index.jsx"
import BarraLateral from "./components/BarraLateral/index.jsx"
import Banner from "./components/Banner/index.jsx"
import banner from "./assets/banner.png"
import Galeria from "./components/Galeria/index.jsx"
import fotos from "./fotos.json"
import { useState, useEffect } from "react"
import ModalZoom from "./components/ModalZoom/index.jsx"
import Footer from "./components/Footer/index.jsx"



const FondoGradiente = styled.div`
background: linear-gradient(175deg, #041833 4.16%, #04244F 48%,
#154580 96.76%);
width:100%;
min-height:100vh;
`

const AppContainer = styled.div`
  width: 1820px;
  max-width: 100%;
  margin: 0 auto;
`
const MainContainer = styled.main`
  display: flex;
  gap: 74px;
`

const ContenidoGaleria = styled.section`
  display: flex;
  flex-direction:column;
  flex-grow: 1;
`

const App = () => {

  const [fotosDeGaleria, setFotosDeGaleria] = useState(fotos)
  const [filtro, setFiltro] = useState('')
  const [tag, setTag] = useState(0)
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null)
  
  useEffect(() => {
    const fotosFiltradas = fotos.filter(foto => {
      const filtroPorTag = !tag || foto.tagId === tag;
      const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase())
      return filtroPorTag && filtroPorTitulo
    })
    setFotosDeGaleria(fotosFiltradas)
  }, [filtro, tag])


  const alAlternarFavorito = (foto)=>{

    if(foto.id === fotoSeleccionada ?.id){
      setFotoSeleccionada({
        ...fotoSeleccionada,
        favorita: !fotoSeleccionada.favorita
      })
    }

    setFotosDeGaleria(fotosDeGaleria.map(fotosDeGaleria=>{
      return {
        ...fotosDeGaleria,
        favorita: fotosDeGaleria.id === foto.id ? !foto.favorita : fotosDeGaleria.favorita
      }
    }))
  }
  return (
    <>
    <FondoGradiente>
      <GlobalStyles/>
          <AppContainer>
          <Header filtro={filtro} setFiltro={setFiltro}/> 
            <MainContainer>
                <BarraLateral/>
              <ContenidoGaleria>
                <Banner texto="La galeria más completa del espacio" backgroundImage={banner}/>
                <Galeria alSelecionarFoto={foto=>setFotoSeleccionada(foto)} fotos={fotosDeGaleria} alAlternarFavorito={alAlternarFavorito}  setTag={setTag}/> 
              </ContenidoGaleria>
            </MainContainer>
          </AppContainer>
          <ModalZoom foto={fotoSeleccionada} close={()=>setFotoSeleccionada(null)} alAlternarFavorito={alAlternarFavorito}/>
            <Footer/>
    </FondoGradiente>
    </>
  )
}


export default App