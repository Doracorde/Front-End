import Aprenda from '../../components/aprenda'
import Harmonia from '../../components/harmonia'
import Header from '../../components/header'
import Instrumentos from '../../components/instrumentos'
import Logos from '../../components/logos'
import Plano from '../../components/SessaoPlano/SessaoPlano'
import Depoimento from '../../components/SessaoDepoimentos/Depoimento'
import Redes from '../../components/SessaoSociais/Redes'
import Footer from '../../components/Footer/footer'




export default function Home(){
    return(
    <>
        < Header />      
        < Logos/>
        < Aprenda/>
        < Instrumentos/>
        <Plano/>
        <Depoimento/>
        <Redes/>
        <Footer/>
    </> 
    )
}