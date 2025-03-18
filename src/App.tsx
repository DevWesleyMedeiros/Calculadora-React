import "./Styles/global.css";
import Calculadora from "./Calculadora/Calculadora";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pagina01 from "./Components/Pagina01";
import Pagina02 from "./Components/Pagina02";
import Pagina03 from "./Components/Pagina03";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Calculadora />} />
          <Route path="Pagina01" element={<Pagina01 />} />
          <Route path="Pagina02" element={<Pagina02 />} />
          <Route path="Pagina03" element={<Pagina03 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
