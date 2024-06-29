import React from 'react';
import HeaderFaq from '../../../components/FaleConosco/headerFaq/headerFaq';
import Footer from '../../../components/Footer/footer';
import './noticia5.css'; // Arquivo de estilos específicos para a página
import imageOdrus from '../../../assets/img/odrus.jpeg'; // Caminho da imagem principal
import relatedImg1 from '../../../assets/img/noticia1.png'; // Caminhos das imagens relacionadas
import relatedImg2 from '../../../assets/img/noticia2.png';
import relatedImg3 from '../../../assets/img/noticia3.png';
import relatedImg4 from '../../../assets/img/noticia4.png';
import { useTranslation } from 'react-i18next';
import '../../../i18n';

export default function Noticia5() {
    const { t } = useTranslation();

    return (
        <>
            <HeaderFaq />
            <div className="noticia-container">
                <div className="noticia-header">
                    <h6>{t('\'Arte salvou minha vida\', diz grafiteiro surdo que participa de exposição em São Paulo')}</h6>
                    <img src={imageOdrus} alt={t('Odrus, grafiteiro surdo, em frente a uma de suas obras')} className="odrus-img" />
                    <p>{t('27/05/2023')}</p>
                </div>
                <div className="noticia-content">
                    <p>{t('O grafiteiro Odrus, nome artístico de Rafael Caldeira dos Santos, revelou em entrevista que a arte foi fundamental para transformar sua vida. Aos 40 anos, ele compartilha sua história de superação e como a expressão artística o resgatou de um passado de revolta e falta de perspectiva.')}</p>
                    <p>{t('Vindo de um contexto de exclusão social e enfrentando limitações físicas e sensoriais, Odrus passou por períodos difíceis na adolescência, incluindo internações em instituições de ressocialização devido a sua trajetória de envolvimento em assaltos. Ele menciona que a arte não apenas o salvou, mas também busca inspirar outras pessoas com deficiência auditiva e aqueles que enfrentam desafios similares.')}</p>
                    <p>{t('\'Venho da periferia, de juventude de muitas privações, sofrendo preconceito e vivendo em um tempo em que havia poucos intérpretes de Libras. Fui por um caminho ruim, mas a arte me salvou. Agora, quero mostrar que, através dela, podemos ser o que quisermos\', disse Odrus, que se expressa por meio da Língua Brasileira de Sinais (Libras).')}</p>
                    <p>{t('Odrus é conhecido por incluir sinais em Libras em parte de seus grafites, tornando seu trabalho acessível e inspirador para mais pessoas surdas. Ele iniciou sua jornada artística há mais de 20 anos, introduzido à cultura Hip Hop e ao graffiti por um amigo.')}</p>
                    <p>{t('\'Julgavam muito o que eu fazia. Mas, como eu acreditava, tive paciência de mostrar que o que produzo é arte. Foi preciso arregaçar as mangas e não desistir\', acrescentou, refletindo sobre os desafios que enfrentou no início de sua carreira.')}</p>
                    <p>{t('Atualmente, Odrus vive de encomendas de trabalhos de grafite, principalmente para ilustrar fachadas de comércios e escolas em Brasília, onde reside. Além disso, ele compartilha seu talento através de oficinas na Fundação Casa, buscando proporcionar novas oportunidades transformadoras com a arte para minorias e pessoas em situação de vulnerabilidade.')}</p>
                    <p>{t('Seu trabalho está sendo destacado na exposição "Além das Ruas, Histórias do Graffiti" no Itaú Cultural, em São Paulo, até 30 de julho. A mostra apresenta obras de 50 grafiteiros e é uma chance importante para que pessoas surdas vejam Odrus como um modelo de superação e inspiração.')}</p>
                </div>
                <div className="related-articles">
                    <h3>{t('Outros posts')}</h3>
                    <div className="articles">
                        <div className="article-item">
                            <img src={relatedImg1} alt={t('Imagem relacionada à notícia 1')} />
                            <p>{t('Deficientes visuais: saiba como ferramentas podem te ajudar a promover a equidade na sua empresa')}</p>
                        </div>
                        <div className="article-item">
                            <img src={relatedImg2} alt={t('Imagem relacionada à notícia 2')} />
                            <p>{t('É lei: consumidor com deficiência visual pode solicitar contrato em Braille, sem custo extra')}</p>
                        </div>
                        <div className="article-item">
                            <img src={relatedImg3} alt={t('Imagem relacionada à notícia 3')} />
                            <p>{t('10 filmes imperdíveis com personagens cegos')}</p>
                        </div>
                        <div className="article-item">
                            <img src={relatedImg4} alt={t('Imagem relacionada à notícia 4')} />
                            <p>{t('Ator de Anatomia de Uma Queda realmente tem deficiência visual? Diretora ficou impressionada com a “maneira como Milo falava”')}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
