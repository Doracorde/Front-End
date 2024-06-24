import React, { useState } from 'react';
import Logo from '../../../assets/img/Logo.png';
import './Exercicio1.css';
import Play from '../../../assets/img/play.png'
import { Link, useNavigate } from 'react-router-dom';

function Cabecalhodora() {
  return (
    <div className="header-dashdora">
      <img src={Logo} alt="Doracorde Logo" className="logo" />
    </div>
  );
}

function ProgressBar({ progress }) {

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%` }}></div>
      <Link to="/" className='back-button'>X</Link>
    </div>
  );
}

const audioFiles = {
  piano: '/audio/piano.mp3',
  guitarra: '/audio/guitarra.mp3',
  baixo: '/audio/baixo.mp3',
  bateria: '/audio/bateria.mp3',
  voz: '/audio/voz.mp3'
};

const correctSound = '/audio/correct.mp3';
const incorrectSound = '/audio/incorrect.mp3';

function Exercicio1() {
  const [selectedOption, setSelectedOption] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  
  const handlePlayAudio = () => {
    const audio = new Audio(audioFiles['piano']); //áudio  piano
    audio.play();
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    const isCorrectAnswer = option === 'piano'; // Supondo que a resposta correta é 'piano'
    setIsCorrect(isCorrectAnswer);
    const feedbackAudio = new Audio(isCorrectAnswer ? correctSound : incorrectSound);
    feedbackAudio.play();
  };

  return (
    <div className="dash-exercicio1">
      <div className="main-section-exercicio1">
        <Cabecalhodora />
        <ProgressBar />
        <div className="aprendizado-auditivo-exercicio1">
          <h6>Qual instrumento está tocando?</h6>
          <button onClick={handlePlayAudio} aria-label="Reproduzir áudio" className="button-ex1">
            <img src={Play} alt='botão para tocar a música atual' className='image-play'/>
          </button>
          <div className="options-exercicio1">
            {Object.keys(audioFiles).map((instrument) => (
              <button
                key={instrument}
                onClick={() => handleOptionSelect(instrument)}
                className={selectedOption === instrument ? 'selected-exercicio1' : ''}
              >
                {instrument}
              </button>
            ))}
          </div>
          {isCorrect !== null && (
            <p>{isCorrect ? 'Correto!' : 'Incorreto, tente novamente.'}</p>
          )}
        </div>
      </div>

    </div>
  );
}

export default Exercicio1;
