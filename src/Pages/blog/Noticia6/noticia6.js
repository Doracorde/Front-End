import React from 'react';
import { useTranslation } from 'react-i18next';
import HeaderFaq from '../../../components/FaleConosco/headerFaq/headerFaq';
import Footer from '../../../components/Footer/footer';
import './noticia6.css'; // Arquivo de estilos específicos para a página
import violoncelista from '../../../assets/img/violoncelista.jpeg'; // Caminho da imagem principal
import relatedImg1 from '../../../assets/img/noticia1.png'; // Caminhos das imagens relacionadas
import relatedImg2 from '../../../assets/img/noticia2.png';
import relatedImg3 from '../../../assets/img/noticia3.png';
import relatedImg4 from '../../../assets/img/noticia4.png';

export default function Noticia6() {
    const { t } = useTranslation();

    return (
        <>
            <HeaderFaq />
            <div className="noticia-container">
                <div className="noticia-header">
                    <h6>{t('Orquestra parassinfônica fará sua estreia na Sala São Paulo')}</h6>
                </div>
                <div className="noticia-content">
                    <p>
                        {t('A Opesp, Orquestra Parassinfônica de São Paulo, está se preparando para sua estreia na Sala São Paulo no próximo dia 3 de dezembro, coincidindo com o Dia Internacional das Pessoas com Deficiência. Composta por 32 músicos, quase metade deles com deficiência, a orquestra foi formada a partir de um edital que selecionou talentos diversos.')}
                    </p>
                    <p>
                        {t('Desde outubro, os músicos têm participado de intensivos ensaios para a estreia, que será conduzida pelo maestro Roberto Tibiriçá. A iniciativa foi idealizada por Igor Cayres, produtor cultural inspirado por músicos como João Carlos Martins e grupos como o coral de mulheres cegas, buscando destacar artistas com deficiência em papéis de destaque na música.')}
                    </p>
                    <p>
                        {t('Um dos músicos da Opesp é Miriã Vitória dos Santos, que encontrou na música uma paixão desde a infância e agora toca violoncelo na orquestra. Diagnosticada com paralisia cerebral aos 2 anos, Miriã vê sua participação na Opesp como um marco de representatividade e profissionalização na música.')}
                        <img src={violoncelista} alt={t('Miriã Vitória, violoncelista da Orquestra Parasimfônica de São Paulo')} className="violoncelista-img" />
                    </p>
                    <p>
                        {t('O futuro da Opesp inclui mais apresentações em 2023 e a abertura de novos editais para integrar mais músicos com deficiência ao projeto, promovendo a diversidade na música clássica.')}
                    </p>
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
