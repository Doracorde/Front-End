import React, { useState, useEffect } from 'react';
import './FerramentaMetronomo.css';
import click1 from '../../assets/audio/click1.mp3';
import click2 from '../../assets/audio/click2.mp3';
import ModalInstrucoes from '../modal/modal';
import { useTranslation } from 'react-i18next';

const FerramentaMetronomo = () => {
  const { t } = useTranslation();

  const [openModal, setOpenModal] = useState(true);
  const [bpm, setBpm] = useState(140);
  const [beatsPerMeasure, setBeatsPerMeasure] = useState(4);
  const [tempoText, setTempoText] = useState(t('Médio'));
  const [isPlaying, setIsPlaying] = useState(false);
  const [count, setCount] = useState(1);
  const [displayCount, setDisplayCount] = useState(1);

  const audio1 = new Audio(click1);
  const audio2 = new Audio(click2);

  useEffect(() => {
    audio1.load();
    audio2.load();
  }, []);

  const handleStartStop = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      setCount(1);
      setDisplayCount(1);
    }
  };

  const handleTempoChange = (e) => {
    const newBpm = parseInt(e.target.value, 10);
    setBpm(newBpm);
  };

  const decreaseTempo = () => {
    if (bpm > 20) {
      setBpm(bpm - 1);
    }
  };

  const increaseTempo = () => {
    if (bpm < 280) {
      setBpm(bpm + 1);
    }
  };

  const decreaseMeasures = () => {
    if (beatsPerMeasure > 2) {
      setBeatsPerMeasure(beatsPerMeasure - 1);
    }
    setCount(1);
  };

  const increaseMeasures = () => {
    if (beatsPerMeasure < 12) {
      setBeatsPerMeasure(beatsPerMeasure + 1);
    }
    setCount(1);
  };

  useEffect(() => {
    if (bpm <= 40) {
      setTempoText(t('Super Lento'));
    } else if (bpm < 80) {
      setTempoText(t('Lento'));
    } else if (bpm < 120) {
      setTempoText(t('Quase lá'));
    } else if (bpm < 180) {
      setTempoText(t('Médio'));
    } else if (bpm < 240) {
      setTempoText(t('Rápido'));
    } else {
      setTempoText(t('Super Rápido'));
    }
  }, [bpm, t]);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        console.log('Current beat:', count);
        if (count === 1) {
          audio1.currentTime = 0;
          audio1.play();
          setDisplayCount(0);
        } else {
          audio2.currentTime = 0;
          audio2.play();
        }
        setCount(count % beatsPerMeasure + 1);

        setDisplayCount(prevDisplayCount => {
          if (prevDisplayCount === beatsPerMeasure) {
            return 1;
          } else {
            return prevDisplayCount + 1;
          }
        });
      }, (60 / bpm) * 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [bpm, isPlaying, beatsPerMeasure, count]);

  // Renderiza dinamicamente as bolinhas de batida
  const renderBolasBatida = () => {
    return Array.from({ length: beatsPerMeasure }, (_, index) => (
      <span key={index} className={`bola-batida ${displayCount === index + 1 ? 'active' : ''}`}></span>
    ));
  };

  return (
    <div className="container">
     
      <div className='metronome'>
        <div aria-label="Indicador visual da numeração das batidas tocadas" className='batida'>{displayCount}</div>
        <div aria-label="Bolas indicadoras de batidas atuais: Bolas que mudam de cor para mostrar a batida atual e as anteriores que já foram tocadas." className='batidas-display'>
          {renderBolasBatida()}
        </div>
        <div aria-label="Indicador numérico da velocidade do BPM: Número que exibe a velocidade atual das batidas por minuto (BPM) selecionadas. " className='bpm-display'>
          <span className='tempo'>{bpm}</span>
          <span className='bpm'>BPM</span>
        </div>
        <div aria-label="Nesta área estão localizados os botões para aumentar e diminuir o BPM em 1, juntamente com o controle deslizante de BPM." className='tempo-settings'>
          <button aria-label="Botão para reduzir o BPM em 1." className='adjust-tempo-btn decrease-tempo' onClick={decreaseTempo}>-</button>
          <input aria-label="Controle deslizante de BPM do metrônomo" type='range' min={20} max={280} step={1} value={bpm} onChange={handleTempoChange} className='slider'></input>
          <button aria-label="Botão para aumentar o BPM em 1." className='adjust-tempo-btn increase-tempo' onClick={increaseTempo}>+</button>
        </div>
        <div aria-label="Indicador textual da velocidade do BPM do metrônomo." className='tempo-text'>{tempoText}</div>
        <div className='start-stop' onClick={handleStartStop}>{isPlaying ? t('PARAR') : t('INICIAR')}</div>
        <div aria-label="Aqui estão os botões que aumentam e diminuem as batidas do compasso em 1." className='measures'>
          <button aria-label="Botão para diminuir a quantidade de batidas do compasso." className='subtract-beats stepper' onClick={decreaseMeasures}>-</button>
          <div className='measure-count'>{beatsPerMeasure}</div>
          <button aria-label="Botão para aumentar a quantidade de batidas do compasso." className='add-beats stepper' onClick={increaseMeasures}>+</button>
        </div>
        <span className="batidas-por-minuto">{t('Batidas por minuto')}</span>
      </div>
      
    </div>
  );
};

export default FerramentaMetronomo;
