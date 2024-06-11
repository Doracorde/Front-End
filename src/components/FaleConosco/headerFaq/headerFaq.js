import { Link } from "react-router-dom"
import './headerFaq.css';
import Logo from "../../../assets/img/Logo.png"


export default function Cabecalho(){
    return(
        <header className="header-faq">
         
          <nav className="navigation-faq">
          <div className="logo-faq">
            <img src={Logo} alt="Logo Doracorde"/> 
          </div>
            <a href="/">Home</a>
            <a href="/">Instrumentos</a>
            <a href="/">Planos</a>
            <a href="/">Depoimentos</a>
            <a href="/sobre">Sobre</a>
            <a href="/blog">Blog</a>
            {/* <Link to='/blog'> <a >Blog</a> </Link> */}
            <div className="buttons-faq">
              <button className="login-faq">
                <a href="/login" className="login">
                  Entrar
                </a>
              </button>

           
                <a href="/cadastro" className="cadastro">
                  <button className="start-now-faq">
                    Comece agora
                  </button>
                </a>   
             
            </div>
          </nav>
        </header>
    )
}