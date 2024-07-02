import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Sons.css';
import Logo from '../../assets/img/Logo.png';
import HomeIcon from '../../assets/img/home-icon.png';
import PracticeIcon from '../../assets/img/practice.png';
import SoundIcon from '../../assets/img/sound.png';
import ProfileIcon from '../../assets/img/profile-icon.png';
import MoreIcon from '../../assets/img/more.png';
import Sair from '../../assets/img/sair.png';

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
      <Link to="/menumusicas">
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
      <Link to="/mais">
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

function NoteButton({ note, onClick }) {
  return (
    <button className="note-button" onClick={() => onClick(note)}>
      {note}
    </button>
  );
}

function MainContent() {
  const { t } = useTranslation();

  const handleNoteClick = (note) => {
    alert(`${t('Nota')} ${note} ${t('clicada')}`);
    // Adicione a funcionalidade para tocar o som da nota aqui
  };

  return (
    <div className="main-content">
      <div className="left-column">
        <div className='praticar'>
          <h6>{t('Vamos praticar os sons das notas')}</h6>
          <p>{t('Treine seu ouvido e aprenda as notas')}</p>
          <h3>{t('Notas')}</h3>
        </div>
        <div className="notes-container">
          {['DÓ', 'RÉ', 'MI', 'FÁ', 'SOL', 'LÁ', 'SI'].map((note) => (
            <NoteButton key={note} note={note} onClick={handleNoteClick} />
          ))}
        </div>
      </div>
      <div className="right-column">
        <div className="ads">
          <div className="ad ad-free-trial">
            <p><strong>{t('Experimente a Banda')}</strong></p>
            <p>{t('Sem anúncios, prática personalizada.')}</p>
            <button>{t('EXPERIMENTE 2 SEMANAS GRÁTIS')}</button>
          </div>
          <div className="ad ad-blocker">
            <p><strong>{t('Usando bloqueador de anúncios?')}</strong></p>
            <p>{t('Apoie a educação com a Banda Dora e removeremos os anúncios para você!')}</p>
            <button>{t('EXPERIMENTE A BANDA GRATUITAMENTE')}</button>
            <p>{t('DESATIVAR BLOQUEADOR DE ANÚNCIOS')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Sons() {
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

export default Sons;
