import './pagConfirmacao.css'
import '../../src/imagem/Check.png'
import Check from "../../src/imagem/Check.png"

export default function Confirmacao (){
    return (
    <>
        <div className="all">
        
            <div className="amarelo-confirmacao">
                <div className="branco-confirmacao">
                    <div>
                        <img src='../../src/imagem/Check.png' alt='' />
                        <CCheck/>
                        <h1>Obrigado!</h1>
                    </div>

                    <div>
                        <p>Volte ao inicio para atualizar sua Conta</p>
                        <button className='bt-inicio'>Inicio</button>
                    </div>
                    
                </div>

            </div>

        </div>

    </>

    );
}

export function CCheck (){
    return(
        <div>
            <img className='check' src={Check} alt='simbolo de confirmação'/>
        </div>
    );
}