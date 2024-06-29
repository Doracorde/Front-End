import React from 'react';
import './footer.css';
import FooterNav from './NavFooter/FooterNav';
import { useTranslation } from 'react-i18next';
import '../../i18n';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <footer className='rodape'>
        <section className='content-rodape'>
          <aside className='desc-rodape'>
            <aside className='rodape-logo'>
              <span className='logo-branco'></span>
            </aside>
            <aside className='texto-rodape'>
              <h6>{t('Harmonia em todos os sentidos.')}</h6>
            </aside>
          </aside>

          <FooterNav
            titulo={t('Compania')}
            nomeInfo={[
              t('Sobre Nós'),
            ]}
            urls={[
              "/sobre",
            ]}
          />
          <FooterNav
            titulo={t('Aulas')}
            nomeInfo={[
              t('Instrumentos'),
              t('Teoria Musical'),
            ]}
            urls={[
              "/instrumentos",
              "/teoria-musical",
            ]}
            
          />
          <FooterNav
            titulo={t('Suporte')}
            nomeInfo={[
              t('FAQ'),
            ]}
            urls={[
              "/faq",
            ]}
          />
          <FooterNav
            titulo={t('Contato')}
            nomeInfo={[
              "contatodoracorde@gmail.com",
            ]}
            urls={[
              "mailto:contatodoracorde@gmail.com",
            ]}
          />
        </section>

        <hr></hr>
        <section className='direitos-autorais'>
          <h6>{t('© 2024 Doracorde. Todos Direitos Reservados.')}</h6>
        </section>
      </footer>
    </>
  );
}
