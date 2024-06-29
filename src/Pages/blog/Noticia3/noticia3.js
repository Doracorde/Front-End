import React from 'react';
import HeaderFaq from '../../../components/FaleConosco/headerFaq/headerFaq';
import Footer from '../../../components/Footer/footer';
import './noticia3.css'; // Arquivo de estilos específicos para a página
import { useTranslation } from 'react-i18next'; // Importa o hook useTranslation
import { Link } from 'react-router-dom'; // Importa Link do React Router

// Importa as imagens utilizadas no componente
import destaqueImg from '../../../assets/img/destaque.png';
import relatedImg1 from '../../../assets/img/noticia1.png';
import relatedImg2 from '../../../assets/img/noticia2.png';
import relatedImg4 from '../../../assets/img/noticia4.png';
import relatedImg5 from '../../../assets/img/noticia5.png';
import cordoparaiso from '../../../assets/img/a-cor-do-paraiso.png';
import primeiravista from '../../../assets/img/a-primeira-vista.png';
import dancandonoescuro from '../../../assets/img/dancando-no-escuro.png';
import dorina from '../../../assets/img/dorina-olhar-para-o-mundo.png';
import hojeeuquerovoltarsozinho from '../../../assets/img/hoje-eu-quero-voltar-sozinho.png';
import luzesdacidade from '../../../assets/img/luzes-da-cidade.png';
import milagredeanne from '../../../assets/img/milagre-de-anne-sullivan.png';
import odemolidor from '../../../assets/img/o-demolidor.png';
import perfumedemulher from '../../../assets/img/perfume-de-mulher.png';
import raycharles from '../../../assets/img/ray-charles.png';

