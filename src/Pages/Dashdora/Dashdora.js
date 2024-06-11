import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Dashdora.css';
import Logo from '../../assets/img/Logo.png';
import HomeIcon from '../../assets/img/home-icon.png';
import PracticeIcon from '../../assets/img/practice.png';
import SoundIcon from '../../assets/img/sound.png';
import ProfileIcon from '../../assets/img/profile-icon.png';
import MoreIcon from '../../assets/img/more.png';
import ex1 from '../../assets/img/ex1.png'; // Adicione os caminhos das imagens
import ex2 from '../../assets/img/ex2.png';
import ex3 from '../../assets/img/ex3.png';
import ex4 from '../../assets/img/ex4.png';
import ex5 from '../../assets/img/ex5.png';
import ex6 from '../../assets/img/ex6.png';
import Sair from '../../assets/img/sair.png'

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
      <Link to="/dashdora">
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
      <Link to="/">
        <img src={Sair} alt="Mais" className="sidebar-icon" />
        Sair
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
  const navigate = useNavigate(); // useNavigate importado

  const handleGuiaClick = () => {
    alert("Guia clicked");
  };

  const handleUnitClick = (unit) => {
    navigate(`/${unit}`);
  };

  const handleExClick = (ex) => {
    // Adicione as rotas ideais aqui
    console.log(`${ex} clicked`);
  };

  return (
    <div className="main-content">
      <div className="left-column">
        <div className="unit" onClick={() => handleUnitClick('unit1')}>
          <div className="unit-header">
            <h2>Conceitos básicos da música</h2>
            <p>Entenda como a música é formada</p>
          </div>
          <Button
            text="Guia"
            onClick={handleGuiaClick}
            className="button-guia"
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

        <div className="unit2" onClick={() => handleUnitClick('unit1')}>
          <div className="unit-header">
            <h2>Principais conceitos da partitura</h2>
            <p>Aprenda os conceitos da partitura</p>
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
            <h2>Notas, figuras e pausas na partitura</h2>
            <p>Aprenda sobre notas, figuras e pausas</p>
          </div>
          <Button
            text="Guia"
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
