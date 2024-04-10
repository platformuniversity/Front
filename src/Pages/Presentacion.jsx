import Texto from "../components/Texto.jsx"
import Slider from "../components/Slider.jsx"
import "../components/Style.css"


function Presentacion() {
    return (
       <body>
        <div className="general">
        <Texto/>
        <Slider/>
        </div>
       </body>
    );
}

export default Presentacion;
