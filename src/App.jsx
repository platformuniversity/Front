import './components/Style.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Presentacion from "./Pages/Presentacion.jsx";
import Perfil from './Pages/Perfil.jsx';

function App() {
    return (
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Presentacion />} />
              <Route path="/Perfil" element={<Perfil />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
