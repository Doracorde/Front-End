import React from 'react';
import './pagConfirmacao.css';
import Check from '../../src/imagem/Check.png';
import { useTranslation } from 'react-i18next';

export default function Confirmacao() {
  const { t } = useTranslation();

  return (
    <>
      <div className="all">
        <div className="amarelo-confirmacao">
          <div className="branco-confirmacao">
            <div>
              <img src={Check} alt='' />
              <CCheck />
              <h1>{t('Obrigado!')}</h1>
            </div>

            <div>
              <p>{t('Volte ao inicio para atualizar sua Conta')}</p>
              <button className='bt-inicio'>{t('Inicio')}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function CCheck() {
  return (
    <div>
      <img className='check' src={Check} alt='simbolo de confirmação' />
    </div>
  );
}
