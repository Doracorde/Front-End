import Aprenda from '../../components/aprenda'
import Harmonia from '../../components/harmonia'
import Header from '../../components/header'
import Instrumentos from '../../components/instrumentos'
import Logos from '../../components/logos'
import Plano from '../../components/SessaoPlano/SessaoPlano'
import Depoimento from '../../components/SessaoDepoimentos/Depoimento'
import Redes from '../../components/SessaoSociais/Redes'
import Footer from '../../components/Footer/footer'
import Valores from '../../components/ValoresDoracorde/ValoresDoracorde'




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
        <Valores />
        <Redes/>
        <Footer/>
    </> 
    )
}