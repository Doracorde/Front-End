import React from 'react';
import './pagesquerda.css';
import { MdOutlinePix } from "react-icons/md";
import { CiCreditCard1 } from "react-icons/ci";
import { CiBarcode } from "react-icons/ci";
import { useTranslation } from 'react-i18next';

export default function PagEsquerda() {
  const { t } = useTranslation();

  return (
    <div className="conteudo-esquerda-pag">
      <div className="titulo-principal">
        <h3>{t('Insira as informações de pagamento')}</h3>
      </div>

      <div className="metodo-de-pag">
        <div>
          <button className="Credito"><CiCreditCard1 /> {t('Cartão')}</button>
        </div>
        <div>
          <button className="PIX"><MdOutlinePix /> {t('PIX')}</button>
        </div>
        <div>
          <button className="Boleto"><CiBarcode /> {t('Boleto')}</button>
        </div>
        <div>
          <button className="tres-pontos">{t('...')}</button>
        </div>
      </div>

      <div className="formulario">
        <form action="">
          <div className="numero-form">
            <label htmlFor="numero-cartao">{t('Número do cartão')}</label>
            <input className="input-m" type="number" id='numero-cartao' name='numero' placeholder="1234 1234 1234 1234" required={true}></input>
          </div>
          <div className="termo-cvc">
            <div className="termo">
              <label htmlFor="termo">{t('Termo')}</label>
              <input className="input-pay" type="number" id='termo' name='termo' placeholder="MM / YY" required={true}></input>
            </div>
            <div className="cvc">
              <label htmlFor="cvc">{t('CVC')}</label>
              <input className="input-pay" type="number" id='cvc' name='cvc' placeholder="CVC" required={true}></input>
            </div>
          </div>
          <div className="email">
            <label htmlFor="email">{t('E-mail')}</label>
            <input className="input-m" type="email" id="email" name="email" placeholder={t('Seuemail@gmail.com')} required={true} />
          </div>
          <div className='container-check'>
            <input type="checkbox" required={true}></input>
            <label htmlFor="">{t('Li e concordo com os termos da Políticas de Privacidade')}</label>
          </div>
        </form>
      </div>
    </div>
  );
}
