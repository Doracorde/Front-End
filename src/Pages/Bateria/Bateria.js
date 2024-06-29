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
import pentagrama from "../Bateria/image/pentagrama.png"
import ritmo3 from '../Bateria/image/ritmo3.png'
import ritmo2 from "../Bateria/image/ritmo2.png"

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

function Ferramentas (){

        useEffect(() => {
            window.addEventListener('keydown', handleKeyPress);
            return () => {
                window.removeEventListener('keydown', handleKeyPress);
            };
        }, []);

    return(
        <>
    
        <div class="conteudo-ferramenta-bateria">

                <div class="main-bateria">
                    <div className='Kit-bateria'>
                        <h1>Bateria Virtual</h1>
                        <img className='bateria-img' src={kitBateria} alt='Kit Bateria'/>
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
                        <h2 className='titulo-texto'> Bateria Virtual</h2>
                            <p>Use o teclado do seu computador para tocar a bateria virtual.</p>
                            <ul className='lista-teclas'>
                                <li className='teste'>Chimbal fechado <button className='btn-lista-teclas'>Q</button></li>
                                <li>Chimbal com o pé <button className='btn-lista-teclas'>W</button></li>
                                <li>Prato de condução <button className='btn-lista-teclas'>T</button> </li>
                                <li>Prato de ataque <button className='btn-lista-teclas'>R</button></li>
                                <li>Bumbo <button className='btn-lista-teclas'>X</button></li>
                                <li>Surdo <button className='btn-lista-teclas'>S</button></li>
                                <li>Tom 1 <button className='btn-lista-teclas'>Z</button></li>
                                <li>Tom 2 <button className='btn-lista-teclas'>V</button></li>
                                <li>Caixa com mão esquerda<button className='btn-lista-teclas'>A</button></li>
                                <li>Caixa com mão direita<button className='btn-lista-teclas'>D</button></li>
                            </ul>
                            <p>Começe pela a bateria virtual, e depois aplique as suas novas aptidões em uma bateria real. Um modo divertido de praticar com a bateria virtual é tocar enquanto acompanha as suas canções favoritas.</p>
                        
                    </div>

                    <div className='box-cinza'>

                        <p>Para que seja possível criar partituras, é necessário aprendermos 
                            primeiro como Identificar cada componente da bateria. Assim utilizamos o Pentagrama tradicional </p>

                        <p>O pentagrama/ou pauta é um conjunto de cinco linhas e quatro espaços onde se escrevem as figuras musicais. 
                            As linhas e os espaços são contados de baixo para cima. No caso da bateria, a notação serve paraindicar as células rítmicas 
                            e apontar qual peça da bateria deve tocar em qual tempo.</p>

                        <img className='img-atividade' src={pentagrama} alt='A imagem mostra um pentagrama tradicional rotulado com termos para vários componentes de um kit de bateria. O fundo é marrom texturizado, parecendo papel envelhecido. Cada linha do pentagrama corresponde a um componente diferente da bateria: “Chimbal” (Hi-hat), “Ride/Condução” (Ride cymbal), “Caixa”, “Surdo”, “Bumbo”, “Tom 1” e “Tom 2”. Acima do pentagrama, há um símbolo de uma semínima ou nota de quarto seguido pelo texto: ‘escrita das partes da bateria’. No canto superior esquerdo, há o logo da doracorde. '/>
                        
                        <h2 className='subTitulo-bateria'>Representação das peças da bateria no pentagrama</h2>

                        <ul >
                            <li><strong>Chimbal:</strong> Representado por uma nota "x" no lugar da usual "bolinha". está representada no espaço acima da linha superior do pentagrama (quinta linha de baixo para cima).</li>
                            <li><strong>Ride(Prato de ataque):</strong>caracterizado por um"x" como todos pratos. se localiza na segunda linha a partir do topo do pentagrama.</li>
                            <li><strong>Caixa:</strong>simbolizado por uma nota na terceira linha a partir do topo do pentagrama.</li>
                            <li><strong>Surdo:</strong>Representado por uma nota na segunda linha a partir da parte inferior do pentagrama.</li>
                            <li><strong>Bumbo:</strong>A notação do bumbo fica na parte inferior da pauta(primeira linha de baixo para cima), podendo aparecer de cabeça para baixo</li>
                            <li><strong>Tom 1:</strong>nota na primeira linha a partir do topo do pentagrama.</li>
                            <li><strong>Tom 2:</strong>localizado na terceira linha a partir do topo do pentagrama.</li>
                            
                        </ul>

                        <p>Os ritmos primários na bateria são os fundamentos essenciais que todo baterista deve conhecer e dominar. Eles formam a base para tocar ritmos mais avançados. Experimente praticar alguns ritmos primários: </p>

                        <img className='img-atividade' src={ritmo3} alt='A imagem mostra um conceito musical chamado “Ritmos Primários”. É uma representação visual de notação musical, especificamente mostrando um padrão rítmico onde há uma nota por batida. O fundo se assemelha a um papel envelhecido com uma cor marrom clara. No centro da imagem, cinco linhas horizontais representam uma pauta musical. Nesta pauta, quatro semínimas estão colocadas em diferentes linhas e espaços indicando diferentes alturas.'/>
                        
                        <h3 className='paratocar'>Para tocar :</h3>
                            <p>uma nota por tempo</p>

                        <ul>
                            <li>1° toque chimbal com bumbo</li>
                            <li>2° em seguida toque chimbal juntamente com a caixa</li>
                            <li>3° e siga intercalando </li>
                        </ul>

                        <img className='img-atividade' src={ritmo2} alt='No topo, há um texto em que diz “Ritmos primários”, seguido por um subtítulo “Duas notas por tempo”. O fundo se assemelha a um papel envelhecido com uma cor marrom clara .A pauta tem duas linhas de música, cada uma contendo quatro compassos. As notas são todas pretas, indicando que são semínimas, e estão igualmente espaçadas para sugerir que cada nota é tocada por uma duração igual.'/>
                            <p>duas nota por tempo</p>

                            <ul>
                                <li>1° toque chimbal em todos os 4 tempos do compasso</li>
                                <li>2° toque bumbo no tempo 1</li>
                                <li>3° e toque caixa no tempo 3</li>
                                <li>4° siga repetindo</li>
                            </ul>

                        <p>Experimente tocar com Metrónomo e compartilhe com comunidade seu desempenho.</p> 
                    </div>

                </div>

                <div className='container-ferramentas'>
                    <div className='titulo-ferramentas'>
                        <h2 className='Tferramentas'>Ferramentas</h2>
                    </div>

                    <div className='lista-ferramentas'>
                            <ul>
                                <li className='t-lista'>Instrumentos</li>
                                <li>Piano</li>
                                <li>Guitarra</li>
                                <li>Bateria</li>
                                <li>Baixo</li>
                            </ul>
                        </div>

                        <div className='lista-ferramentas'>
                            <ul>
                                <li className='t-lista'>Equipamento</li>
                                <li>Gerador de acordes</li>
                                <li>Caixa de ritmos</li>
                                <li>Metrónomo</li>
                                <li>Afinador</li>
                            </ul>
                        </div>

                        <div className='lista-ferramentas'>
                            <ul>
                                <li className='t-lista'>Identificador</li>
                                <li>Notas</li>
                                <li>Intervalos</li>
                                <li>Acordes</li>
                                <li>Escalas</li>
                            </ul>
                        </div>

                        <div className='lista-ferramentas'>
                            <ul>
                                <li className='t-lista'>Mais</li>
                                <li>Círculo de quintas</li>
                                <li>Termos musicais</li>
                                <li>Intervalos em canções</li>
                                <li>Folhas de pauta</li>
                            </ul>
                        </div>
                </div>


              
        </div>
    </>
    );
}



export function Bateria (){
    return(
        <>
            <div class="main">
                <Ferramentas/>
                
            </div>
        </>
    );
}

export default Bateria;
