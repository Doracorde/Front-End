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
import DuolingoPersonagens from '../../assets/img/duolingo-personagens.png';
import IncendiosIcon from '../../assets/img/incendios.png';
import MagoIcon from '../../assets/img/mago.png';
import GanheXpIcon from '../../assets/img/paper.png';

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
      <Link to="/menumusicas">
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
          <h2>Usuário</h2>
          <p>@janedoe</p>
          <p>Ingressou em julho de 2024</p>
          <button className="edit-profile">Editar Perfil</button>
        </div>
      </div>
      <div className="stats-and-friends">
        <div className="stats">
          <h3>{t('Estatísticas')}</h3>
          <div className="stats-grid">
            <div className="stat-item">
              <p>0</p>
              <p>{t('Dias de ofensiva')}</p>
            </div>
            <div className="stat-item">
              <p>27</p>
              <p>{t('Total de pontos')}</p>
            </div>
            <div className="stat-item">
              <p>{t('Bronze')}</p>
              <p>{t('Liga atual')}</p>
            </div>
            <div className="stat-item">
              <p>0</p>
              <p>{t('Top 3 finishes')}</p>
            </div>
          </div>
        </div>
        <div className="friends">
        <div className="friends-section">
      <div className="friends-header">
        <h3>{t('Amigos')}</h3>
        <div className="tabs">
        </div>
      </div>
      <div className="friends-content">
        <img src={DuolingoPersonagens} alt="Duolingo Personagens" />
        <p>{t('Aprender é mais divertido e eficaz quando você se conecta com outras pessoas.')}</p>
      </div>
      <div className="friends-actions">
        <Link to='/sobre'>
        <button className="action-button">{t('Encontre amigos')}</button>
        </Link>
        <button className="action-button">{t('Convide amigos')}</button>
        <button className="action-button">{t('Conecte ao Facebook')}</button>
      </div>
    </div>
        </div>
      </div>
      <div className="achievements-section">
      <h3>{t('Conquistas')}</h3>
      <div className="achievement-item-perfil">
        <img src={IncendiosIcon} alt="Incêndios" className="achievement-icon" />
        <div className="achievement-info">
          <p>{t('Incêndios')}</p>
          <p>{t('Alcance uma sequência de 3 dias')}</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: '33%' }}></div>
          </div>
        </div>
      </div>
      <div className="achievement-item-perfil">
        <img src={MagoIcon} alt="Mago" className="achievement-icon" />
        <div className="achievement-info">
          <p>{t('Mago')}</p>
          <p>{t('Ganhe 100 XP')}</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: '27%' }}></div>
          </div>
        </div>
      </div>
      <div className="achievement-item-perfil">
        <img src={GanheXpIcon} alt="Ganhe 100 XP" className="achievement-icon" />
        <div className="achievement-info">
          <p>{t('Ganhe 100 XP')}</p>
          <p>{t('Aprenda 50 acordes novos em um único curso')}</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: '17%' }}></div>
          </div>
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
