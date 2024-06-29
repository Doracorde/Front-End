import React, { useState } from 'react';
import './style.css';
import Logo from '../../imagens/Logo.png';
import setaLogo from '../../assets/img/setalogin.png';
import { useTranslation } from 'react-i18next';
import '../../i18n';

export function Conteudo_esquerda() {
  const { t } = useTranslation();
  const [infos, setInfos] = useState({

  })

  return (
    <>
      <div className='logo'>
        <img src={Logo} alt="Logo" />
      </div>

      <div className='informations'>
        <h3>{t('Inscreva-se')}</h3>

        <div className='input1'>
          <input type='text' placeholder={`    ${t('Nome')}`} />
          <input type='text' placeholder={`    ${t('Sobrenome')}`} />
        </div>

        <div className='input2'>
          <input type='text' placeholder={`    ${t('Endereço de Email')}`} />
        </div>

        <div className='input2'>
          <input type='password' placeholder={`    ${t('Senha')}`} />
        </div>

        <div className='input1'>
          <input type='text' placeholder={`    ${t('País')}`} />
          <input type='text' placeholder={`    ${t('Número de telefone')}`} />
        </div>

        <div className='botaoinscreverse'>
          <button>{t('INSCREVER-SE')}</button>
        </div>

        <div className='botaovolteaologin'>
          <button>{t('VOLTE AO LOGIN')}</button>
        </div>

        <div className='direitos'>
          {t('Termos e Condições')} • {t('Política de Privacidade')}
        </div>
      </div>
    </>
  );
}