export default function Noticia3() {
    const { t } = useTranslation(); // Usa o hook useTranslation para obter a função t() de tradução

    return (
        <>
            <HeaderFaq />

            <div className="noticia-container">
                <div className="noticia-header">
                    <h6>{t('10 filmes imperdíveis com personagens cegos')}</h6>
                    <p>03/07/2024</p>
                </div>
                
                <div className="noticia-content">
                    <p>
                        {t('Ação, drama, comédia… diversos personagens cegos já protagonizaram grandes filmes na história do cinema! Que tal conhecer melhor o mundo das pessoas cegas e com baixa visão em obras cinematográficas? Alguns títulos da lista, como o documentário sobre Dorina Nowill e “Hoje Eu Não Quero Voltar Sozinho”, contam com o recurso da audiodescrição para que pessoas com deficiência visual também possam apreciá-los em cada detalhe.')}
                    </p>
                    <p>
                        {t('Afinal, quem é que não gosta de um filminho com pipoca nas horas vagas?')}
                    </p>

                    <div>
                        <h2>{t('1. Luzes da Cidade')}</h2>
                        <img src={luzesdacidade} alt={t('Descrição da imagem: cena em preto e branco dos dois personagens principais de As Luzes da Cidade. É dia e eles estão numa calçada. O homem veste um fraque velho, gravata borboleta e chapéu-côco. A jovem florista cega está à direita, de perfil. Ela segura uma flor com a ponta dos dedos e sorri. Fim da descrição.')} />
                    </div>

                    <p>
                        {t('Começamos com um clássico do cinema mudo estrelado por Charlie Chaplin. O famoso personagem pobretão Carlitos se apaixona por uma jovem florista cega, que o confunde com um milionário. Para não desapontá-la, ele finge ser rico.')}
                    </p>

                    <div>
                        <h2>{t('2. O Demolidor')}</h2>
                        <img src={odemolidor} alt={t('Descrição da imagem: cena de O Demolidor. Ele é retratado do peito pra cima, com a testa franzida, usa uma roupa vermelha e uma máscara com dois pequenos chifres. Ao fundo há o topo de alguns prédios e um céu alaranjado e chuvoso. Fim da descrição.')} />
                    </div>

                    <p>
                        {t('Um acidente deixa o advogado Matt Murdock cego ainda na infância, mas também dá a ele poderes supersensoriais. À noite ele é O Demolidor, um vigilante mascarado que luta por Justiça nas ruas de Nova Iorque. Além do filme, o super-herói da Marvel também ganhou uma série própria.')}
                    </p>

                    <div>
                        <h2>{t('3. Ray')}</h2>
                        <img src={raycharles} alt={t('Descrição da imagem: cena do filme Ray. O ator Jamie Foxx é retratado do peito pra cima, em meio perfil, cantando em um microfone prateado. Ele usa óculos escuros e sorri. Fim da descrição.')} />
                    </div>

                    <p>
                        {t('‘Ray’ é baseado na vida do famoso cantor e pianista cego Ray Charles, que perdeu a visão em decorrência de um glaucoma na infância. A impressionante atuação de Jamie Foxx foi agraciada com o Oscar de melhor ator em 2005. O filme também levou uma estatueta na categoria Melhor Mixagem de Som.')}
                    </p>

                    <div>
                        <h2>{t('4. Hoje eu quero voltar sozinho')}</h2>
                        <img src={hojeeuquerovoltarsozinho} alt={t('Descrição da imagem: cena do filme Hoje eu quero voltar sozinho. Dois adolescente conversam em uma mesa. Eles estão sentados de frente para o outro, de perfil e sorrindo. Fim da descrição.')} />
                    </div>

                    <p>
                        {t('Nesta produção brasileira, um adolescente cego busca sua independência ao mesmo tempo em que tem que lidar com a superproteção da mãe. Quando um novo aluno chega à escola, ele terá de lidar também com novos sentimentos.')}
                    </p>

                    <div>
                        <h2>{t('5. Perfume de mulher')}</h2>
                        <img src={perfumedemulher} alt={t('Descrição da imagem: cena do filme Perfume de Mulher. Um casal é retratado da cintura pra cima, dançando em um restaurante. Fim da descrição.')} />
                    </div>

                    <p>
                        {t('Em uma atuação que lhe rendeu o Oscar de melhor ator, Al Pacino interpreta um militar cego e genioso que pretende realizar um antigo sonho antes de morrer. Ele então contrata um jovem estudante para ajudá-lo a passar um fim de semana em Nova Iorque, mas o rapaz também irá ajudá-lo a enxergar a vida de uma forma diferente.')}
                    </p>

                    <div>
                        <h2>{t('6. Dançando no Escuro')}</h2>
                        <img src={dancandonoescuro} alt={t('Descrição da imagem: cena do filme Dançando no Escuro. Uma moça de cabelos castanhos sorri e olha para outra de cabelos loiros, que toca seu rosto com as duas mãos. Fim da descrição.')} />
                    </div>

                    <p>
                        {t('A cantora islandesa Bjork interpreta uma imigrante tcheca que possui uma doença hereditária que causa a cegueira. Mãe solteira, ela decide mudar para os EUA para conseguir uma cirurgia para seu filho de 12 anos antes que ele também perca a visão.')}
                    </p>

                    <div>
                        <h2>{t('7. A cor do paraíso')}</h2>
                        <img src={cordoparaiso} alt={t('Descrição da imagem: cena do filme A cor do paraíso. Um homem e um menino caminham por uma estrada verdejante. Eles estão de frente. O homem carrega duas malas. O menino usa óculos escuros e caminha ao seu lado. Fim da descrição.')} />
                    </div>

                    <p>
                        {t('O filme conta a história de um garoto cego que vive em um colégio interno. Seu pai tem vergonha de sua deficiência e tenta mantê-lo escondido durante as férias, quando o menino tem que voltar para casa, mas aprenderá uma importante lição de vida com o filho.')}
                    </p>

                    <h2>{t('8. À primeira vista')}</h2>
                    <img src={primeiravista} alt={t('Descrição da imagem: cena do filme À primeira vista. Um homem de óculos escuros toca o rosto de uma moça com as duas mãos. Fim da descrição.')} />
                    <p>
                        {t('Depois de passar a maior parte de sua vida cego, um homem tem a possibilidade de voltar a enxergar através de um novo procedimento experimental. Com o sucesso da cirurgia, ele terá que reaprender a lidar com o mundo enxergando novamente e contará com a ajuda de sua namorada para isso.')}
                    </p>

                    <h2>{t('9. O milagre de Anne Sullivan')}</h2>
                    <img src={milagredeanne} alt={t('Descrição da imagem: cena em preto e branco do filme O Milagre de Anne Sullivan. Uma garota olha pra frente. Ao seu lado, uma mulher olha pra ela e gesticula com uma mão à frente do rosto. Ela usa óculos escuros. Fim da descrição.')} />
                    <p>
                        {t('Filme baseado na história real e comovente da professora Anne Sullivan, que se esforça para fazer com que Helen Keller, uma garota cega, surda e muda se adapte ao mundo que a cerca. A professora acaba comprando uma briga com os pais da menina, que preferem mimá-la por pena a ensinar-lhe algo significativo.')}
                    </p>

                    <h2>{t('10. Dorina: olhar para o mundo')}</h2>
                    <img src={dorina} alt={t('Descrição da imagem: capa do documentário Dorina - olhar para o mundo. À esquerda há um texto em braille sobre um fundo texturizado. No centro há a imagem do rosto de Dorina Nowill em marca d\'água. Ela está de perfil e sorrindo. Fim da descrição.')} />
                    <p>
                        {t('É claro que essa lista não estaria completa sem esse maravilhoso documentário sobre a vida de Dorina de Gouvêa Nowill. Dorina perdeu a visão aos 17 anos e, desde então, dedicou sua vida à luta pelos direitos de inclusão das pessoas com deficiência visual no Brasil e no mundo!')}
                    </p>
                </div>

                <div className="related-articles">
                    <h3>{t('Outros posts')}</h3>
                    <div className="articles">
                        <div className="article-item">
                            <Link to='/noticia1'>
                                <img src={relatedImg1} alt={t('Imagem relacionada à notícia 1')} />
                                <p>{t('Deficientes visuais: saiba como ferramentas podem te ajudar a promover a equidade na sua empresa')}</p>
                            </Link>
                        </div>
                        <div className="article-item">
                            <Link to='/noticia2'>
                                <img src={relatedImg2} alt={t('Imagem relacionada à notícia 2')} />
                                <p>{t('É lei: consumidor com deficiência visual pode solicitar contrato em Braille, sem custo extra')}</p>
                            </Link>
                        </div>
                        <div className="article-item">
                            <Link to='/noticia4'>
                                <img src={relatedImg4} alt={t('Imagem relacionada à notícia 4')} />
                                <p>{t('Ator de Anatomia de Uma Queda realmente tem deficiência visual? Diretora ficou impressionada com a "maneira como Milo falava"')}</p>
                            </Link>
                        </div>
                        <div className="article-item">
                            <Link to='/noticia5'>
                                <img src={relatedImg5} alt={t('Imagem relacionada à notícia 5')} />
                                <p>{t('Orquestra Parassinfônica encerra temporada 2023 na Sala São Paulo')}</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
