import { Link } from "react-router-dom";
import "./header.css";
import Logo from "../../assets/img/Logo.png";
import Harmonia from "../../components/Harmonia/harmonia";
import { useTranslation } from "react-i18next";
import "../../i18n";

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
        <button onClick={() => changeLanguage("pt")}>{t("Pt")}</button>
        <button onClick={() => changeLanguage("en")}>{t("En")}</button>
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
          {t("Planos")} {t("Teste")}
        </a>
        <a href="#depoimento" onClick={(e) => handleNavClick(e, "depoimento")}>
          {t("Depoimentos")}
        </a>
        <Link to="/sobre">{t("Sobre")}</Link>
        <Link to="/blog">{t("Blog")}</Link>
        <div className="buttons">
          <button className="login">
            <a href="/login" className="login">
              {t("Entrar")}
            </a>
          </button>
          <a href="/cadastro" className="cadastro">
            <button className="start-now">{t("Comece agora")}</button>
          </a>
        </div>
      </nav>
      <Harmonia />
    </header>
  );
}
