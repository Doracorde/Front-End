import React from 'react';
import './pagdireita.css';
import Logo from '../../assets/img/Vector.png';
import { useTranslation } from 'react-i18next';

export default function PagDireita() {
  const { t } = useTranslation();

  return (
    <div className="Pagdireito">
      <div className="pay-container">
        <div className="pay-box">
          <div className='plano'>
            <div className='logo-doracorde'>
              <div className="dora-logo">
                <img src={Logo} alt="Logo da Doracordes" />
              </div>
            </div>
            <div className="tipo-plano">
              <p className="nome-plano">{t('Plano Banda')}</p>
              <p className="valor-plano">{t('30R$')}</p>
            </div>
          </div>

          <div className='cupons'>
            <p>{t('Cupons')}</p>
            <p className="add-cupom">{t('Adicionar')}</p>
          </div>

          <div className="q-branco">
            <p>{t('Detalhes de Pagamento')}</p>
            <hr />

            <div className="container-o">
              <p className="ordem">{t('Ordem')}</p>
              <p className="ordem">{t('30R$')}</p>
            </div>
            <hr />

            <div className="container-o">
              <p className="total">{t('Total')}</p>
              <p className="total">{t('30R$')}</p>
            </div>
          </div>

          <button className="bt-finalizar">{t('Finalizar Compra')}</button>
        </div>
      </div>
    </div>
  );
}
