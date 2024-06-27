import React, { useState } from 'react';
import './login.css';
import imagemlogin from '../../assets/img/imagem_login.png';
import Logo from '../../assets/img/Logo.png';
import setalogin from '../../assets/img/setalogin.png';
import { Link, useNavigate } from 'react-router-dom';


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
            <div className='informacoes-login'>
                <h3>Entre na sua Conta!</h3>
                <form onSubmit={handleSubmit}>
                    <div className='input-email'>
                        <input
                            type='text'
                            placeholder='Endereço de Email*'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            aria-label='Endereço de Email'
                        />
                    </div>
                    <div className='input-senha'>
                        <input
                            type='password'
                            placeholder='Senha*'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            aria-label='Senha'
                        />
                    </div>
                    <div className='botao-login'>
                        <Link to="/perfil">
                        <button type='submit'>
                            LOGIN
                            <img src={setalogin} alt='Seta de Login' />
                        </button>
                        </Link>
                    </div>
                </form>
                <div className='forgot-password'>
                    <Link to='/esqueceusenha'>
                    <h5>Esqueceu sua senha?</h5>
                    </Link>
                </div>
                <div className='criar-nova-conta'>
                    <Link to="/Cadastro">
                    <button>CRIAR NOVA CONTA</button>
                    </Link>
                </div>
                <div className='direitos'>
                    Termos e Condições • Política de Privacidade
                </div>
            </div>
        </div>
    );
}

function Login() {
    const handleLogin = (data) => {
        // enviar dados para o back-end
        console.log('Login data:', data);
        //  usar fetch   para enviar os dados para o back-end
    };

    return (
        <div className='login-container'>
            <ConteudoEsquerda handleLogin={handleLogin} />
            <ConteudoDireito />
        </div>
    );
}

export default Login;
