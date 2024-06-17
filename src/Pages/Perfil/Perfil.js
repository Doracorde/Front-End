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
import { useTranslation } from 'react-i18next';

function Cabecalhodora() {
  return (
    <div className="header-dashdora">
      <img src={Logo} alt="Doracorde Logo" className="logo" />
    </div>
  );
}

function Sidebar({ t }) {
  return (
    <div className="sidebar">
      <Link to="/dashdora">
        <img src={HomeIcon} alt={t('Aprender')} className="sidebar-icon" />
        {t('Aprender')}
      </Link>
      <Link to="/praticar">
        <img src={PracticeIcon} alt={t('Praticar')} className="sidebar-icon" />
        {t('Praticar')}
      </Link>
      <Link to="/Sons">
        <img src={SoundIcon} alt={t('Sons')} className="sidebar-icon" />
        {t('Sons')}
      </Link>
      <Link to="/perfil">
        <img src={ProfileIcon} alt={t('Perfil')} className="sidebar-icon" />
        {t('Perfil')}
      </Link>
      <Link to="/">
        <img src={MoreIcon} alt={t('Mais')} className="sidebar-icon" />
        {t('Mais')}
      </Link>
      <Link to="/">
        <img src={Sair} alt={t('Sair')} className="sidebar-icon" />
        {t('Sair')}
      </Link>
    </div>
  );
}

function MainContent({ t }) {
  return (
    <div className="main-content-profile">
      <div className="profile-header">
        <div className="profile-picture">
          <img src={ProfileIcon} alt="Profile" />
        </div>
        <div className="profile-info">
          <h2>Jailson</h2>
          <p>@feliciathegoat</p>
          <p>{t('Ingressou em fevereiro de 2023')}</p>
          <button className="edit-profile">{t('Editar Perfil')}</button>
        </div>
      </div>
      <div className="stats-and-friends">
        <div className="stats">
          <h3>{t('Estatísticas')}</h3>
          <div className="stats-grid">
            <div className="stat-item">
              <p>0</p>
              <p>{t('Day Streak')}</p>
            </div>
            <div className="stat-item">
              <p>27</p>
              <p>{t('Total XP')}</p>
            </div>
            <div className="stat-item">
              <p>{t('Bronze')}</p>
              <p>{t('Current league')}</p>
            </div>
            <div className="stat-item">
              <p>0</p>
              <p>{t('Top 3 finishes')}</p>
            </div>
          </div>
        </div>
        <div className="friends">
          <h3>{t('Amigos')}</h3>
          <p>{t('Aprender é mais divertido e eficaz quando você se conecta com outras pessoas.')}</p>
          <button>{t('Encontre amigos')}</button>
          <button>{t('Convide amigos')}</button>
          <button>{t('Conecte ao Facebook')}</button>
        </div>
      </div>
      <div className="achievements">
        <h3>{t('Conquistas')}</h3>
        <div className="achievement-item">
          <div className="achievement-info">
            <p>{t('Incêndios')}</p>
            <p>{t('Alcance uma sequência de 3 dias')}</p>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: '33%' }}></div>
          </div>
        </div>
        <div className="achievement-item">
          <div className="achievement-info">
            <p>{t('Mago')}</p>
            <p>{t('Gane 100 XP')}</p>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: '27%' }}></div>
          </div>
        </div>
        <div className="achievement-item">
          <div className="achievement-info">
            <p>{t('Gane 100 XP')}</p>
            <p>{t('Aprenda 50 palavras novas em um único curso')}</p>
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
  const { t } = useTranslation();

  return (
    <div className="dashdora">
      <Sidebar t={t} />
      <div className="main-section">
        <Cabecalhodora />
        <MainContent t={t} />
      </div>
    </div>
  );
}

export default Perfil;
