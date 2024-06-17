import React from 'react';
import aprendalogo from '../../assets/img/aprenda.png';
import './aprenda.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../i18n';

export default function Aprenda() {
  const { t } = useTranslation();

  return (
    <section className="aprenda">
      <section className="music-learning-section">
        <aside className='cabecalho-aprenda'>
          <aside className='titulo-aprenda'>
            <h2>{t('Aprenda e Melhore Suas Habilidades')}</h2>
          </aside>
          <p>{t('Prepare-se para uma experiência única e enriquecedora no mundo da música.')}</p>
          <button className="discover-more-btn">
            <Link to="/dashdora">{t('Descubra Mais')}</Link>
          </button>
        </aside>
        <aside className="image-content2">
          <img src={aprendalogo} alt={t('Músicos tocando instrumentos')} />
        </aside>
      </section>
    </section>
  );
}
