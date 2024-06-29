import React from 'react';
import { MdOutlinePix } from "react-icons/md";
import { CiCreditCard1, CiBarcode } from "react-icons/ci";
import './pagesquerda.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../i18n';

export default function PagEsquerda() {
    const { t } = useTranslation();

    return (
        <div className="conteudo-esquerda">
            <div className="titulo-principal">
                <h3>{t('Insira as informações de pagamento')}</h3>
            </div>
            {}
            <div className="metodo-de-pag">
                <div>
                    <button className="Credito"><CiCreditCard1 />{t('Cartão')}</button>
                </div>
                <div>
                    <button className="PIX"><MdOutlinePix /> {t('PIX')}</button>
                </div>
                <div>
                    <button className="Boleto"><CiBarcode />{t('Boleto')}</button>
                </div>
                <div>
                    <button className="tres-pontos">...</button>
                </div>
            </div>
            {}
            <div className="formulario">
                <form action="">
                    <div className="numero-form">
                        <label htmlFor="numero-cartao">{t('Número do cartão')}</label>
                        <input className="input-m" type="number" id='numero-cartao' name='numero' placeholder="1234 1234 1234 1234" required />
                    </div>
                    <div className="termo-cvc">
                        <div className="termo">
                            <label htmlFor="termo">{t('Termo')}</label>
                            <input className="input-pay" type="number" id='termo' name='termo' placeholder="MM / YY" required />
                        </div>
                        <div className="cvc">
                            <label htmlFor="cvc">{t('CVC')}</label>
                            <input className="input-pay" type="number" id='cvc' name='cvc' placeholder="CVC" required />
                        </div>
                    </div>
                    {/* fim div termo e cvc */}
                    <div className="email">
                        <label htmlFor="email">{t('E-mail')}</label>
                        <input className="input-m" type="email" id="email" name="email" placeholder="Seuemail@gmail.com" required />
                    </div>
                    <div>
                        <input type="checkbox" id="termos" required />
                        <label htmlFor="termos">{t('Li e concordo com os termos da Políticas de Privacidade')}</label>
                    </div>
                </form>
            </div>
            {}
        </div>
    );
}
