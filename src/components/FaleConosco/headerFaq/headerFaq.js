import React from "react";
import { Link } from "react-router-dom";
import "./headerFaq.css";
import Logo from "../../../assets/img/Logo.png";
import { useTranslation } from "react-i18next";
import "../../../i18n";
import brasil from "../../../assets/img/br.png";
import espanha from "../../../assets/img/es.png";
import states from "../../../assets/img/en.png";

export default function Cabecalho() {
  const { t, i18n } = useTranslation();
  // Inicializa o idioma selecionado com o valor armazenado no localStorage ou o padrão
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="header-faq">
      <nav className="navigation-faq">
        <div className="logo-faq">
          <img src={Logo} alt={t("Logo Doracorde")} />
        </div>
        <a href="/">{t("Home")}</a>
        <a href="/">{t("Instrumentos")}</a>
        <a href="/">{t("Planos")}</a>
        <a href="/">{t("Depoimentos")}</a>
        <a href="/sobre">{t("Sobre")}</a>
        <a href="/blog">{t("Blog")}</a>
        <div className="buttons-faq">
          <button className="login-faq">
            <a href="/login" className="login">
              {t("Entrar")}
            </a>
          </button>
          <a href="/cadastro" className="cadastro">
            <button className="start-now-faq">{t("Cadastre-se")}</button>
          </a>
        </div>
        <div className="dropdown">
            <button className="btn-lng">{t("Idiomas")}</button>
            <div className="lng-container">
              <button className="botaoLingua" onClick={() => changeLanguage("pt")}>
                <img className="flag" src={brasil}></img>
                <label className="fonteIdioma">Português</label>
              </button>
              <button className="botaoLingua" onClick={() => changeLanguage("en")}>
                <img className="flag" src={states}></img>
                <label className="fonteIdioma">Inglês</label>
              </button>
              <button className="botaoLingua" onClick={() => changeLanguage("es")}>
                <img className="flag" src={espanha}></img>
                <label className="fonteIdioma">Espanhol</label>
              </button>
            </div>
          </div>
      </nav>



    </header>
  );
}
