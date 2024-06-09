import { Link } from "react-router-dom";
import './header.css';
import Logo from '../../assets/images/Logo.png';

export default function Cabecalho() {
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="Logo Doracorde"/> 
      </div>
      <nav className="navigation">
        <Link to="/home">Home</Link>
        <Link to="/instrumentos">Instrumentos</Link>
        <Link to="/planos">Planos</Link>
        <Link to="/depoimentos">Depoimentos</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <div className="buttons">
        <button className="login">Entrar</button>
        <button className="start-now">Comece Agora</button>
      </div>
    </header>
  );
}