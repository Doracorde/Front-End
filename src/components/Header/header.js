import { Link } from "react-router-dom";
import "./header.css";
import Logo from "../../assets/img/Logo.png";
import Harmonia from "../../components/Harmonia/harmonia";
import { useTranslation } from "react-i18next";
import "../../i18n";
import brasil from "../../assets/img/br.png"
import espanha from "../../assets/img/es.png"
import states from "../../assets/img/en.png"
import Brasil from "../../assets/img/brasil.png"

export default function Cabecalho() {
  const handleNavClick = (event, targetId) => {
    event.preventDefault();
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  };
  const { t, i18n } = useTranslation();
  // Inicializa o idioma selecionado com o valor armazenado no localStorage ou o padrão
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="header">
      <nav className="nav-header">
        <div className="logo">
          <img src={Logo} alt={t("Logo Doracorde")} />
        </div>
        <Link to="/">{t("Home")}</Link>
        <a
          href="#instrumentos"
          onClick={(e) => handleNavClick(e, "instrumentos")}
        >
          {t("Instrumentos")}
        </a>
        <a href="#plano" onClick={(e) => handleNavClick(e, "plano")}>
          {t("Planos")}
        </a>
        <a href="#depoimento" onClick={(e) => handleNavClick(e, "depoimento")}>
          {t("Depoimentos")}
        </a>
        <Link to="/sobre">{t("Sobre")}</Link>
        <Link to="/blog">{t("Blog")}</Link>
        <div className="buttons-header">
          <button className="login-header">
            <a href="/login" className="login">
              {t("Entrar")}
            </a>
          </button>
          <a href="/cadastro" className="cadastro">
            <button className="start-now-header">{t("Cadastre-se")}</button>
          </a>
        </div>
        <div className="dropdown">
            <button className="btn-lng">{t("Idiomas")}</button>
            <div className="lng-container">
              <button className="botaoLingua"  onClick={() => changeLanguage("pt")}><img className="flag" src={brasil}></img><label className="fonteIdioma">Português</label></button>
              <button className="botaoLingua"  onClick={() => changeLanguage("en")}><img className="flag" src={states}></img><label className="fonteIdioma">Inglês</label></button>
              <button className="botaoLingua"  onClick={() => changeLanguage("es")}><img className="flag" src={espanha}></img><label className="fonteIdioma">Espanhol</label></button>
            </div>
          </div>
      </nav>
      <Harmonia />
    </header>
  );
}
