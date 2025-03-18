import "./pages.css";
import { Link } from "react-router-dom";

const Pagina02 = () => {
  return (
    <div className="page02">
      Você está na Página 02
      <div className="container__buttons">
        <button className="prev">
          <Link to={"/Pagina01"}>Prev</Link>
        </button>
        <button className="next">
          <Link to="/Pagina03">Next</Link>
        </button>
      </div>
    </div>
  );
};

export default Pagina02;
