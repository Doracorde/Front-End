import React, { useState } from 'react';
import './Cadastro.css';
import imagemLogo2 from '../../assets/img/logo2.png';
import Logo from '../../assets/img/Logo.png';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../utils/axios';
import { useTranslation } from 'react-i18next';
import '../../i18n';

function ConteudoDireito() {
    const { t } = useTranslation();
    return (
        <div className='cadastro-conteudo-direita'>
            <div className='cadastro-logo-inferior-direito'>
                <img src={imagemLogo2} alt='Logo 2' />
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
                email, senha, name:nome
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
                <img src={Logo} alt='Logo' />
            </div>
            <div className='cadastro-informations'>
                <h3>{t('Inscreva-se')}</h3>
                <form onSubmit={handleSubmit}>
                    <div className='cadastro-input-grupo'>
                        <input
                            type='text'
                            placeholder={t('Nome')}
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            aria-label={t('Nome')}
                        />
                        <input
                            type='text'
                            placeholder={t('Sobrenome')}
                            value={sobrenome}
                            onChange={(e) => setSobrenome(e.target.value)}
                            aria-label={t('Sobrenome')}
                        />
                    </div>
                    <div className='cadastro-input'>
                        <input
                            type='text'
                            placeholder={t('Endereço de Email')}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            aria-label={t('Endereço de Email')}
                        />
                    </div>
                    <div className='cadastro-input'>
                        <input
                            type='password'
                            placeholder={t('Senha')}
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            aria-label={t('Senha')}
                        />
                    </div>
                    <div className='cadastro-input-grupo'>
                        <input
                            type='text'
                            placeholder={t('País')}
                            value={pais}
                            onChange={(e) => setPais(e.target.value)}
                            aria-label={t('País')}
                        />
                        <input
                            type='text'
                            placeholder={t('Número de telefone')}
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                            aria-label={t('Número de telefone')}
                        />
                    </div>
                    <div className='cadastro-botao'>
                        <button type='submit'>{t('INSCREVER-SE')}</button>
                    </div>
                </form>
                <div className='cadastro-botao'>
                    <button onClick={() => window.location.href = '/login'}>{t('VOLTE AO LOGIN')}</button>
                </div>
                <div className='cadastro-direitos'>
                    {t('Termos e Condições • Política de Privacidade')}
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