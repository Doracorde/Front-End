import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Dashdora.css';
import Logo from '../../assets/img/Logo.png';
import HomeIcon from '../../assets/img/home-icon.png';
import PracticeIcon from '../../assets/img/practice.png';
import SoundIcon from '../../assets/img/sound.png';
import ProfileIcon from '../../assets/img/profile-icon.png';
import MoreIcon from '../../assets/img/more.png';
import ex1 from '../../assets/img/ex1.png';
import ex2 from '../../assets/img/ex2.png';
import ex3 from '../../assets/img/ex3.png';
import ex4 from '../../assets/img/ex4.png';
import ex5 from '../../assets/img/ex5.png';
import ex6 from '../../assets/img/ex6.png';
import Sair from '../../assets/img/sair.png';
import { useTranslation } from 'react-i18next';

function Cabecalhodora() {
  return (
    <div className="header-dashdora">
      <img src={Logo} alt="Doracorde Logo" className="logo" />
    </div>
  );
}

function Sidebar() {
  const { t } = useTranslation();

  return (
    <div className="sidebar">
      <Link to="/dashdora">
        <img src={HomeIcon} alt={t("Aprender")} className="sidebar-icon" />
        {t("Aprender")}
      </Link>
      <Link to="/praticar">
        <img src={PracticeIcon} alt={t("Tocar músicas")} className="sidebar-icon" />
        {t("Tocar músicas")}
      </Link>
      <Link to="/sons">
        <img src={SoundIcon} alt={t("Sons")} className="sidebar-icon" />
        {t("Sons")}
      </Link>
      <Link to="/perfil">
        <img src={ProfileIcon} alt={t("Perfil")} className="sidebar-icon" />
        {t("Perfil")}
      </Link>
      <Link to="/">
        <img src={MoreIcon} alt={t("Mais")} className="sidebar-icon" />
        {t("Mais")}
      </Link>
      <Link to="/">
        <img src={Sair} alt={t("Sair")} className="sidebar-icon" />
        {t("Sair")}
      </Link>
    </div>
  );
}

function Button({ text, onClick, className, icon }) {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {icon && <img src={icon} alt="" className="button-icon" />}
      {text}
    </button>
  );
}

function MainContent() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleGuiaClick = () => {
    alert(t("Guia clicked"));
  };

  const handleUnitClick = (unit) => {
    navigate(`/${unit}`);
  };

  const handleExClick = (ex) => {
    console.log(`${ex} clicked`);
  };

  return (
    <div className="main-content">
      <div className="left-column">
        <div className="unit" onClick={() => handleUnitClick('unit1')}>
          <div className="unit-header">
            <h2>{t("Conceitos básicos da música")}</h2>
            <p>{t("Entenda como a música é formada")}</p>
          </div>
          <Button
            text="Guia"
            onClick={handleGuiaClick}
            className="button-guia2"
          />
        </div>
        <div className="clickable-images">
          <img src={ex1} alt="Ex1" onClick={() => handleExClick('ex1')} className='box1' />
          <img src={ex2} alt="Ex2" onClick={() => handleExClick('ex2')} className='box2' />
          <img src={ex3} alt="Ex3" onClick={() => handleExClick('ex3')} className='box3' />
          <img src={ex4} alt="Ex4" onClick={() => handleExClick('ex4')} className='box4' />
          <img src={ex5} alt="Ex5" onClick={() => handleExClick('ex5')} className='box5' />
          <img src={ex6} alt="Ex6" onClick={() => handleExClick('ex6')} className='box6' />
        </div>
        <div className="unit3" onClick={() => handleUnitClick('unit1')}>
        <div className="unit-header">
            <h2>{t("Notas, figuras e pausas na partitura")}</h2>
            <p>{t("Aprenda sobre notas, figuras e pausas")}</p>
          </div>
          <Button
            text={t("Guia")}
            onClick={handleGuiaClick}
            className="button-guia3"
          />
        </div>
        <div className="clickable-images">
          <img src={ex1} alt="Ex1" onClick={() => handleExClick('ex1')} className='box1' />
          <img src={ex2} alt="Ex2" onClick={() => handleExClick('ex2')} className='box2' />
          <img src={ex3} alt="Ex3" onClick={() => handleExClick('ex3')} className='box3' />
          <img src={ex4} alt="Ex4" onClick={() => handleExClick('ex4')} className='box4' />
          <img src={ex5} alt="Ex5" onClick={() => handleExClick('ex5')} className='box5' />
          <img src={ex6} alt="Ex6" onClick={() => handleExClick('ex6')} className='box6' />
        </div>
        {/* Adicione mais unidades conforme necessário */}
      </div>
      
      
      <div className="right-column">
        <div className="ads">
          <div className="ad ad-free-trial">
            <p><strong>{t("Experimente a Banda")}</strong></p>
            <p>{t("Sem anúncios, prática personalizada.")}</p>
            <button>{t("EXPERIMENTE 2 SEMANAS GRÁTIS")}</button>
          </div>
          <div className="ad ad-blocker">
            <p><strong>{t("Usando bloqueador de anúncios?")}</strong></p>
            <p>{t("Apoie a educação com a Banda Dora e removeremos os anúncios para você!")}</p>
            <button>{t("EXPERIMENTE A BANDA GRATUITAMENTE")}</button>
            <p>{t("DESATIVAR BLOQUEADOR DE ANÚNCIOS")}</p>
          </div>
        </div>

      </div>
    </div>
  );
}

function Dashdora() {
  return (
    <div className="dashdora">
      <Sidebar />
      <div className="main-section">
        <Cabecalhodora />
        <MainContent />
      </div>
    </div>
  );
}

export default Dashdora;