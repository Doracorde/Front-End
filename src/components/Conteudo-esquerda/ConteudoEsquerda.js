import './style.css'
import Logo from '../../imagens/Logo.png'
import setaLogo from '../../assets/img/setalogin.png'
export function Conteudo_esquerda(){
    return(
       <>
            <div className='logo'>
                <img src={Logo}/>       
            </div>

            <div className='informations'>

                <h3>Inscreva-se</h3>

                <div className='input1'>
                    <input type='text' placeholder='    Nome'></input>
                    <input type='text' placeholder='    Sobrenome'></input>
                </div>

                <div className='input2'>
                    <input type='text' placeholder='    Endereço de Email'></input>
                </div>

                <div className='input2'>
                    <input type='text' placeholder='    Nome da compania'></input>
                </div>

                <div className='input1'>
                    <input type='text' placeholder='    País'></input>
                    <input type='password' placeholder='    Número de telefone'></input>
                </div>

            
                <div className='botaoinscreverse'>
                    <button>INSCREVER-SE</button>
                </div>

                <div className='botaovolteaologin'>
                    <button>VOLTE AO LOGIN</button>
                </div>
               
                <div className='direitos'>
                     Termos e Condições • Política de Privacidade
                </div>
            </div>
       </> 
    )
}