import React, { useState } from 'react';
import './Cadastro.css';
import Loguinho from '../../assets/img/loguinho.png';
import Logo from '../../assets/img/Logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import api from '../../utils/axios';


import '../../i18n'

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
    const { t } = useTranslation();
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
                <h3>{t('Inscreva-se')}</h3>
                <form onSubmit={handleSubmit}>
                    <div className='cadastro-input-grupo'>
                        <label className='label-cadastro' htmlFor="nome">{t('Nome')}
                            <input className='input-cadastro'
                                type='text'
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                aria-label={t('Nome')}
                                alt={t('nome')}
                                id='nome' />
                        </label>

                        <label className='label-cadastro' htmlFor="sobrenome">{t('Sobrenome')}
                            <input className='input-cadastro'
                                type='text'
                                value={sobrenome}
                                onChange={(e) => setSobrenome(e.target.value)}
                                aria-label={t('Sobrenome')}
                                alt={t('sobrenome')}
                                id='sobrenome' />
                        </label>
                    </div>
                    <div className='cadastro-input'>
                        <label htmlFor="email">{t('Email')}
                            <input
                                type='text'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                aria-label={t('Endereço de Email')}
                                alt={t('endereço de email')}
                                id='email' />
                        </label>
                    </div>
                    <div className='cadastro-input'>
                        <label htmlFor="senha">{t('Senha')}
                            <input
                                type='password'
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                aria-label={t('Senha')}
                                alt={t('senha')}
                                id='senha' />
                        </label>
                    </div>

                    <div className='cadastro-botao'>
                        <button onClick={() => window.location.href = '/perfil'} type='submit'>{t('INSCREVER-SE')}</button>
                    </div>
                    <div className='cadastro-botao'>
                        <button onClick={() => window.location.href = '/login'}>{t('VOLTE AO LOGIN')}</button>
                    </div>

                    <div className='cadastro-direitos'>
                        {t('Termos e Condições')} • {t('Política de Privacidade')}
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
