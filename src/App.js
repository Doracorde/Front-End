// import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Harmonia from './components/harmonia';
import Logos from './components/logos';
import Aprenda from './components/aprenda';
import Instrumentos from './components/instrumentos';

function App() {

  return (
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
    </>
  );
}

export default App

