import Logo from "../../assets/img/Vector.png"
import './pagdireita.css'

export default function PagDireita() {
    return (
        <div className="Pagdireito">
            <div className="pay-container">
                <div className="pay-box">
                    <div className='plano'>
                        <div className='logo-doracorde'>
                            <div class="dora-logo">
                            <img src={Logo} alt="d do logo da doracordes" />
                            </div>
                        </div>
                        <div class="tipo-plano">
                            <p className="nome-plano">Plano Banda</p>
                            <p className="valor-plano">30R$</p>
                        </div>
                    </div>

                    <div className='cupons'>
                        <p>Cupons</p>
                        <p className="add-cupom">Adicionar</p>
                    </div>

                    <div class="q-branco">
                        <p>Detalhes de Pagamento</p>
                        <hr />

                        <div class="container-o">
                            <p className="ordem">Ordem</p>
                            <p className="ordem">30R$</p>
                        </div>
                        <hr />

                        <div class="container-o">
                            <p className="total">Total</p>
                            <p className="total">30R$</p>
                        </div>
                    </div>

                    <button className="bt-finalizar">Finalizar Compra</button>
                </div>

            </div>
        </div>
    )
}