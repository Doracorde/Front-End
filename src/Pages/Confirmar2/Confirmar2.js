import Logo from '../../assets/img/Logo.png';
import imagemlogo2 from '../../assets/img/logo2.png';
import './Confirmar2.css';
import { Link } from 'react-router-dom';

function Conteudocentral() {
    return (
        <>
            <div className='logo-confirmar2'>
                <img src={Logo} alt='Logo' />
            </div>

            <div className='confirmar2-informations'>
                <h3>Confirme seu endereço de e-mail</h3>
                <h5>Verifique seu e-mail para saber a próxima etapa de inscrição.</h5>
                <div className='confirmar2-botaoinscreverse'>
                    <Link to='/faq'>
                    <button>CONTATO COM O SUPORTE</button>
                    </Link>
                </div>

                <div className='confirmar2-botaovolteaologin'>
                    <Link to='/perfil'>
                        <button>CONTINUAR</button>
                    </Link>
                </div>

                <div className='confirmar2-botaovoltar'>
                    <Link to='/login'>
                        <button>VOLTE AO LOGIN</button>
                    </Link>
                </div>
                <div className='confirmar2-direitos'>
                    Termos e Condições • Política de Privacidade
                </div>
            </div>
        </>
    );
}

function Sidecontent() {
    return (
        <div className='confirmar2-cadastro-conteudo-direita'>
            <div className='confirmar2-cadastro-logo-inferior-direito'>
                <img src={imagemlogo2} alt='Logo 2' />
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