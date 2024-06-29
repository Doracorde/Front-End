import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/img/Logo.png';
import './Esqueceu-senha.css';
import { useTranslation } from 'react-i18next';
import '../../../i18n'
function ForgotPassword() {
    const { t } = useTranslation();

    return (
        <div className='forgot-password-container'>
            <div className='forgot-password-logo'>
                <img src={Logo} alt='Logo' />
            </div>
            <div className='forgot-password-form'>
                <h3>{t('Redefinir sua senha')}</h3>
                <p>{t('Digite seu endereço de e-mail registrado para redefinir a senha')}</p>
                <input type='email' placeholder={t('Endereço de Email *')} />
                <Link to='/confirmar2'>
                    <button className='forgot-password-button'>{t('PRÓXIMO')}</button>
                </Link>
                <Link to='/login'>
                    <button className='forgot-password-back-button'>{t('VOLTE AO LOGIN')}</button>
                </Link>
            </div>
            <div className='forgot-password-footer'>
                <span>{t('Termos e Condições')}</span> • <span>{t('Política de Privacidade')}</span>
            </div>
        </div>
    );
}

export default ForgotPassword;
