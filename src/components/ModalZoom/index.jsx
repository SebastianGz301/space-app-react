import styled from "styled-components"
import Imagen from "../Galeria/Imagen/index.jsx"
import BotonIcono from "../BotonIcono/index.jsx"

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`
const DialogStyled = styled.dialog`
    position: absolute;
    top: 294px;
    background: transparent;
    padding: 0;
    border: 0;
    width: 1156px;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
        }
    }
`
const ModalZoom = ({ foto, close, alAlternarFavorito }) => {
    return (
        <>
            {foto && <>
                <Overlay />
                <DialogStyled open={!!foto} onClose={close}>
                    <Imagen foto={foto} expandida={true} alAlternarFavorito={alAlternarFavorito} />
                    <form method="dialog">
                        <BotonIcono formMethod="dialog">
                            <img src="/img/iconos/cerrar.png" alt="Ícono de cerrar" />
                        </BotonIcono>
                    </form>
                </DialogStyled>
            </>}
        </>
    )
}

export default ModalZoom