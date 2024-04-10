
import "./Style-perfil.css"
import imagen from "../imagenes/social.png"

function Titulo(){
    return (
        <h1>Mi Nombre 
            <a href="#"><img src={imagen} alt=""/>
                <span>Contacto</span>
            </a>
        </h1>
)
}

export default Titulo