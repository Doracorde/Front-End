import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/header';
import Footer from './components/footer';
// import Harmonia from './components/harmonia';
// import Logos from './components/logos';
// import Aprenda from './components/aprenda';
import Home from './Pages/Home/Home';
<<<<<<< HEAD
import Instrumentos from './Pages/Instrumentos/Instrumentos';
import Planos from './Pages/Planos/Planos';
import Depoimentos from './Pages/Depoimentos/Depoimentos';
import Sobre from './Pages/Sobre/Sobre';
import Blog from './Pages/blog/Blog';
=======
import FaleConosco from './Pages/FaleConosco/Faq';
>>>>>>> d41f92e33f159331f4d907447955349ed100162b

function App() {
  return (
<<<<<<< HEAD
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/instrumentos" element={<Instrumentos />} />
          <Route path="/planos" element={<Planos />} />
          <Route path="/depoimentos" element={<Depoimentos />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
=======
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/faq" Component={FaleConosco} />
      </Routes>
    </BrowserRouter>
    // <>
    // <div className="fundo">
    //  < Header />
    //  < Harmonia/>
    //  </div>
    //  < Logos/>
    //  < Aprenda/>
    //  <br/>
    //   <h1 style={{fontSize: "41px", marginLeft: "600px", fontFamily: "Urbanist"}}>Instrumentos Musicais</h1>
    //     <p style={{fontSize: "15px", marginLeft: "632px", fontFamily: "Urbanist"}}>Confira alguns dos instrumentos que ensinamos!</p>
    //  < Instrumentos/>
    // </>
>>>>>>> d41f92e33f159331f4d907447955349ed100162b
  );
}

export default App;
