import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import HomeIcon from '../../assets/img/home-icon.png';
import PracticeIcon from '../../assets/img/practice.png';
import SoundIcon from '../../assets/img/sound.png';
import ProfileIcon from '../../assets/img/profile-icon.png';
import MoreIcon from '../../assets/img/more.png';
import Sair from '../../assets/img/sair.png';
import './Praticar.css';

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
        Tocar músicas
      </Link>
      <Link to="/Sons">
        <img src={SoundIcon} alt="Sons" className="sidebar-icon" />
        Sons
      </Link>
      <Link to="/perfil">
        <img src={ProfileIcon} alt="Perfil" className="sidebar-icon" />
        Perfil
      </Link>
      <Link to="/">
        <img src={MoreIcon} alt="Mais" className="sidebar-icon" />
        Mais
      </Link>
      <Link to="/">
        <img src={Sair} alt="Sair" className="sidebar-icon" />
        Sair
      </Link>
    </div>
  );
}

function TablatureControls() {
  return (
    <div className="tablature-controls">
      <button>Auto rolagem</button>
      <button>Texto</button>
      <button>Acordes</button>
      <button>Afinação</button>
    </div>
  );
}

function MainContent() {
  return (
    <div className="main-content">
      <div className="tablature-header">
        <h1>Evidências</h1>
        <p>Chitãozinho & Xororó</p>
      <div className="tablature-container">
        <div className="tablature-content">
          <pre>
            {`
            B          Bbm
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ebm/C              F7
            Nulla at justo non nunc diam elementum at quis felis.
            Bbm/Ab       Eb
            Praesent lobortis tortor et nulla molestie ornare.
            B
            Nunc sed odio quis nisi pellentesque tempor et a dolor.
            Ebm/C       F7
            Cras non tellus ornare, aliquet nisl id, porta velit.
            Bbm/Ab
            Ut suscipit metus nec felis tristique tempor.
            Eb               B
            Donec euismod velit ante, ut auctor nunc ornare gravida.
            Eb
            Donec a sapien quis nisl dignissim vulputate et in lorem.
            `}
          </pre>
        </div>
      <TablatureControls />
      </div>
      </div>

    </div>
  );
}

function Praticar() {
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

export default Praticar;
