import React, { useEffect } from 'react';
import "../Bateria/Bateria.css";
import kitBateria from '../../Pages/Bateria/image/kit.jpg';
import chimbalF from '../Bateria/sons/chimbalfechado.wav';
import chimbalP from "../Bateria/sons/chimbalComPe.mp3";
import caixa from '../Bateria/sons/caixa.mp3';
import bumbo from '../Bateria/sons/bumbo.mp3';
import tom from '../Bateria/sons/tom.mp3';
import tom1 from '../Bateria/sons/tom1.wav';
import surdo from '../Bateria/sons/surdu.mp3';
import crash from '../Bateria/sons/crash.mp3';
import ride from '../Bateria/sons/ride.mp3';
import pentagrama from "../Bateria/image/pentagrama.png";
import ritmo3 from '../Bateria/image/ritmo3.png';
import ritmo2 from "../Bateria/image/ritmo2.png";

// Importar useTranslation do react-i18next
import { useTranslation } from 'react-i18next';

function playSound(sound) {
    const audio = new Audio(sound);
    audio.play();
}

function handleKeyPress(event) {
    switch (event.key.toUpperCase()) {
        case 'Q':
            playSound(chimbalF);
            break;
        case 'W':
            playSound(chimbalP);
            break;
        case 'R':
            playSound(crash);
            break;
        case 'T':
            playSound(ride);
            break;
        case 'X':
            playSound(bumbo);
            break;
        case 'Z':
            playSound(tom1);
            break;
        case 'V':
            playSound(tom);
            break;
        case 'A':
            playSound(caixa);
            break;
        case 'D':
            playSound(caixa);
            break;
        case 'S':
            playSound(surdo);
            break;
        default:
            break;
    }
}

