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
import { useTranslation } from 'react-i18next';
import '../../i18n';

function Cabecalhodora() {
  const { t } = useTranslation();

  return (
    <div className="header-dashdora">
      <img src={Logo} alt={t('Doracorde Logo')} className="logo" />
    </div>
  );
}

function Sidebar() {
  const { t } = useTranslation();

  return (
    <div className="sidebar">
      <Link to="/dashdora">
        <img src={HomeIcon} alt={t('Aprender')} className="sidebar-icon" />
        {t('Aprender')}
      </Link>
      <Link to="/praticar">
        <img src={PracticeIcon} alt={t('Praticar')} className="sidebar-icon" />
        {t('Tocar músicas')}
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

function TablatureControls() {
  const { t } = useTranslation();

  return (
    <div className="tablature-controls">
      <button>{t('Auto rolagem')}</button>
      <button>{t('Texto')}</button>
      <button>{t('Acordes')}</button>
      <button>{t('Afinação')}</button>
    </div>
  );
}

function MainContent() {
  const { t } = useTranslation();

  return (
    <div className="main-content">
      <div className="tablature-header">
        <h1>{t('Evidências')}</h1>
        <p>{t('Chitãozinho & Xororó')}</p>
        <div className="tablature-container">
          <div className="tablature-content">
            <pre>
              {`
              B          Bbm
              ${t('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')}
              Ebm/C              F7
              ${t('Nulla at justo non nunc diam elementum at quis felis.')}
              Bbm/Ab       Eb
              ${t('Praesent lobortis tortor et nulla molestie ornare.')}
              B
              ${t('Nunc sed odio quis nisi pellentesque tempor et a dolor.')}
              Ebm/C       F7
              ${t('Cras non tellus ornare, aliquet nisl id, porta velit.')}
              Bbm/Ab
              ${t('Ut suscipit metus nec felis tristique tempor.')}
              Eb               B
              ${t('Donec euismod velit ante, ut auctor nunc ornare gravida.')}
              Eb
              ${t('Donec a sapien quis nisl dignissim vulputate et in lorem.')}
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
