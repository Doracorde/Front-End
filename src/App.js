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

import Perfil from './Pages/Perfil/Perfil';
import Praticar from './Pages/Praticar/Praticar';
import Trilha1Exercicio1 from './Pages/Dashdora/Exercicio1/Exercicio1';

import Perfil from './Pages/Perfil/Perfil'
import Praticar from './Pages/Praticar/Praticar'

import Exercicio1 from './Pages/Dashdora/Exercicio1/Exercicio1';

import Trilha2Exercicio1 from './Pages/Dashdora/Trilha2-exercicio1/Acorde-exercicio.jsx';
import Trilha2Exercicio2 from './Pages/Dashdora/Trilha2-exercicio2/Acorde-exercicio2.jsx'; 
import Trilha2Exercicio3 from './Pages/Dashdora/Trilha2-exercicio3/Acorde-exercicio3.jsx'; 
import Pagamento from './Pages/Paymethots/Paymethods.js'

import Exercicio1 from './Pages/Dashdora/Exercicio1/Exercicio1'
import Exercicio2 from './Pages/Dashdora/Exercicio2/Exercicio2'
import Exercicio3 from './Pages/Dashdora/Exercicio3/Exercicio3'
import Exercicio4 from './Pages/Dashdora/Exercicio4/Exercicio4'
import Exercicio5 from './Pages/Dashdora/Exercicio5/Exercicio5'
import Exercicio6 from './Pages/Dashdora/Exercicio6/Exercicio6'

import Login from './Pages/login/login'
import Cadastro from './Pages/Cadastro/Cadastro';
import Confirmarcadastro from './Pages/Confirmar-cadastro/Confirmar';
import Confirmar2 from './Pages/Confirmar2/Confirmar2';
import Esqueceusenha from './Pages/login/Esqueceu-senha/Esqueceu-senha';
import Noticia1 from './Pages/blog/Noticia1/noticia1';
import Noticia2 from './Pages/blog/Noticia2/noticia2';
import Noticia3 from './Pages/blog/Noticia3/noticia3';
import Noticia4 from './Pages/blog/Noticia4/noticia4';
import Noticia5 from './Pages/blog/Noticia5/noticia5';
import Noticia6 from './Pages/blog/Noticia6/noticia6';
import Noticia7 from './Pages/blog/Noticia7/noticia7';

import Metronomo from './Pages/Metronomo/Metronomo';


import { Pagamento } from './Pages/Paymethots/Paymethods';



function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/instrumentos" element={<Instrumentos />} />
          <Route path="/planos" element={<Planos />} />
          <Route path="/pagamento" element={<Pagamento />} />
          <Route path="/depoimentos" element={<Depoimentos />} />
          <Route path="/sobre" Component={Sobre} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/dashdora" element={<Dashdora />} />
          <Route path="/faq" Component={FaleConosco} />
          <Route path="/sons" element={<Sons />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/praticar" element={<Praticar />} />

          <Route path="/exercicio1" element={<Trilha1Exercicio1/>}/>

          <Route path="/exercicio1" element={<Exercicio1/>}/>

          <Route path="/exercicios/trilha-2/1" element={<Trilha2Exercicio1/>}/>
          <Route path="/exercicios/trilha-2/2" element={<Trilha2Exercicio2/>}/>
          <Route path="/exercicios/trilha-2/3" element={<Trilha2Exercicio3/>}/>

          <Route path="/exercicio2" element={<Exercicio2/>}/>
          <Route path="/exercicio3" element={<Exercicio3/>}/>
          <Route path="/exercicio4" element={<Exercicio4/>}/>
          <Route path="/exercicio5" element={<Exercicio5/>}/>
          <Route path="/exercicio6" element={<Exercicio6/>}/>

          <Route path="/instrumentos" element={<Instrumentos/>}/>
          <Route path="/pagamento" element={<Pagamento/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path="/confirmar" element={<Confirmarcadastro/>}/>
          <Route path="/confirmar2" element={<Confirmar2/>}/>
          <Route path="/esqueceusenha" element={<Esqueceusenha />}/>
          <Route path="/noticia1" element={<Noticia1 />}/>
          <Route path="/noticia2" element={<Noticia2 />}/>
          <Route path="/noticia3" element={<Noticia3 />}/>
          <Route path="/noticia4" element={<Noticia4 />}/>
          <Route path="/noticia5" element={<Noticia5 />}/>
          <Route path="/noticia6" element={<Noticia6 />}/>
          <Route path="/noticia7" element={<Noticia7 />}/>
          <Route path="/equipamento/metronomo" element={<Metronomo/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;