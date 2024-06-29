import React from 'react';
import HeaderFaq from '../../../components/FaleConosco/headerFaq/headerFaq';
import Footer from '../../../components/Footer/footer';
import './noticia4.css'; // Arquivo de estilos específicos para a página
import destaqueImg from '../../../assets/img/milo-depondo.jpeg'; // Caminho da imagem destacada
import relatedImg1 from '../../../assets/img/noticia1.png'; // Caminhos das imagens relacionadas
import relatedImg2 from '../../../assets/img/noticia2.png';
import relatedImg3 from '../../../assets/img/noticia3.png';
import relatedImg5 from '../../../assets/img/noticia5.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../../i18n'

export default function Noticia4() {
    const { t } = useTranslation();

    return (
        <>
            <HeaderFaq />
            <div className="noticia-container">
                <div className="noticia-header">
                    <h6>{t('Ator de Anatomia de Uma Queda realmente tem deficiência visual? Diretora ficou impressionada com a “maneira como Milo falava”')}</h6>
                    <img src={destaqueImg} alt={t('Descricao da Imagem: personagem milo depondo, imagem destacada representando Anatomia de Uma Queda')} className="destaque-img" />
                </div>
                <div className="noticia-content">
                    <p>
                        {t('Uma das maiores produções do ano,')} <a href="https://www.adorocinema.com/filmes/filme-297303/" target="_blank" rel="noopener noreferrer">Anatomia de Uma Queda</a>, {t('já está disponível no streaming. Dirigida por Justine Triet, a produção vencedora do Oscar de Melhor Roteiro Original na 96ª edição da honraria é estrelada por')} <a href="https://www.adorocinema.com/personalidades/personalidade-140889/" target="_blank" rel="noopener noreferrer">Sandra Hüller</a>, <a href="https://www.adorocinema.com/personalidades/personalidade-947251/" target="_blank" rel="noopener noreferrer">Milo Machado Graner</a> {t('e')} <a href="https://www.adorocinema.com/personalidades/personalidade-134347/" target="_blank" rel="noopener noreferrer">Swann Arlaud</a>.
                    </p>
                    <p>
                        {t('O suspense tem início quando um homem é encontrado morto na neve do lado de fora do chalé isolado onde morava com sua esposa Sandra (Hüller), uma escritora alemã, e seu filho de 11 anos com deficiência visual. A investigação conclui se tratar de uma "morte suspeita": é impossível saber ao certo se ele tirou a própria vida ou se foi assassinado. A viúva é indiciada, tendo seu próprio filho no meio do conflito: entre o julgamento e a vida familiar, as dúvidas pesam na relação mãe-filho, pois o menino é a única testemunha do acontecido.')}
                    </p>

                    <p>
                        {t('Com uma performance brilhante, o intérprete de Daniel, filho da protagonista, chamou a atenção por sua dedicação ao papel. Em entrevista ao The Wrap, a diretora do longa revelou que a “audição com Milo foi bastante semelhante” à escalação do elenco de E.T. - O Extraterrestre, de Steven Spielberg.')}
                    </p>
                    <p>
                        {t('Durante o processo de escalação, a diretora abordou que muitos questionaram sobre o teor das falas do jovem ator. “Todos nos disseram: \'Esse roteiro realmente não funciona porque uma criança não fala assim.\' Eu disse: \'Hein? Minha filha de 8 anos fala assim. É definitivamente possível\'”, o que acabou se comprovando com a execução do projeto.')}
                    </p>
                    <p>
                        {t('Ela mencionou que, apesar de ter pensado em um ator com deficiência visual, algo que faz jus ao personagem, ficou encantada com um aspecto de Milo, que não é cego. Ainda assim, o artista não foi a primeira escolha, pois não era tão parecido com Sandra. No entanto, seu produtor observou mais atentamente sua fita de teste e pediu para que Justine apenas ouvisse o registro. “A maneira como Milo falava era diferente”, ela lembrou. “Não parecia uma criança, e eu realmente gostei disso nele.”')}
                    </p>
                    <p>
                        {t('Na audição, Milo foi convidado a fazer uma das cenas do filme, de fato: “E em 10 segundos”, lembrou Triet, “ele se tornou totalmente diferente, totalmente dentro do personagem. Ele tinha lágrimas por todo o rosto, na verdade."')}
                    </p>
                    <p>
                        {t('Ela completa: "E naquele momento pedi a ele que dissesse as falas de seu personagem no final do filme, o que ninguém havia feito perfeitamente para mim antes. E ele fez a cena toda, ali mesmo, bem na nossa frente. Ficamos tão impressionados", lembrou. "Era tão complexo todas as coisas que estavam acontecendo com ele naquele momento. Mas ele fez tudo parecer tão fácil.')}
                    </p>
                    <p>
                        <a href="https://www.adorocinema.com/noticias/filmes/noticia-1000070812/" target="_blank" rel="noopener noreferrer">{t('Anatomia de uma Queda está disponível no catálogo do Prime Video.')}</a>
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
                            <Link to='/noticia3'>
                                <img src={relatedImg3} alt={t('Imagem relacionada à notícia 3')} />
                                <p>{t('10 filmes imperdíveis com personagens cegos')}</p>
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
