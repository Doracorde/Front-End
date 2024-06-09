import { Link } from "react-router-dom";
import './header.css';
import Logo from '../../assets/img/Logo.png';
import Harmonia from '../../components/Harmonia/harmonia'

export default function Cabecalho() {
  return (
    <header className="header">

      <nav className="navigation">
        <div className="logo">
          <img src={Logo} alt="Logo Doracorde" />
        </div>
        <Link to="/">Home</Link>
        <Link to="/instrumentos">Instrumentos</Link>
        <Link to="/planos">Planos</Link>
        <Link to="/depoimentos">Depoimentos</Link>
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
      <Harmonia />
    </header>
  );
}
