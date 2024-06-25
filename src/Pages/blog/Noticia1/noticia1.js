import React from 'react';
import HeaderFaq from '../../../components/FaleConosco/headerFaq/headerFaq';
import Footer from '../../../components/Footer/footer';
import './noticia1.css'; // Estilos específicos para a página
import destaqueImg from '../../../assets/img/destaque.png'; // Imagem destacada
import relatedImg1 from '../../../assets/img/noticia2.png'; // Adicione o caminho correto das imagens
import relatedImg2 from '../../../assets/img/filmes-imperdiveis.png';
import relatedImg3 from '../../../assets/img/noticia3.png';
import relatedImg4 from '../../../assets/img/noticia4.png';
import { Link } from 'react-router-dom';

export default function Noticia1() {
    return (
        <>
            <HeaderFaq />
            <div className="noticia-container">
                <div className="noticia-header">
                    <img src={destaqueImg} alt="Imagem destacada representando deficientes visuais, homem lendo em braille" className="destaque-img" />
                    <h6>Deficientes visuais: saiba como ferramentas podem te ajudar a promover a equidade na sua empresa</h6>
                </div>
                <div className="noticia-content">
                    <p>
                        Investir em ferramentas para deficientes visuais é essencial para alcançar a igualdade social. Afinal, elas fazem com que esse grupo consiga explorar todo o seu potencial sem limites. Então, veja quais são elas, entenda como são essenciais no dia a dia e no trabalho.
                    </p>
                    <h2>Quem são os deficientes visuais?</h2>
                    <p>
                        Deficientes visuais são aqueles que tiveram perda parcial ou total da visão. Inclusive, isso pode ser resultado de vários fatores como glaucoma, catarata, lesões e outros mais. Além disso, eles podem se dividir em três grupos:
                    </p>
                    <ul>
                        <li>cegueira legal: possuem 20/200 ou menos no melhor olho;</li>
                        <li>baixa visão: mesmo com uso de óculos ou lente, eles não enxergam direito;</li>
                        <li>cegueira total: não têm percepção visual nenhuma.</li>
                    </ul>
                    <p>
                        É essencial saber que a deficiência visual não impede que a pessoa tenha uma vida comum. Ou seja, ela pode construir uma carreira, família e ter lazer como qualquer outro.
                    </p>
                    <p>
                        Outro ponto relevante é que quando esses indivíduos fazem parte de um time inclusivo, eles ajudam a melhorar os resultados de forma significativa. Mas, para isso, eles precisam ter acesso a itens adequados.
                    </p>
                    <h2>Por que é crucial oferecer ferramentas para deficientes visuais?</h2>
                    <p>
                        Oferecer ferramentas apropriadas para deficientes visuais ajuda a promover a inclusão e igualdade. Isso porque, elas tornam possível a participação de todos nas atividades diárias. Além disso, há outros pontos relevantes:
                    </p>
                    <ul>
                        <li>incentiva o acesso aos dados;</li>
                        <li>promove a autonomia;</li>
                        <li>contribui para a melhora da sociedade.</li>
                    </ul>
                    <p>
                        Ao investir em itens adequados, a sua empresa está cumprindo com a lei. Afinal, a norma n.º 13.146, de 6 de julho de 2015, define que promover condições de igualdade é obrigatório em toda empresa.
                    </p>
                    <p>
                        Stevie Wonder, Andrea Bocelli e Helen Keller são pessoas que provaram o seu talento no decorrer da história. Logo, elas mostraram que com as ferramentas certas é possível brilhar e deixar um grande legado no mundo.
                    </p>
                    <h2>Quais são as melhores ferramentas para deficientes visuais?</h2>
                    <p>
                        O leitor de tela é uma ótima ferramenta para deficiente visuais. Isso porque, ele é um software que converte texto exibido em áudio ou braille. Mas, também a outras, como:
                    </p>
                    <ul>
                        <li>ampliadores de tela;</li>
                        <li>teclado e display em braille;</li>
                        <li>películas com textura;</li>
                        <li>relógio inteligente e luva robótica;</li>
                        <li>peças que reconhecem a voz.</li>
                    </ul>
                    <p>
                        Todos os itens citados tem o poder de otimizar a rotina de pessoas com deficiência que fazem parte desse grupo. Mas, para que isso fique mais claro, veja como cada um deles funciona logo abaixo.
                    </p>
                    <h2>Ampliadores de tela</h2>
                    <p>
                        Os ampliadores de tela, como o próprio nome indica, servem para aumentar o tamanho das letras. Assim, pessoas com visão baixa ou cegueira legal, conseguem executar as suas tarefas com elas.
                    </p>
                    <p>
                        É bom saber que eles funcionam tanto em computadores quanto em outros dispositivos móveis, como celular ou tablet. Portanto, você vai conseguir implantá-los em sua empresa sem dificuldade.
                    </p>
                    <h2>Teclado e display em braille</h2>
                    <p>
                        No mercado, já existem teclados e displays com um design ideal para pessoas com cegueira. Desse modo, eles possuem um alto contraste e ondulações. Além disso, eles contam com uma proteção que faz com que a peça dure mais.
                    </p>
                    <p>
                        O padrão das letras é a ABNT e eles são plugados com o cabo USB. Logo, se trata de uma peça que segue o padrão e é fácil de instalar.
                    </p>
                    <h2>Películas com textura</h2>
                    <p>
                        Hoje em dia, existem películas que tornam as teclas táteis nos celulares e tablets. Portanto, eles contêm bolhas pequenas que inflam de forma dinâmica para ajudar na agilidade e na praticidade.
                    </p>
                    <p>
                        A peça ainda não está à venda no Brasil. Portanto, caso queira, você terá que buscá-la em sites de vendas internacionalizais. Além disso, ela não se adapta a computadores, o que é um contra para as empresas.
                    </p>
                    <p>
                        Por ser uma boa ideia, é provável que ela seja abraçada pelo mercado nacional e adaptada a outros itens. Então, vale a pena ficar atento para comprá-la quando estiver disponível no Brasil.
                    </p>
                    <h2>Relógio inteligente</h2>
                    <p>
                        O relógio inteligente faz com que o indivíduo consiga enviar e ler mensagens. Desse modo, ele é ótimo para quem precisa mandar uma resposta rápida sobre um projeto ou reunião.
                    </p>
                    <p>
                        Outro fator relevante é que ele ajuda a monitorar as atividades físicas. Então, se a sua empresa gosta de promover a saúde e o bem-estar, ele pode ser o ideal. Além disso, em geral, é compatível com Android e iOS.
                    </p>
                    <h2>Luva robótica</h2>
                    <p>
                        A luta robótica ajuda a “ver” com as mãos. Isso porque, esse aparelho possui câmeras que descrevem o ambiente. Desse modo, ao entrar em uma sala de reunião, por exemplo, ele conseguirá ter a mesma noção de espaço que qualquer outra pessoa.
                    </p>
                    <p>
                        O encaixe é ergonômico e a peça é muito fácil de usar. Portanto, quem é deficiente visual vai conseguir usá-la sem dificuldade, o que vai trazer uma grande melhora na qualidade de vida.
                    </p>
                    <p>
                        É essencial saber que essa é uma peça de alta tecnologia que vai fazer muita diferença para a empresa. Afinal, ela mostrará ao time que o bem-estar de cada um é crucial. Logo, isso mostrará a todos que eles estão no lugar certo.
                    </p>
                    <h2>Quais os maiores desafios para os deficientes visuais no trabalho?</h2>
                    <p>
                        O acesso a dados é um dos maiores desafios para os deficientes visuais no trabalho. Isso porque, até hoje, muitas empresas não tem peças adequadas para esse grupo. Além disso, há outros problemas, como:
                    </p>
                    <ul>
                        <li>falta de estrutura com conforto e segurança;</li>
                        <li>exclusão por parte do time ou clientes;</li>
                        <li>falta de qualificação profissional fornecida pela empresa.</li>
                    </ul>
                    <p>
                        Apesar da sociedade já ter evoluído, ainda existe uma luta diária para mudar todos os pontos citados. Inclusive, vale mencionar, que todas as pessoas devem se juntar à causa.
                    </p>
                    <p>
                        É dever das empresas investir na acessibilidade de forma contínua. Ao fazer isso, será possível garantir um mundo melhor e mais inclusivo para todos. Aliás, uma forma de atingir essa meta é dispor de todos ou de uma grande parte dos itens que foram abordados.
                    </p>
                    <p>
                        Quando providos de ferramentas adequadas, as pessoas com deficiência mostram que possuem a mesma capacidade que qualquer um. Portanto, vale a pena lutar com elas pela causa da inclusão.
                    </p>
                </div>
                <div className="related-articles">
                    <h3>Outros posts</h3>
                    <div className="articles">
                        <div className="article-item">
                            <Link to='/noticia2'>
                                <img src={relatedImg1} alt="Imagem relacionada à notícia 1" />
                            <p>É lei: consumidor com deficiência visual pode solicitar contrato em Braille, sem custo extra</p>
                            </Link>
                        </div>

                        <div className="article-item">
                            <Link to='/noticia3'>
                            <img src={relatedImg2} alt="Imagem relacionada à notícia 2" />
                            <p>10 filmes imperdíveis com personagens cegos</p>
                            </Link>
                        </div>
                        <div className="article-item">
                            <Link to='/noticia4'>
                            <img src={relatedImg3} alt="Imagem relacionada à notícia 3" />
                            <p>Ator de Anatomia de Uma Queda realmente tem deficiência visual? Diretora ficou impressionada com a "maneira como Milo falava"</p>
                            </Link>
                        </div>
                        <div className="article-item">
                            <Link to='/noticia5'>
                            <img src={relatedImg4} alt="Imagem relacionada à notícia 4" />
                            <p>Orquestra Parassinfônica encerra temporada 2023 na Sala São Paulo</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
