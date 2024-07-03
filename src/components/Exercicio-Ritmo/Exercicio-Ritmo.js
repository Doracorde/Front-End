import React, { useState, useEffect, useRef, } from 'react';
import './ExercicioRitmo.css';
import click1 from '../../assets/audio/click1.mp3';
import click2 from '../../assets/audio/click2.mp3';
import acerto from '../../assets/audio/correctSound.mp3';
import erro from '../../assets/audio/wrongSound.mp3';



const ExercicioRitmo = ({ beatsPerMeasure}) => {
    const [openModal, setOpenModal] = useState(true);
    const [bpm, setBpm] = useState(80);

    const [isPlaying, setIsPlaying] = useState(false);
    const [count, setCount] = useState(1);
    const [displayCount, setDisplayCount] = useState(1);
    const [expectedTime, setExpectedTime] = useState(0);
    const [feedbackAcerto, setFeedbackAcerto] = useState(false);
    const [feedbackErro, setFeedbackErro] = useState(false);
    const [debugMode, setDebugMode] = useState(false);
    const [sequencePhase, setSequencePhase] = useState(1);
    const intervalRef = useRef(null);
    const [correctHits, setCorrectHits] = useState(0);
    const [totalHits, setTotalHits] = useState(0);
    const [showCompletionButtons, setShowCompletionButtons] = useState(false);


    const audio1 = new Audio(click1);
    const audio2 = new Audio(click2);
    const audioAcerto = useRef(new Audio(acerto));
    const audioErro = useRef(new Audio(erro));

    useEffect(() => {
        audio1.load();
        audio2.load();
        audioAcerto.current.load();
        audioErro.current.load();
    }, []);

    const handleStartStop = () => {
        if (isPlaying) {
            stopMetronome();
        } else {
            startMetronome();
        }
    };

    const startMetronome = () => {
        setIsPlaying(true);
        setCount(1);
        setDisplayCount(1);
        setSequencePhase(1);
        setCorrectHits(0);
        setTotalHits(0);
        window.addEventListener('mousedown', handleUserInteraction);
        window.addEventListener('keydown', handleUserInteraction);
        window.addEventListener('keydown', handleKeyDown);
    };

    const stopMetronome = () => {
        setIsPlaying(false);
        window.removeEventListener('mousedown', handleUserInteraction);
        window.removeEventListener('keydown', handleUserInteraction);
        window.removeEventListener('keydown', handleKeyDown);
    };

    const handleUserInteraction = () => {
        if (sequencePhase === 1) return;

        const tolerance = 60;
        const timeDifference = Math.abs(Date.now() - expectedTime);
        setTotalHits(totalHits + 1);

        if (timeDifference < tolerance) {
            setFeedbackAcerto(true);
            setFeedbackErro(false);
            audioAcerto.current.currentTime = 0;
            audioAcerto.current.play();
            setCorrectHits(correctHits + 1);

            if (correctHits + 1 === beatsPerMeasure) {
                setShowCompletionButtons(true);
                stopMetronome();
            }
        } else {
            setFeedbackAcerto(false);
            setFeedbackErro(true); // Mostrar feedback de erro caso o tempo não seja preciso
            setShowCompletionButtons(false);
        }

        if (debugMode) {
            console.log(`Tempo esperado: ${expectedTime}`);
            console.log(`Diferença de tempo: ${timeDifference}`);
        }
    };

    const handleRetry = () => {

        setShowCompletionButtons(false);
        setFeedbackAcerto(false);
        setFeedbackErro(false);
        startMetronome();
    };

    const handleNext = () => {
        // Lógica para avançar para o próximo nível ou seção
        console.log('Avançar para o próximo nível ou seção');
        handleRetry(); // Reiniciar estado para próximo nível
    };


    useEffect(() => {
        const handleMetronomeTick = () => {
            const interval = (60 / bpm) * 1000;
            const nextExpectedTime = Date.now() + interval;

            if (count === 1) {
                audio1.currentTime = 0;
                audio1.play();
                setDisplayCount(1);
            } else {
                audio2.currentTime = 0;
                audio2.play();
                setDisplayCount(count);
            }

            setCount((prevCount) => (prevCount % beatsPerMeasure) + 1);
            setExpectedTime(nextExpectedTime);

            // Passar para a segunda sequência após um ciclo completo de batidas
            if (sequencePhase === 1 && count === beatsPerMeasure) {
                setSequencePhase(2);
            }
        };

        if (isPlaying) {
            const interval = (60 / bpm) * 1000;
            setExpectedTime(Date.now() + interval);
            intervalRef.current = setInterval(handleMetronomeTick, interval);
            window.addEventListener('mousedown', handleUserInteraction);
            window.addEventListener('keydown', handleUserInteraction);
            window.addEventListener('keydown', handleKeyDown);
        } else {
            clearInterval(intervalRef.current);
            window.removeEventListener('mousedown', handleUserInteraction);
            window.removeEventListener('keydown', handleUserInteraction);
            window.removeEventListener('keydown', handleKeyDown);
        }

        return () => {
            clearInterval(intervalRef.current);
            window.removeEventListener('mousedown', handleUserInteraction);
            window.removeEventListener('keydown', handleUserInteraction);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [bpm, isPlaying, beatsPerMeasure, count, debugMode]);


    const handleKeyDown = (event) => {
        if (event.code === 'Space') {
            event.preventDefault(); // Prevenir comportamento padrão da barra de espaço (scroll da página, etc.)
            handleUserInteraction(); // Chamar a função de interação do usuário
        }
    };

    const renderBolasBatida = () => {
        return Array.from({ length: beatsPerMeasure }, (_, index) => (
            <span key={index} className={`bola-batida ${displayCount === index + 1 ? 'active' : ''}`}></span>
        ));
    };

    const renderInformativeText = () => {
        return sequencePhase === 1 ? "Preste atenção na batida" : "Clique no ritmo da batida";
    };

    return (
        
        <div className="container">
           
           
            <div className='metronome'>
                <div aria-label="Indicador visual da numeração das batidas tocadas" className='batida'>     {displayCount}

                </div>
                <div aria-label="Bolas indicadoras de batidas atuais: Bolas que mudam de cor para mostrar a batida atual e as anteriores que já foram tocadas." className='batidas-display'>
                    {renderBolasBatida()}
                </div>
                <div aria-label="Indicador numérico da velocidade do BPM: Número que exibe a velocidade atual das batidas por minuto (BPM) selecionadas. " className='bpm-display'>
                    <div className='bpm-into'>
                        <span className='tempo'>{bpm}</span>
                        <span className='bpm'>BPM</span>
                    </div>

                </div>
                <div className='start-stop' onClick={handleStartStop}>{isPlaying ? 'PARAR' : 'INICIAR'}</div>
                {showCompletionButtons && (
                    <div className="completion-buttons">
                        <button className='btn-tente-novamente' onClick={handleRetry}></button>
                        <button className='btn-avancar' onClick={handleNext}></button>
                    </div>
                )}
                <div className="ritmo-feedback-container">
                    {feedbackAcerto && (
                        <div className="ritmo-feedback feedback-acerto">
                            Boa!
                        </div>
                    )}

                </div>
                <div className="informative-text">{renderInformativeText()}</div>
                <button className='ritmo-button' onClick={handleUserInteraction} disabled={sequencePhase === 1} >Clique no Ritmo</button>

                
            </div>

        </div>
    );
};

export default ExercicioRitmo;