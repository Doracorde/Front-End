import { Link } from "react-router-dom"
import './header.css';
import Logo from "../img/Logo.png"


export default function Cabecalho(){
    return(
        <header className="header">
          <div className="logo">
            <img src={Logo} alt="Logo Doracorde"/> 
          </div>
          <nav className="navigation">
            <a href="/home">Home</a>
            <a href="/instrumentos">Instrumentos</a>
            <a href="/planos">Planos</a>
            <a href="/depoimentos">Depoimentos</a>
            <a href="/sobre">Sobre</a>
            {/* <Link to='/blog'> <a >Blog</a> </Link> */}
          </nav>
          <div className="buttons">
            <button className="login">Entrar</button>
            <button className="start-now">Comece Agora</button>
          </div>
        </header>
    )
}