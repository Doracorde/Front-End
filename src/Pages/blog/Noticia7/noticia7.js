import React from 'react';
import HeaderFaq from '../../../components/FaleConosco/headerFaq/headerFaq';
import Footer from '../../../components/Footer/footer';
import './noticia7.css'; 
import imageTodasAsFlores from '../../../assets/img/todas-as-flores.png'; 
import relatedImg1 from '../../../assets/img/noticia1.png'; 
import relatedImg2 from '../../../assets/img/noticia2.png';
import relatedImg3 from '../../../assets/img/noticia3.png';
import relatedImg4 from '../../../assets/img/noticia4.png';

export default function Noticia7() {
    return (
        <>
            <HeaderFaq />
            <div className="noticia-container">
                <div className="noticia-header">
                    <h6>Muitas flores e alguns espinhos na nova novela da Globo</h6>
                    <img src={imageTodasAsFlores} alt="Imagem principal da novela Todas as Flores" className="opesp-img" />
                </div>
                <div className="noticia-content">
                    <p>
                        A Globo lançou a novela "Todas as Flores" em seu serviço de streaming, trazendo uma protagonista cega como destaque. Escrita por João Emanuel Carneiro, conhecido por sucessos como "Avenida Brasil" e "A Favorita", a obra despertou uma mistura de sentimentos na crítica.
                    </p>
                    <p>
                        A empolgação inicial veio do potencial de abordar a cegueira de forma significativa, promovendo debates sobre os desafios enfrentados por pessoas cegas e desmistificando preconceitos. A inclusão da audiodescrição na abertura da novela foi um marco, permitindo que pessoas com deficiência visual acompanhassem detalhes visuais essenciais da trama.
                    </p>
                    <p>
                        No entanto, houve também críticas. A falta de disponibilidade da audiodescrição no Globo Play e a preocupação com possíveis estereótipos na representação da protagonista geraram desconforto. A escolha de uma atriz vidente para o papel de Maíra, a personagem cega, foi controversa, mesmo que a atriz tenha se esforçado para interpretar de forma autêntica.
                    </p>
                    <p>
                        Apesar das opiniões mistas, a novela conseguiu emocionar com sua abertura sensível, destacando a importância da música, dos aromas e do braille na vida das pessoas com deficiência visual. A inclusão de detalhes sutis e a representação diversificada foram elogiadas, mas também levantaram questionamentos sobre a representatividade autêntica na televisão.
                    </p>
                    <p>
                        O futuro de "Todas as Flores" continua sendo acompanhado de perto pela crítica e pelo público, enquanto se espera que a novela cumpra sua promessa de ampliar a visibilidade e a compreensão sobre a vida com deficiência visual na sociedade.
                    </p>

                </div>
                <div className="related-articles">
                    <h3>Outros posts</h3>
                    <div className="articles">
                        <div className="article-item">
                            <img src={relatedImg1} alt="Imagem relacionada à notícia 1" />
                            <p>Deficientes visuais: saiba como ferramentas podem te ajudar a promover a equidade na sua empresa</p>
                        </div>
                        <div className="article-item">
                            <img src={relatedImg2} alt="Imagem relacionada à notícia 2" />
                            <p>É lei: consumidor com deficiência visual pode solicitar contrato em Braille, sem custo extra</p>
                        </div>
                        <div className="article-item">
                            <img src={relatedImg3} alt="Imagem relacionada à notícia 3" />
                            <p>10 filmes imperdíveis com personagens cegos</p>
                        </div>
                        <div className="article-item">
                            <img src={relatedImg4} alt="Imagem relacionada à notícia 4" />
                            <p>Ator de Anatomia de Uma Queda realmente tem deficiência visual? Diretora ficou impressionada com a “maneira como Milo falava”</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
