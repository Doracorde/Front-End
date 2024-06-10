import React from 'react';
import { Link } from 'react-router-dom';
import './Dashdora.css';
import Logo from '../../assets/img/Logo.png';
import HomeIcon from '../../assets/img/home-icon.png';
import PracticeIcon from '../../assets/img/practice.png';
import SoundIcon from '../../assets/img/sound.png';
import ProfileIcon from '../../assets/img/profile-icon.png';
import MoreIcon from '../../assets/img/more.png';

function Cabecalhodora() {
  return (
    <div className="header-dashdora">
      <img src={Logo} alt="Doracorde Logo" className="logo" />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/aprender">
        <img src={HomeIcon} alt="Aprender" className="sidebar-icon" />
        Aprender
      </Link>
      <Link to="/praticar">
        <img src={PracticeIcon} alt="Praticar" className="sidebar-icon" />
        Praticar
      </Link>
      <Link to="/sons">
        <img src={SoundIcon} alt="Sons" className="sidebar-icon" />
        Sons
      </Link>
      <Link to="/perfil">
        <img src={ProfileIcon} alt="Perfil" className="sidebar-icon" />
        Perfil
      </Link>
      <Link to="/mais">
        <img src={MoreIcon} alt="Mais" className="sidebar-icon" />
        Mais
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
  const handleGuiaClick = () => {
    alert("Guia clicked");
  };

  return (
    <div className="main-content">
      <div className="left-column">
        <div className="unit">
          <div className="unit-header">
            <h2>Unit 1</h2>
            <p>Form basic sentences, greet people</p>
          </div>
          <Button
          //a ideia é o usuario ir para outra página ou aparecer um video de anuncio, 
          //o usuario precisa enteneder (não visualmente), como funciona
            text="Guia"
            onClick={handleGuiaClick}
            className="button-guia"
          />
        </div>
      </div>
      <div className="right-column">

        <div className="ads">
          <div className="ad ad-free-trial">
            <p><strong>Experimente a Banda</strong></p>
            <p>Sem anúncios, prática personalizada.</p>
            <button>EXPERIMENTE 2 SEMANAS GRÁTIS</button>
          </div>
          <div className="ad ad-blocker">
            <p><strong>Usando bloqueador de anúncios?</strong></p>
            <p>Apoie a educação com a Banda Dora e removeremos os anúncios para você!</p>
            <button>EXPERIMENTE A BANDA GRATUITAMENTE</button>
            <p>DESATIVAR BLOQUEADOR DE ANÚNCIOS</p>
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
