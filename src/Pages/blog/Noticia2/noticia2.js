import React from 'react';
import HeaderFaq from '../../../components/FaleConosco/headerFaq/headerFaq';
import Footer from '../../../components/Footer/footer';
import './noticia2.css'; 
import destaqueImg from '../../../assets/img/noticia2-destaque.png'; 
import relatedImg1 from '../../../assets/img/noticia1.png'; 
import relatedImg3 from '../../../assets/img/noticia3.png';
import relatedImg4 from '../../../assets/img/noticia4.png';
import relatedImg5 from '../../../assets/img/noticia5.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../../i18n';

export default function Noticia2() {
    const { t } = useTranslation();

    return (
        <>
            <HeaderFaq />
            <div className="noticia-container">
                <div className="noticia-header">
                    <img src={destaqueImg} alt={t('Imagem destacada representando contrato em Braille')} className="destaque-img" />
                    <h6>{t('É lei: consumidor com deficiência visual pode solicitar contrato em Braille, sem custo extra')}</h6>
                </div>
                <div className="noticia-content">
                    <p>
                        {t('Medida vale para documentos de fornecedores de produtos ou serviços e de instituições financeiras e similares. Contratos de adesão e outros documentos essenciais na relação do consumidor com uma empresa poderão ser solicitados em Braille ou outros formatos acessíveis às pessoas com deficiência visual no Estado do Rio. E isso sem gerar cobrança adicional. A determinação é da Lei 10.343/24, aprovada pela Assembleia Legislativa (Alerj) e sancionada pelo governador Cláudio Castro.')}
                    </p>
                    <p>
                        {t('A lei, proposta pela deputada Martha Rocha, vale para documentos de fornecedores de produtos ou serviços e de instituições financeiras e similares. A escolha do formato para o documento de adesão é do consumidor. E o descumprimento da norma deve resultar em multa de até R$ 22,7 mil (5 mil UFIR-RJ), dobrada em caso de reincidência.')}
                    </p>
                    <p>
                        {t('Segundo o texto publicado no Diário Oficial, o valor arrecadado em multa deverá ser revertido ao Fundo do Conselho Estadual de Integração da Pessoa com Deficiência.')}
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
                            <Link to='/noticia3'>
                                <img src={relatedImg3} alt={t('Imagem relacionada à notícia 3')} />
                                <p>{t('10 filmes imperdíveis com personagens cegos')}</p>
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