function Ferramentas() {
    const { t } = useTranslation(); // Usar a função t() para tradução

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    return (
        <>
            <div className="conteudo-ferramenta-bateria">
                <div className="main-bateria">
                    <div className='Kit-bateria'>
                        <h1>{t('Bateria Virtual')}</h1>
                        <img className='bateria-img' src={kitBateria} alt={t('Kit Bateria')} />
                    </div>

                    <div className="tecla-bateria">
                        <button className="tecla-Q" onClick={() => playSound(chimbalF)}>Q</button>
                        <button className="tecla-W" onClick={() => playSound(chimbalP)}>W</button>
                        <button className="tecla-R" onClick={() => playSound(crash)}>R</button>
                        <button className="tecla-T" onClick={() => playSound(ride)}>T</button>
                        <button className="tecla-X" onClick={() => playSound(bumbo)}>X</button>
                        <button className="tecla-Z" onClick={() => playSound(tom1)}>Z</button>
                        <button className="tecla-V" onClick={() => playSound(tom)}>V</button>
                        <button className="tecla-A" onClick={() => playSound(caixa)}>A</button>
                        <button className="tecla-D" onClick={() => playSound(caixa)}>D</button>
                        <button className="tecla-S" onClick={() => playSound(surdo)}>S</button>
                    </div>

                    <div className='texto-bateria'>
                        <h2 className='titulo-texto'>{t('Bateria Virtual')}</h2>
                        <p>{t('Use o teclado do seu computador para tocar a bateria virtual.')}</p>
                        <ul className='lista-teclas'>
                            <li>{t('Chimbal fechado')} <button className='btn-lista-teclas'>Q</button></li>
                            <li>{t('Chimbal com o pé')} <button className='btn-lista-teclas'>W</button></li>
                            <li>{t('Prato de condução')} <button className='btn-lista-teclas'>T</button> </li>
                            <li>{t('Prato de ataque')} <button className='btn-lista-teclas'>R</button></li>
                            <li>{t('Bumbo')} <button className='btn-lista-teclas'>X</button></li>
                            <li>{t('Surdo')} <button className='btn-lista-teclas'>S</button></li>
                            <li>{t('Tom 1')} <button className='btn-lista-teclas'>Z</button></li>
                            <li>{t('Tom 2')} <button className='btn-lista-teclas'>V</button></li>
                            <li>{t('Caixa com mão esquerda')}<button className='btn-lista-teclas'>A</button></li>
                            <li>{t('Caixa com mão direita')}<button className='btn-lista-teclas'>D</button></li>
                        </ul>
                        <p>{t('Começe pela a bateria virtual, e depois aplique as suas novas aptidões em uma bateria real. Um modo divertido de praticar com a bateria virtual é tocar enquanto acompanha as suas canções favoritas.')}</p>
                    </div>

                    <div className='box-cinza'>
                        <p>{t('Para que seja possível criar partituras, é necessário aprendermos primeiro como Identificar cada componente da bateria. Assim utilizamos o Pentagrama tradicional')}</p>
                        <p>{t('O pentagrama/ou pauta é um conjunto de cinco linhas e quatro espaços onde se escrevem as figuras musicais. As linhas e os espaços são contados de baixo para cima. No caso da bateria, a notação serve paraindicar as células rítmicas e apontar qual peça da bateria deve tocar em qual tempo.')}</p>
                        <img className='img-atividade' src={pentagrama} alt={t('Imagem do pentagrama tradicional com etiquetas de componentes de bateria')} />
                        <h2 className='subTitulo-bateria'>{t('Representação das peças da bateria no pentagrama')}</h2>
                        <ul>
                            <li><strong>{t('Chimbal')}: </strong>{t('Representado por uma nota "x" no lugar da usual "bolinha". está representada no espaço acima da linha superior do pentagrama (quinta linha de baixo para cima).')}</li>
                            <li><strong>{t('Ride(Prato de ataque)')}: </strong>{t('caracterizado por um"x" como todos pratos. se localiza na segunda linha a partir do topo do pentagrama.')}</li>
                            <li><strong>{t('Caixa')}: </strong>{t('simbolizado por uma nota na terceira linha a partir do topo do pentagrama.')}</li>
                            <li><strong>{t('Surdo')}: </strong>{t('Representado por uma nota na segunda linha a partir da parte inferior do pentagrama.')}</li>
                            <li><strong>{t('Bumbo')}: </strong>{t('A notação do bumbo fica na parte inferior da pauta(primeira linha de baixo para cima), podendo aparecer de cabeça para baixo')}</li>
                            <li><strong>{t('Tom 1')}: </strong>{t('nota na primeira linha a partir do topo do pentagrama.')}</li>
                            <li><strong>{t('Tom 2')}: </strong>{t('localizado na terceira linha a partir do topo do pentagrama.')}</li>
                        </ul>
                        <p>{t('Os ritmos primários na bateria são os fundamentos essenciais que todo baterista deve conhecer e dominar. Eles formam a base para tocar ritmos mais avançados. Experimente praticar alguns ritmos primários:')}</p>
                        <img className='img-atividade' src={ritmo3} alt={t('Imagem representando ritmos primários na bateria')} />
                        <h3 className='paratocar'>{t('Para tocar :')}</h3>
                        <p>{t('uma nota por tempo')}</p>
                        <ul>
                            <li>1° {t('toque chimbal com bumbo')}</li>
                            <li>2° {t('em seguida toque chimbal juntamente com a caixa')}</li>
                            <li>3° {t('e siga intercalando')}</li>
                        </ul>
                        <img className='img-atividade' src={ritmo2} alt={t('Imagem representando ritmos secundários na bateria')} />
                        <p>{t('duas nota por tempo')}</p>
                        <ul>
                            <li>1° {t('toque chimbal em todos os 4 tempos do compasso')}</li>
                            <li>2° {t('toque bumbo no tempo 1')}</li>
                            <li>3° {t('e toque caixa no tempo 3')}</li>
                            <li>4° {t('siga repetindo')}</li>
                        </ul>
                        <p>{t('Experimente tocar com Metrónomo e compartilhe com comunidade seu desempenho.')}</p>
                    </div>
                </div>

                <div className='container-ferramentas'>
                    <div className='titulo-ferramentas'>
                        <h2 className='Tferramentas'>{t('Ferramentas')}</h2>
                    </div>

                    <div className='lista-ferramentas'>
                        <ul>
                            <li className='t-lista'>{t('Instrumentos')}</li>
                            <li>{t('Piano')}</li>
                            <li>{t('Guitarra')}</li>
                            <li>{t('Bateria')}</li>
                            <li>{t('Baixo')}</li>
                        </ul>
                    </div>

                    <div className='lista-ferramentas'>
                        <ul>
                            <li className='t-lista'>{t('Equipamento')}</li>
                            <li>{t('Gerador de acordes')}</li>
                            <li>{t('Caixa de ritmos')}</li>
                            <li>{t('Metrónomo')}</li>
                            <li>{t('Afinador')}</li>
                        </ul>
                    </div>

                    <div className='lista-ferramentas'>
                        <ul>
                            <li className='t-lista'>{t('Identificador')}</li>
                            <li>{t('Notas')}</li>
                            <li>{t('Intervalos')}</li>
                            <li>{t('Acordes')}</li>
                            <li>{t('Escalas')}</li>
                        </ul>
                    </div>

                    <div className='lista-ferramentas'>
                        <ul>
                            <li className='t-lista'>{t('Mais')}</li>
                            <li>{t('Círculo de quintas')}</li>
                            <li>{t('Termos musicais')}</li>
                            <li>{t('Intervalos em canções')}</li>
                            <li>{t('Folhas de pauta')}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export function Bateria() {
    return (
        <>
            <div className="main">
                <Ferramentas />
            </div>
        </>
    );
}

export default Bateria;
