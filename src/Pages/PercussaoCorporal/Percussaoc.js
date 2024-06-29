import '../PercussaoCorporal/Pc.css'
import Baiao from "../PercussaoCorporal/imagem/baiao.png"
import Bossa from "../PercussaoCorporal/imagem/bossanova.png"
import Ritmografia from "../PercussaoCorporal/imagem/ritmoEmbranco.jpg"

export function ConteudoPc () {
    return (
        <>
            <div class="main-pc">
                <div className='box-pc'>
                    <h1 className='titulo-pag-pc'>Percussão Corporal</h1>
                    <p className='texto-pag-pc'>  A percussão corporal é uma forma de expressão musical que utiliza o corpo como instrumento.
                    Ela envolve a produção de sons e ritmos através de batidas, palmas, estalos de dedos,
                    batidas de pés e outros movimentos corporais. É uma prática divertida
                    e educativa que ajuda a desenvolver a coordenação motora, o ritmo, a concentração e a criatividade.</p>

                <div class="box-cinza">
                        <p className='texto-pag-pc'>Você tem a liberdade de criar ritmos utilizando de sua criatividade e até mesmo acompanhando musicas conhecidas.
                        Abaixo oferecemos um exemplo com ritmo baião. Essa é uma de milhares de maneiras de tocar esse ritmo brasileiro.</p>
    
                        <img className='ritmografia-img' src={Baiao} alt='A imagem é uma representação visual do ritmo do Baião, 
                        um gênero musical brasileiro. Ela mostra sinais de mão para contar batidas, figuras tocando um acordeão,
                        e um padrão de teclado de piano com notas musicais. Também há personagens tocando um violão e dançando,
                        vestindo trajes tradicionais do nordeste brasileiro. No canto superior esquerdo,
                        há uma marcação de metrônomo indicando 100 batidas por minuto, o tempo para tocar Baião.'/>
    
                        <p className='texto-pag-pc'>Neste ritmograma temos indicações para que se toque o baião da seguinte maneira</p>
    
                        <ul className='texto-pag-pc'>
                            <li>1° Tapa no peito</li>
                            <li>2° estale os dedos duas vezes alternadamente (direita e esquerda)</li>
                            <li>3° Outro tapa no peito</li>
                            <li>4° Estale os dedos duas vezes novamente</li>
                            <li>5° E por último finalize com uma palma simples.</li>
                            <li>Repita essa sequência para ver a música se desenvolver.</li>
                        </ul>

                        <p className='texto-pag-pc'>Tente agora desenvolver acompanhando uma música. Abaixo representamos a bossa nova, para que você possa acompanhar a música "Garota de Ipanema", se preferir, acompanhe outra canção se assim preferir.</p>

                        <img className='ritmografia-img' src={Bossa} alt= 'ritmografia do estilo bossa nova'/>

                        <ul className='texto-pag-pc'>
                            <li>1° Comece com um tapa no peito utilizando a mão direita</li>
                            <li>2° estale os dedos duas vezes alternadamente (direita e esquerda)</li>
                            <li>3° Por último um tapa no peito com a mão esquerda</li>
                            <li> e volte ao inicio com a mão direita, repetindo assim veja a musica acontecer.</li>
                        </ul>
                </div>
                        <p className='texto-pag-pc'>Agora é com você: crie suas próprias batidas e compartilhe com a comunidade. 
                            
                        <a href={Ritmografia} download="ritmoEmbranco.jpg"> Baixe aqui ritmografia em branco</a>
                        </p>
                </div>

               
            
            </div>
        
        </>


    );
}

    function BarraFerramentas (){
        return(
            <>
                <div className='container-ferramentas-pc'>
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

            </>
        );
    }
    
export function PercussaoCorporal(){
    return(
        <>
            <div className='conteudo-pc'>
                <ConteudoPc/>
                <BarraFerramentas/>
            </div>
        </>
    );
}


export default PercussaoCorporal;