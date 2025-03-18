import "./pages.css";
import { Link } from "react-router-dom";

const Pagina03 = () => {
  return (
    <div className="page02">
      Você está na Página 03
      <div className="container__buttons">
        <button className="prev">
          <Link to={"/Pagina02"}>Prev</Link>
        </button>
      </div>
    </div>
  );
};

export default Pagina03;
