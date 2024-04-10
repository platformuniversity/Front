import "../componentes-perfil/Style-perfil.css"
import Cabecera from "../componentes-perfil/Cabecera.jsx"
import Imagen from "../componentes-perfil/Imagen.jsx"
import Titulo from "../componentes-perfil/Titulo.jsx"
import Atributos from "../componentes-perfil/Atributos.jsx"
import Skill from "../componentes-perfil/Skill.jsx"
import Portafolio from "../componentes-perfil/Portafolio.jsx"

function Perfil() {
    return (
        <section className="Bo">
            <section className="cabecera" id = "cabecera">
             <Cabecera/>
             <Imagen/>
             <Titulo/>
            </section>
            <section className="Asection">
            <Atributos/>
            </section>
            <section className="Ssection">
            <Skill/>
            </section>
            <section className="Asection">
            <Portafolio/>
            </section>
        </section>

        
    );
}

export default Perfil;