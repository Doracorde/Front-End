import React, { useState } from 'react';
import './Cadastro.css';
import imagemLogo2 from '../../assets/img/logo2.png';
import Logo from '../../assets/img/Logo.png';
import { Link, useNavigate } from 'react-router-dom';


function ConteudoDireito() {
    return (
        <div className='cadastro-conteudo-direita'>
            <div className='cadastro-logo-inferior-direito'>
                <img src={imagemLogo2} alt='Logo 2' />
            </div>
        </div>
    );
}

function ConteudoEsquerda({ handleCadastro }) {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [companhia, setCompanhia] = useState('');
    const [pais, setPais] = useState('');
    const [telefone, setTelefone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleCadastro({ nome, sobrenome, email, companhia, pais, telefone });
    };

    return (
        <div className='cadastro-conteudo-esquerda'>
            <div className='cadastro-logo'>
                <img src={Logo} alt='Logo' />
            </div>
            <div className='cadastro-informations'>
                <h3>Inscreva-se</h3>
                <form onSubmit={handleSubmit}>
                    <div className='cadastro-input-grupo'>
                        <input
                            type='text'
                            placeholder='Nome'
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            aria-label='Nome'
                        />
                        <input
                            type='text'
                            placeholder='Sobrenome'
                            value={sobrenome}
                            onChange={(e) => setSobrenome(e.target.value)}
                            aria-label='Sobrenome'
                        />
                    </div>
                    <div className='cadastro-input'>
                        <input
                            type='text'
                            placeholder='Endereço de Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            aria-label='Endereço de Email'
                        />
                    </div>
                    <div className='cadastro-input'>
                        <input
                            type='text'
                            placeholder='Nome da companhia'
                            value={companhia}
                            onChange={(e) => setCompanhia(e.target.value)}
                            aria-label='Nome da companhia'
                        />
                    </div>
                    <div className='cadastro-input-grupo'>
                        <input
                            type='text'
                            placeholder='País'
                            value={pais}
                            onChange={(e) => setPais(e.target.value)}
                            aria-label='País'
                        />
                        <input
                            type='text'
                            placeholder='Número de telefone'
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                            aria-label='Número de telefone'
                        />
                    </div>
                    <div className='cadastro-botao'>
                        <Link to='/confirmar'>
                        <button type='submit'>INSCREVER-SE</button>
                        </Link>
                    </div>
                </form>
                <div className='cadastro-botao'>
                    <button onClick={() => window.location.href = '/login'}>VOLTE AO LOGIN</button>
                </div>
                <div className='cadastro-direitos'>
                    Termos e Condições • Política de Privacidade
                </div>
            </div>
        </div>
    );
}

function Cadastro() {
    const handleCadastro = (data) => {
        console.log('Cadastro data:', data);
        // Aqui você pode usar fetch ou axios para enviar os dados para o back-end
    };

    return (
        <div className='cadastro-container'>
            <ConteudoEsquerda handleCadastro={handleCadastro} />
            <ConteudoDireito />
        </div>
    );
}

export default Cadastro;
