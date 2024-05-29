import './style.css'
import Logo from '../../../img/logo3.png'
import setalogin from '../../../img/setalogin.png'
export default function Conteudo_esquerda(){
    return(
       <>
            <div className='logo'>
                <img src={Logo}/>       
            </div>

            <div className='informations'>

                <h3>Entre na sua Conta!</h3>

                <div className='inputemail'>
                    <input type='text' placeholder='Endereço de Email*'></input>
                </div>

                <div className='inputsenha'>
                    <input type='password' placeholder='Senha*'></input>
                </div>

                <div className='botaologin'>
                    <button>Login</button>
                    <img src={setalogin}/>
                    
                </div>

                <div className='forgotpassword'>
                    <h5><a href='#'>Esqueceu a Senha?</a></h5>
                </div>

                <div className='createnewaccount'>
                    <button>CRIAR NOVA CONTA</button>
                </div>
               
                <div className='direitos'>
                     Termos e Condições • Política de Privacidade
                </div>
            </div>
       </> 
    )
}