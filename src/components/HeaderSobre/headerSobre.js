import React from 'react';
import { Link } from "react-router-dom";
import './headerSobre.css';
import Logo from '../../assets/img/Logo.png';
import LogoMarca from "../Logomarca/logomarca";
import { useTranslation } from "react-i18next";
import "../../i18n";
import brasil from "../../assets/img/br.png"
import espanha from "../../assets/img/es.png"
import states from "../../assets/img/en.png"

export default function Cabecalho() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <header className="header">
      <nav className="nav-header">
        <div className="logo">
          <img src={Logo} alt={t("Logo Doracorde")} />
        </div>
        <Link to="/">{t('Home')}</Link>
        <Link to="/">{t('Instrumentos')}</Link>
        <Link to="/">{t('Planos')}</Link>
        <Link to="/">{t('Depoimentos')}</Link>
        <Link to="/sobre">{t('Sobre')}</Link>
        <Link to="/blog">{t('Blog')}</Link>
        <div className="buttons-sobre">
          <button className="login">
            <a href="/login" className="login">
              {t('Entrar')}
            </a>
          </button>
          <a href="/cadastro" className="cadastro">
            <button className="start-now-sobre">
              {t('Cadastre-se')}
            </button>
          </a>
          <div className="dropdown">
            <button className="btn-lng">{t("Idiomas")}</button>
            <div className="lng-container">
              <button className="botaoLingua" onClick={() => changeLanguage("pt")}><img className="flag" src={brasil}></img><label className="fonteIdioma">Português</label></button>
              <button className="botaoLingua" onClick={() => changeLanguage("en")}><img className="flag" src={states}></img><label className="fonteIdioma">Inglês</label></button>
              <button className="botaoLingua" onClick={() => changeLanguage("es")}><img className="flag" src={espanha}></img><label className="fonteIdioma">Espanhol</label></button>
            </div>
          </div>
        </div>
      </nav>

      <LogoMarca />
    </header>
  );
}
