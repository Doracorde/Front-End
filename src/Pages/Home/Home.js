import Aprenda from '../../components/Aprenda/aprenda'
import Harmonia from '../../components/Harmonia/harmonia'
import Header from '../../components/Header/header'
import Instrumentos from '../../components/Instrumentos/instrumentos'
import Logos from '../../components/Logo/logos'
import Plano from '../../components/SessaoPlano/SessaoPlano'
import Depoimento from '../../components/SessaoDepoimentos/Depoimento'
import Redes from '../../components/SessaoSociais/Redes'
import Footer from '../../components/Footer/footer'


export default function Home(){
    return(
    <>
        <div className="fundo">
            < Header />
            < Harmonia/>
        </div>
            < Logos/>
            < Aprenda/>
        <br/>
        <h1 style={{fontSize: "41px", marginLeft: "600px", fontFamily: "Urbanist"}}>Instrumentos Musicais</h1>
            <p style={{fontSize: "15px", marginLeft: "632px", fontFamily: "Urbanist"}}>Confira alguns dos instrumentos que ensinamos!</p>
        < Instrumentos/>
        <Plano/>
        <Depoimento/>
        <Redes/>
        <Footer/>
    </> 
    )
}