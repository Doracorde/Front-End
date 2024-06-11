import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sons.css';
import Logo from '../../assets/img/Logo.png';
import HomeIcon from '../../assets/img/home-icon.png';
import PracticeIcon from '../../assets/img/practice.png';
import SoundIcon from '../../assets/img/sound.png';
import ProfileIcon from '../../assets/img/profile-icon.png';
import MoreIcon from '../../assets/img/more.png';
import Sair from '../../assets/img/sair.png';

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
      <Link to="/mais">
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

function NoteButton({ note, onClick }) {
  return (
    <button className="note-button" onClick={() => onClick(note)}>
      {note}
    </button>
  );
}

function MainContent() {
  const navigate = useNavigate();

  const handleNoteClick = (note) => {
    alert(`Nota ${note} clicada`);
    // Adicione a funcionalidade para tocar o som da nota aqui
  };

  return (
    <div className="main-content">
      <div className="left-column">
        <div className='praticar'>
        <h6>Vamos praticar os sons das notas</h6>
        <p>Treine seu ouvido e aprenda as notas</p>
        <h3>Notas</h3>
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
