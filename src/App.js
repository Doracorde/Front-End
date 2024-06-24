import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header/header';
import Footer from './components/footer';
import { useTranslation } from 'react-i18next';
import './i18n';
// import Harmonia from './components/harmonia';
// import Logos from './components/logos';
// import Aprenda from './components/aprenda';
import Home from './Pages/Home/Home';
import Instrumentos from './Pages/Instrumentos/Instrumentos';
import Planos from './Pages/Planos/Planos';
import Depoimentos from './Pages/Depoimentos/Depoimentos';
import Sobre from './Pages/Sobre/Sobre';
import Blog from './Pages/blog/Blog';
import Dashdora from './Pages/Dashdora/Dashdora';
import FaleConosco from './Pages/FaleConosco/Faq';
import Sons from './Pages/Sons/Sons';
import Perfil from './Pages/Perfil/Perfil'
import Praticar from './Pages/Praticar/Praticar'
import Exercicio1 from './Pages/Dashdora/Exercicio1/Exercicio1'
import Login from './Pages/login/login'
import Cadastro from './Pages/Cadastro/Cadastro';
import Confirmarcadastro from './Pages/Confirmar-cadastro/Confirmar';
import Confirmar2 from './Pages/Confirmar2/Confirmar2';
import Esqueceusenha from './Pages/login/Esqueceu-senha/Esqueceu-senha';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/instrumentos" element={<Instrumentos />} />
          <Route path="/planos" element={<Planos />} />
          <Route path="/depoimentos" element={<Depoimentos />} />
          <Route path="/sobre" Component={Sobre} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/dashdora" element={<Dashdora />} />
          <Route path="/faq" Component={FaleConosco} />
          <Route path="/sons" element={<Sons />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/praticar" element={<Praticar />} />
          <Route path="/exercicio1" element={<Exercicio1/>}/>
          <Route path="/instrumentos" element={<Instrumentos/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path="/confirmar" element={<Confirmarcadastro/>}/>
          <Route path="/confirmar2" element={<Confirmar2/>}/>
          <Route path="/esqueceusenha" element={<Esqueceusenha />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;