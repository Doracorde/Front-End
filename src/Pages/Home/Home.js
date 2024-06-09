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