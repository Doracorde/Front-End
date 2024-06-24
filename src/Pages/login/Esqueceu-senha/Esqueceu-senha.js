import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/img/Logo.png';
import './Esqueceu-senha.css';

function ForgotPassword() {
    return (
        <div className='forgot-password-container'>
            <div className='forgot-password-logo'>
                <img src={Logo} alt='Logo' />
            </div>
            <div className='forgot-password-form'>
                <h3>Redefinir sua senha</h3>
                <p>Digite seu endereço de e-mail registrado para redefinir a senha</p>
                <input type='email' placeholder='Endereço de Email *' />
                <Link to='/confirmar2'>
                <button className='forgot-password-button'>PRÓXIMO</button>
                </Link>
                <Link to='/login'>
                    <button className='forgot-password-back-button'>VOLTE AO LOGIN</button>
                </Link>
            </div>
            <div className='forgot-password-footer'>
                <span>Termos e Condições</span> • <span>Política de Privacidade</span>
            </div>
        </div>
    );
}

export default ForgotPassword;
