import React from 'react';
import Logo from '../../assets/img/Logo.png';
import Loguinho from '../../assets/img/loguinho.png';
import './Confirmar2.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



import '../../i18n' // Arquivo de configuração do i18n

function Conteudocentral() {
    const { t } = useTranslation();

    return (
        <>
            <div className='logo-confirmar2'>
                <img src={Logo} alt='Logo' />
            </div>

            <div className='confirmar2-informations'>
                <h3>{t('Confirme seu endereço de e-mail')}</h3>
                <h5>{t('Verifique seu e-mail para saber a próxima etapa de inscrição.')}</h5>
                <div className='confirmar2-botaoinscreverse'>
                    <Link to='/faq'>
                        <button>{t('CONTATO COM O SUPORTE')}</button>
                    </Link>
                </div>

                <div className='confirmar2-botaovolteaologin'>
                    <Link to='/perfil'>
                        <button>{t('CONTINUAR')}</button>
                    </Link>
                </div>

                <div className='confirmar2-botaovoltar'>
                    <Link to='/login'>
                        <button>{t('VOLTE AO LOGIN')}</button>
                    </Link>
                </div>
                <div className='confirmar2-direitos'>
                    {t('Termos e Condições')} • {t('Política de Privacidade')}
                </div>
            </div>
        </>
    );
}

function Sidecontent() {
    return (
        <div className='confirmar2-cadastro-conteudo-direita'>
            <div className='confirmar2-cadastro-logo-inferior-direito'>
                <img src={Loguinho} alt='Logo 2' />
            </div>
        </div>
    );
}

export default function Confirmar2() {
    return (
        <>
            <Conteudocentral />
            <Sidecontent />
        </>
    );
}
