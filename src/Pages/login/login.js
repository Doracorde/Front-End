import React, { useState } from 'react';
import './login.css';
import imagemlogin from '../../assets/img/imagem_login.png';
import Logo from '../../assets/img/Logo.png';
import setalogin from '../../assets/img/setalogin.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../i18n';

function ConteudoDireito() {
    return (
        <div className='conteudo-direita'>
            <div className='imagem-login'>
                <img src={imagemlogin} alt='Imagem de Login' />
            </div>
        </div>
    );
}

function ConteudoEsquerda({ handleLogin }) {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin({ email, password });
    };

    return (
        <div className='conteudo-esquerda'>
            <div className='logo-login'>
                <Link to="/">
                    <img src={Logo} alt='Logo' />
                </Link>
            </div>
            <div className='informacoes'>
                <h3>{t('Entre na sua Conta!')}</h3>
                <form onSubmit={handleSubmit}>
                    <div className='input-email'>
                        <input
                            type='text'
                            placeholder={t('Endereço de Email*')}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            aria-label={t('Endereço de Email')}
                        />
                    </div>
                    <div className='input-senha'>
                        <input
                            type='password'
                            placeholder={t('Senha*')}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            aria-label={t('Senha')}
                        />
                    </div>
                    <div className='botao-login'>
                        <button type='submit'>
                            {t('LOGIN')}
                            <img src={setalogin} alt='Seta de Login' />
                        </button>
                    </div>
                </form>
                <div className='forgot-password'>
                    <Link to='/esqueceusenha'>
                        <h5>{t('Esqueceu sua senha?')}</h5>
                    </Link>
                </div>
                <div className='criar-nova-conta'>
                    <Link to="/Cadastro">
                        <button>{t('CRIAR NOVA CONTA')}</button>
                    </Link>
                </div>
                <div className='direitos'>
                    {t('Termos e Condições')} • {t('Política de Privacidade')}
                </div>
            </div>
        </div>
    );
}

function Login() {
    const handleLogin = (data) => {
        
        console.log('Login data:', data);
       
    };

    return (
        <div className='login-container'>
            <ConteudoEsquerda handleLogin={handleLogin} />
            <ConteudoDireito />
        </div>
    );
}

export default Login;
