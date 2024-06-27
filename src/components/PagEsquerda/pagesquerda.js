import { MdOutlinePix } from "react-icons/md";
import { CiCreditCard1 } from "react-icons/ci";
import { CiBarcode } from "react-icons/ci";
import './pagesquerda.css'

export default function PagEsquerda() {
    return (
        <>
            <div className="conteudo-esquerda-pag">
                <div className="titulo-principal">
                    <h3>Insira as informações de pagamento</h3>
                </div>
                {/* fim div titulo principal */}
                <div className="metodo-de-pag">
                    <div>
                        <button className="Credito"><CiCreditCard1 />Cartão</button>
                    </div>
                    <div>
                        <button className="PIX"><MdOutlinePix /> PIX</button>
                    </div>
                    <div>
                        <button className="Boleto"><CiBarcode />Boleto</button>
                    </div>
                    <div>
                        <button className="tres-pontos">...</button>
                    </div>
                </div>
                {/* fim da div metodo pagamento */}
                <div className="formulario">
                    <form action="">
                        <div className="numero-form">
                            <label for="number">Número do cartão</label>
                            <input className="input-m" type="number" id='numero-cartao' name='numero' placeholder="1234 1234 1234 1234" required="true"></input>
                        </div>
                        <div className="termo-cvc">
                            <div className="termo">
                                <label for="">Termo</label>
                                <input className="input-pay" type="number" id='termo' name='' termo placeholder="MM / YY" required></input>
                            </div>
                            <div className="cvc">
                                <label for="">CVC</label>
                                <input className="input-pay" type="number" id='cvc' name='cvc' placeholder="CVC" required></input>
                            </div>
                        </div>
                        {/* fim div termo e cvc */}
                        <div className="email">
                            <label for="">E-mail</label>
                            <input className="input-m" type="email" id="email" name="email" placeholder="Seuemail@gmail.com" required />
                        </div>
                        <div>
                            <input type="checkbox" required></input>
                            <label for="">Li e concordo com os termos da Políticas de Privacidade</label>
                        </div>
                    </form>
                </div>
                {/* fim div formulario */}
            </div>
        </>
    )
}