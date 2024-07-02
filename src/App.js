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
import Afinador from './Pages/Afinador/Afinador';
import Piano from './Pages/Piano/Piano';
import Guitarra from './Pages/Guitarra/Guitarra';
import Baixo from './Pages/Baixo/Baixo';
import Caixaderitmos from './Pages/Caixaderitmos/Caixaderitmos';
import Geradordeacordes from './Pages/Geradordeacordes/Geradordeacordes';
import Identificadordeescalas from './Pages/Identificadordeescalas/Identificadordeescalas';
import Identificadordeacordes from './Pages/Identificadordeacordes/Identificadordeacordes';
import Identificadordeintervalos from './Pages/Identificadordeintervalos/Identificadordeintervalos';
import Identificadordenotas from './Pages/Identificadordenotas/Identificadordenotas';
import Termosmusicais from './Pages/Termosmusicais/Termosmusicais';
import Planos from './Pages/Planos/Planos';
import Depoimentos from './Pages/Depoimentos/Depoimentos';
import Sobre from './Pages/Sobre/Sobre';
import Blog from './Pages/blog/Blog';
import Dashdora from './Pages/Dashdora/Dashdora';
import FaleConosco from './Pages/FaleConosco/Faq';
import Sons from './Pages/Sons/Sons';
import Menumusicas from './Pages/Menumusicas/menumusicas.js';
import Perfil from './Pages/Perfil/Perfil';
import Trilha1Exercicio1 from './Pages/Dashdora/Exercicio1/Exercicio1';
import Praticar from './Pages/Praticar/Praticar';
import Trilha2Exercicio1 from './Pages/Dashdora/Trilha2-exercicio1/Acorde-exercicio.jsx';
import Trilha2Exercicio2 from './Pages/Dashdora/Trilha2-exercicio2/Acorde-exercicio2.jsx'; 
import Trilha2Exercicio3 from './Pages/Dashdora/Trilha2-exercicio3/Acorde-exercicio3.jsx'; 
import Pagamento from './Pages/Paymethots/Paymethods'
import Exercicio1 from './Pages/Dashdora/Exercicio1/Exercicio1'
import Exercicio2 from './Pages/Dashdora/Exercicio2/Exercicio2'
import Exercicio3 from './Pages/Dashdora/Exercicio3/Exercicio3'
import Exercicio4 from './Pages/Dashdora/Exercicio4/Exercicio4'
import Exercicio5 from './Pages/Dashdora/Exercicio5/Exercicio5'
import Ceuazul from './Pages/ceuazul/ceuazul.js'
import Everlong from './Pages/Everlong/everlong.js'
import Tempoperdido from './Pages/Tempoperdido/tempoperdido.js'
import Exercicio6 from './Pages/Dashdora/Exercicio6/Exercicio6'
import Login from './Pages/login/login'
import Holiday from './Pages/Holiday/holiday.js'
import Harrypottertheme from './Pages/Harrypottertheme/harrypottertheme.js'
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
import Sotuessanto from './Pages/Sotuessanto/sotuessanto.js';
import Metronomo from './Pages/Metronomo/Metronomo.jsx';
import Evidencias from './Pages/Evidencias/evidencias.js';
import Lugaraosol from './Pages/Lugaraosol/lugaraosol.js';
import Bateria from './Pages/Bateria/Bateria.js'
import {PercussaoCorporal} from './Pages/PercussaoCorporal/Percussaoc';
import Trilha3Exercicio1 from './Pages/Dashdora/Trilha3-exercicio1/Ritmo-exercicio.jsx'
import Trilha3Exercicio2 from './Pages/Dashdora/Trilha3-exercicio2/Ritmo-exercicio2.jsx'
import Trilha3Exercicio3 from './Pages/Dashdora/Trilha3-exercicio3/Ritmo-exercicio3.jsx'








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
          <Route path="/tocarmusicas/sotuessanto" element={<Sotuessanto />} />
          <Route path="/tocarmusicas/everlong" element={<Everlong />} />
          <Route path="/tocarmusicas/harrypottertheme" element={<Harrypottertheme />} />
          <Route path="/menumusicas" element={<Menumusicas />} />
          <Route path="/tocarmusicas/evidencias" element={<Evidencias />} />
          <Route path="/tocarmusicas/holiday" element={<Holiday />} />
          <Route path="/tocarmusicas/ceuazul" element={<Ceuazul />} />
          <Route path="/tocarmusicas/tempoperdido" element={<Tempoperdido />} />
          <Route path="/tocarmusicas/lugaraosol" element={<Lugaraosol />} />

          <Route path="/bateria" Component={Bateria} />

          <Route path="/PercussaoCorporal" Component={PercussaoCorporal} />



          <Route path="/exercicio1" element={<Trilha1Exercicio1/>}/>

          <Route path="/exercicio1" element={<Exercicio1/>}/>

          <Route path="/exercicios/trilha-2/1" element={<Trilha2Exercicio1/>}/>
          <Route path="/exercicios/trilha-2/2" element={<Trilha2Exercicio2/>}/>
          <Route path="/exercicios/trilha-2/3" element={<Trilha2Exercicio3/>}/>

          <Route path="/exercicios/trilha-3/1" element={<Trilha3Exercicio1/>}/>
          <Route path="/exercicios/trilha-3/2" element={<Trilha3Exercicio2/>}/>
          <Route path="/exercicios/trilha-3/3" element={<Trilha3Exercicio3/>}/>
       

          <Route path="/exercicio2" element={<Exercicio2/>}/>
          <Route path="/exercicio3" element={<Exercicio3/>}/>
          <Route path="/exercicio4" element={<Exercicio4/>}/>
          <Route path="/exercicio5" element={<Exercicio5/>}/>
          <Route path="/exercicio6" element={<Exercicio6/>}/>

          <Route path="/instrumentos" element={<Instrumentos/>}/>
          <Route path="/piano" element={<Piano/>}/>
          <Route path="/guitarra" element={<Guitarra/>}/>
          <Route path="/afinador" element={<Afinador/>}/>
          <Route path="/baixo" element={<Baixo/>}/>
          <Route path="/bateria" element={<Bateria/>}/>
          <Route path="/caixa-de-ritmos" element={<Caixaderitmos/>}/>
          <Route path="/gerador-de-acordes" element={<Geradordeacordes/>}/>
          <Route path="/identificador-de-notas" element={<Identificadordenotas/>}/>
          <Route path="/identificador-de-escalas" element={<Identificadordeescalas/>}/>
          <Route path="/identificador-de-intervalos" element={<Identificadordeintervalos/>}/>
          <Route path="/identificador-de-acordes" element={<Identificadordeacordes/>}/>
          <Route path="/termosmusicais" element={<Termosmusicais/>}/>
          <Route path="/metronomo" element={<Metronomo/>}/>
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
          <Route path="/pagamento" element={<Pagamento />}/>
          <Route path="/equipamento/metronomo" element={<Metronomo/>}/>

        </Routes>

        

      </div>
    </Router>

      
  );
}

export default App;