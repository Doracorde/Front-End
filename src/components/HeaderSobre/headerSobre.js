import { Link } from "react-router-dom";
import './headerSobre.css';
import Logo from '../../assets/img/Logo.png';
import LogoMarca from "../Logomarca/logomarca";


export default function Cabecalho() {
  return (
    <header className="header">

      <nav className="nav-header">
        <div className="logo">
          <img src={Logo} alt="Logo Doracorde" />
        </div>
        <Link to="/">Home</Link>
        <Link to="/">Instrumentos</Link>
        <Link to="/">Planos</Link>
        <Link to="/">Depoimentos</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/blog">Blog</Link>
        <div className="buttons">
          <button className="login">
            <a href="/login" className="login">
              Entrar
            </a>
          </button>
          <a href="/cadastro" className="cadastro">
            <button className="start-now">
              Comece agora
            </button>
          </a>
        </div>
      </nav>
        <LogoMarca/>
    </header>
  );
}
