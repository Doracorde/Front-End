import React, { useState, useEffect } from 'react';
import './FerramentaMetronomo.css';
import click1 from '../../assets/audio/click1.mp3';
import click2 from '../../assets/audio/click2.mp3';
import ModalInstrucoes from '../modal/modal'



const FerramentaMetronomo = () => {

    const [openModal, setOpenModal] = useState(true);

    const [bpm, setBpm] = useState(140);
    const [beatsPerMeasure, setBeatsPerMeasure] = useState(4);
    const [tempoText, setTempoText] = useState('Médio');
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
            setTempoText('Super Lento');
        } else if (bpm < 80) {
            setTempoText('Lento');
        } else if (bpm < 120) {
            setTempoText('Quase lá');
        } else if (bpm < 180) {
            setTempoText('Médio');
        } else if (bpm < 240) {
            setTempoText('Rápido');
        } else {
            setTempoText('Super Rápido');
        }
    }, [bpm]);

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
            <ModalInstrucoes isOpen={openModal} setModalOpen={setOpenModal}


                descInstrucoes={[
                    "Botão INICIAR/PARAR:",
                    "Abaixo do texto indicador de velocidade do metrônomo, há um botão para iniciar ou parar o metrônomo.",
                    "Função: Inicia ou para o metrônomo.",
                    "Como Usar: Clique uma vez para iniciar o metrônomo. Clique novamente para parar.",
                ]}

                funcao2={["Função: Ajusta a velocidade das batidas por minuto (BPM).",
                    "O controle deslizante está posicionado acima do texto indicador de velocidade e abaixo do valor numérico do BPM. À esquerda do controle deslizante, há um botão para diminuir o BPM em -1, e à direita, um botão para aumentar o BPM em +1.",
                    "Como Usar: Arraste o controle deslizante para a direita para aumentar o BPM e para a esquerda para diminuir.",
                ]}

                funcao3={["Botões de Ajuste de Compasso:",
                    "Função: Ajusta o número de batidas por compasso.",
                    "Os ajustes de compasso estão localizados abaixo do botão de iniciar o metrônomo. À esquerda, encontra-se o botão que diminui o compasso em -1, e à direita, o botão que adiciona +1 ao compasso. Entre eles, está a numeração que indica a quantidade atual de compassos utilizados.",
                    "Como Usar: Clique no botão com sinal de - para diminuir o número de batidas por compasso. Clique no botão com sinal de + para aumentar o número de batidas por compasso."
                ]}

                funcao4={["Parando o Metrônomo:",
                    "Clique novamente no botão PARAR para parar o metrônomo quando não precisar mais ouvir as batidas.",
                ]}

                funcao5={["Indicador de batidas tocadas:",
                    "Acima do valor numérico do BPM., há uma série de bolas que representam as batidas. A quantidade dessas bolas pode ser alterada conforme o número de batidas por compasso que você escolher. A cada batida, a bola correspondente muda de cor para indicar que a batida foi tocada. Quando a próxima batida ocorre, a bola seguinte muda de cor e a bola anterior volta a ficar cinza, indicando que aquela batida já foi tocada."
                ]}

                funcao6={["Indicador de velocidade do BPM::",
                    "Abaixo do indicador de batidas, há um indicador valor numérico do BPM. velocidade do BPM que se ajusta conforme você aumenta ou diminui a velocidade do metrônomo.",
                ]}

                funcao7={["Texto informativo de velocidade:",
                    "Abaixo do controle deslizante de velocidade do BPM e dos botões de ajuste de BPM, existe um texto que descreve a velocidade atual em palavras. O texto varia de 'super lento' a 'super rápido', conforme a velocidade do BPM é ajustada.",
                ]}

                funcao8={["Para sair do painel de ajuda clique no botão com o símbolo de X ou aperte ESC",

                ]}

            />
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
                <div className='start-stop' onClick={handleStartStop}>{isPlaying ? 'PARAR' : 'INICIAR'}</div>
                <div aria-label="Aqui estão os botões que aumentam e diminuem as batidas do compasso em 1." className='measures'>
                    <button aria-label="Botão para diminuir a quantidade de batidas do compasso." className='subtract-beats stepper' onClick={decreaseMeasures}>-</button>
                    <div className='measure-count'>{beatsPerMeasure}</div>
                    <button aria-label="Botão para aumentar a quantidade de batidas do compasso." className='add-beats stepper' onClick={increaseMeasures}>+</button>
                </div>
                <span className="batidas-por-minuto">Batidas por minuto</span>
            </div>
            <div className='botao-modal'>
                <button aria-label="Botão para abrir o painel de instruções do exercício." className='btn-info' onClick={() => setOpenModal(true)}>
                    ℹ️
                </button>
            </div>
        </div>
    );
};

export default FerramentaMetronomo;
