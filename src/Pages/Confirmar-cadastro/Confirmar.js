import React from 'react';
import logo3 from '../../assets/img/logo3.png';
import './Confirmar.css'
import { Link, useNavigate } from 'react-router-dom';

export default function Confirmar() {
    return (
        <>
            <div className='confirmar-container'>
                <div className='confirmar-head'>
                    <img src={logo3} alt='Logo'/>
                </div>

                <div className='confirmar-titulo'>
                    <h2>Confirmação, antes de começarmos...</h2>
                </div>
                <div className='confirmar-texto1'>
                    <p>Obrigado por se cadastrar no Doracorde, para finalizar seu cadastro por favor confirme seu e-mail clicando no botão abaixo:</p>
                </div>
                <Link to='/confirmar2'>
                <button className='confirmar-botao'>CONFIRME SEU EMAIL</button>
                </Link>
                <div className='confirmar-texto2'>
                    <p>Não se inscreveu no Doracorde? Nos informe.</p>
                </div>
                <div className='confirmar-texto3'>
                    <p>Se você estiver tendo problemas com o botão acima, copie e cole o URL abaixo em seu navegador da web..</p>
                </div>
                <div className='confirmar-texto4'>
                    <a href='https://app.domain.com/auth/confirm-email/7ddc6cb3-0cd1-40d5-8e62-39b5bac44841'>https://app.domain.com/auth/confirm-email/7ddc6cb3-0cd1-40d5-8e62-39b5bac44841</a>
                </div>
            </div>

            <div className='confirmar-direitos'>
                E-mail enviado por Doracorde
            </div>
            <div className='confirmar-direitos'>
                <span>Termos e Condições • Política de Privacidade</span>
            </div>
        </>
    );
}
