import React, { useState } from 'react';
import './Cadastro.css';
import Loguinho from '../../assets/img/loguinho.png';
import Logo from '../../assets/img/Logo.png';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../utils/axios';



function ConteudoDireito() {
    return (
        <div className='cadastro-conteudo-direita'>
            <div className='cadastro-logo-inferior-direito'>
                <img src={Loguinho} alt='Logo 2' />
            </div>
        </div>
    );
}

function ConteudoEsquerda({ handleCadastro }) {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [pais, setPais] = useState('');
    const [telefone, setTelefone] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        handleCadastro({ nome, sobrenome, email, senha, pais, telefone });
        try {
            const infos = {
                email, senha, name: nome
            }
            const result = await api.post("usuario/cadastro", infos)
            console.log(result)

            navigate("/perfil")

        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className='cadastro-conteudo-esquerda'>
            <div className='cadastro-logo'>
                <img src={Logo} alt='Logo Doracorde' />
            </div>
            <div className='cadastro-informations'>
                <h3>Inscreva-se</h3>
                <form onSubmit={handleSubmit}>
                    <div className='cadastro-input-grupo'>
                        <label className='label-cadastro' for="nome">Nome 
                            <input className='input-cadastro'
                                type='text'
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                aria-label='Nome'
                                alt='nome'
                                id='nome' />
                        </label>

                        <label className='label-cadastro' for="sobrenome">Sobrenome
                            <input className='input-cadastro'
                                type='text'
                                value={sobrenome}
                                onChange={(e) => setSobrenome(e.target.value)}
                                aria-label='Sobrenome'
                                alt='sobrenome'
                                id='sobrenome' />
                        </label>
                    </div>
                    <div className='cadastro-input'>
                        <label for="email">Email
                            <input 
                                type='text'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                aria-label='Endereço de Email'
                                alt='endereço de email'
                                id='email' />
                        </label>
                    </div>
                    <div className='cadastro-input'>
                        <label for="senha">Senha
                            <input
                                type='password'
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                aria-label='Senha'
                                alt='senha' 
                                id='senha'/>
                        </label>
                    </div>

                    <div className='cadastro-botao'>

                        <button type='submit'>INSCREVER-SE</button>

                    </div>
                    <div className='cadastro-botao'>
                        <button onClick={() => window.location.href = '/login'}>VOLTE AO LOGIN</button>
                    </div>

                    <div className='cadastro-direitos'>
                        Termos e Condições • Política de Privacidade
                    </div>
                </form>


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
