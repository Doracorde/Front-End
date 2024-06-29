import React, { useState } from 'react';
import Logo from '../../../assets/img/Logo.png';
import Play from '../../../assets/img/play.png';
import './Exercicio2.css';
import audioFile from '../../../assets/audio/a.mp3'; // Exemplo de arquivo de áudio
import tipsort from '../../../assets/img/tip-stor.png';
import acorde from '../../../assets/img/acorde.png';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



import '../../../i18n'; // Arquivo de configuração do i18n

function Exercicio2() {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [currentChord, setCurrentChord] = useState(generateRandomChord());
  const [showHelp, setShowHelp] = useState(false);
  
  const audio = new Audio(audioFile);

  const handlePlayPause = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleAnswer = (answer) => {
    if (answer === currentChord.type) {
      setCorrect(correct + 1);
      setFeedback(t('Correto!'));
      nextChord();
    } else {
      setWrong(wrong + 1);
      setFeedback(t('Errado, tente novamente.'));
    }
    setAttempts(attempts + 1);
  };

  const nextChord = () => {
    setCurrentChord(generateRandomChord());
  };

  return (
    <div className="dash-exercicio2">
      <div className="header-dashdora">
        <Link to='/dashdora'>
          <img src={Logo} alt="Doracorde Logo" className="logo" />
        </Link>
      </div>
      <img 
        src={tipsort} 
        className='tipsort' 
        alt="Help Icon" 
        onMouseEnter={() => setShowHelp(true)} 
        onMouseLeave={() => setShowHelp(false)}
      />
      {showHelp && <div className="help-message">{t('Um acorde maior tem um som alegre, relaxado e consonante. Um acorde menor tem um som triste, descontraído e consonante. Pode ser útil cantar as notas de baixo para cima.')}
        </div>}
      <div className="exercise-container">
        <h2>{t('Que acorde está tocando?')}</h2>
        <button onClick={handlePlayPause} className="play-button">
          <img src={Play} alt="Play" />
          {isPlaying ? t('Pause') : t('Play')}
        </button>
        <div className="instructions">
          <p>{t('Ouça o áudio e selecione a resposta correta.')}</p>
          <img src={acorde} alt="Chord" />
        </div>
        <div className="options">
          <button className="option-button" onClick={() => handleAnswer('maior')}>{t('maior')}</button>
          <button className="option-button" onClick={() => handleAnswer('menor')}>{t('menor')}</button>
          <button className="option-button" onClick={() => handleAnswer('diminuto')}>{t('diminuto')}</button>
          <button className="option-button" onClick={() => handleAnswer('aumentado')}>{t('aumentado')}</button>
        </div>
        <div className="feedback">
          <p>{feedback}</p>
        </div>
      </div>

    </div>
  );
}

function generateRandomChord() {
  const chords = ['maior', 'menor', 'diminuto', 'aumentado'];
  const randomIndex = Math.floor(Math.random() * chords.length);
  return { type: chords[randomIndex] };
}

export default Exercicio2;
