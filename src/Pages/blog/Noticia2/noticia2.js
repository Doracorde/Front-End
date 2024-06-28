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

export default function Noticia2() {
    const { t } = useTranslation();

    return (
        <>
            <HeaderFaq />
            <div className="noticia-container">
                <div className="noticia-header">
                    <img src={destaqueImg} alt={t('pageTitle')} className="destaque-img" />
                    <h6>{t('pageTitle')}</h6>
                </div>
                <div className="noticia-content">
                    <p>
                        {t('text1')}
                    </p>
                    <p>
                        {t('text2')}
                    </p>
                    <p>
                        {t('text3')}
                    </p>
                </div>
                <div className="related-articles">
                    <h3>{t('relatedArticlesTitle')}</h3>
                    <div className="articles">
                        <div className="article-item">
                            <Link to='/noticia1'>
                                <img src={relatedImg1} alt={t('altText1')} />
                                <p>{t('text1')}</p>
                            </Link>
                        </div>
                        <div className="article-item">
                            <Link to='/noticia3'>
                                <img src={relatedImg3} alt={t('altText3')} />
                                <p>{t('text3')}</p>
                            </Link>
                        </div>
                        <div className="article-item">
                            <Link to='/noticia4'>
                                <img src={relatedImg4} alt={t('altText4')} />
                                <p>{t('text4')}</p>
                            </Link>
                        </div>
                        <div className="article-item">
                            <Link to='/noticia5'>
                                <img src={relatedImg5} alt={t('altText5')} />
                                <p>{t('text5')}</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
