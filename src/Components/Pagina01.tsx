import "./pages.css";
import { Link } from "react-router-dom";

const Pagina01 = () => {
  return (
    <div className="page02">
      Você está na Página 01
      <div className="container__buttons">
        <button className="prev">
          <Link to="/">Prev</Link>
        </button>
        <button className="next">
          <Link to="/Pagina02">Next</Link>
        </button>
      </div>
    </div>
  );
};

export default Pagina01;
