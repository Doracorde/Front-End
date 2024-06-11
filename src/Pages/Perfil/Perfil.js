import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import HomeIcon from '../../assets/img/home-icon.png';
import PracticeIcon from '../../assets/img/practice.png';
import SoundIcon from '../../assets/img/sound.png';
import ProfileIcon from '../../assets/img/profile-icon.png';
import MoreIcon from '../../assets/img/more.png';
import Sair from '../../assets/img/sair.png';
import './Perfil.css';


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

function MainContent() {
  return (
    <div className="main-content-profile">
      <div className="profile-header">
        <div className="profile-picture">
          <img src={ProfileIcon} alt="Profile" />
        </div>
        <div className="profile-info">
          <h2>Jailson</h2>
          <p>@Peterdactyl2015</p>
          <p>Ingressou em fevereiro de 2023</p>
          <button className="edit-profile">Editar Perfil</button>
        </div>
      </div>
      <div className="stats-and-friends">
        <div className="stats">
          <h3>Estatísticas</h3>
          <div className="stats-grid">
            <div className="stat-item">
              <p>0</p>
              <p>Day Streak</p>
            </div>
            <div className="stat-item">
              <p>27</p>
              <p>Total XP</p>
            </div>
            <div className="stat-item">
              <p>Bronze</p>
              <p>Current league</p>
            </div>
            <div className="stat-item">
              <p>0</p>
              <p>Top 3 finishes</p>
            </div>
          </div>
        </div>
        <div className="friends">
          <h3>Amigos</h3>
          <p>Aprender é mais divertido e eficaz quando você se conecta com outras pessoas.</p>
          <button>Encontre amigos</button>
          <button>Convide amigos</button>
          <button>Conecte ao Facebook</button>
        </div>
      </div>
      <div className="achievements">
        <h3>Conquistas</h3>
        <div className="achievement-item">
          <div className="achievement-info">
            <p>Incêndios</p>
            <p>Alcance uma sequência de 3 dias</p>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: '33%' }}></div>
          </div>
        </div>
        <div className="achievement-item">
          <div className="achievement-info">
            <p>Mago</p>
            <p>Gane 100 XP</p>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: '27%' }}></div>
          </div>
        </div>
        <div className="achievement-item">
          <div className="achievement-info">
            <p>Gane 100 XP</p>
            <p>Aprenda 50 palavras novas em um único curso</p>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: '17%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Perfil() {
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

export default Perfil;
