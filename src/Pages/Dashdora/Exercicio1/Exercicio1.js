import React, { useState } from 'react';
import Logo from '../../../assets/img/Logo.png';
import Play from '../../../assets/img/play.png';
import './Exercicio1.css';
import audioFile from '../../../assets/audio/a.mp3'; // Exemplo de arquivo de áudio
import tipsort from '../../../assets/img/tip-stor.png';
import { Link, useNavigate } from 'react-router-dom';

function Exercicio1() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [currentChord, setCurrentChord] = useState(generateRandomChord());
  
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
      setFeedback('Correto!');
      nextChord();
    } else {
      setWrong(wrong + 1);
      setFeedback('Errado, tente novamente.');
    }
    setAttempts(attempts + 1);
  };

  const nextChord = () => {
    setCurrentChord(generateRandomChord());
  };

  return (
    <div className="dash-exercicio1">
      <div className="header-dashdora">
        <Link to='/dashdora'>
          <img src={Logo} alt="Doracorde Logo" className="logo" />
        </Link>
      </div>
      <div className="exercise-container">
        <h2>Que acorde está tocando?</h2>
        <button onClick={handlePlayPause} className="play-button">
          <img src={Play} alt="Play" />
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <div className="instructions">
          <p>Ouça o áudio e selecione a resposta correta.</p>
        </div>
        <div className="options">
          <button className="option-button" onClick={() => handleAnswer('maior')}>maior</button>
          <button className="option-button" onClick={() => handleAnswer('menor')}>menor</button>
          <button className="option-button" onClick={() => handleAnswer('diminuto')}>diminutos</button>
          <button className="option-button" onClick={() => handleAnswer('aumentado')}>aumentados</button>
        </div>
        <div className="feedback">
          <p>{feedback}</p>
        </div>
      </div>
      <div className='observacao'>
        <img src={tipsort} className='tipsort'/>
        <p>
        Um acorde maior tem um som alegre, relaxado e consonante. Um acorde menor tem um som triste, descontraído e consonante. Pode ser útil cantar as notas de baixo para cima.
        </p>
      </div>
    </div>
  );
}

function generateRandomChord() {
  const chords = ['maior', 'menor', 'diminuto', 'aumentado'];
  const randomIndex = Math.floor(Math.random() * chords.length);
  return { type: chords[randomIndex] };
}

export default Exercicio1;
