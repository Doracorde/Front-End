import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png'; 
import './ins.css';
import afinador from '../../assets/img/afinador.jpg';
import baixocard from '../../assets/img/baixocard.jpg';
import bateria from '../../assets/img/bateriacard.jpg';
import caixaderitmos from '../../assets/img/caixa-de-ritmos.jpg';
import geradordeacordes from '../../assets/img/gerador-de-acordes.jpg';
import guitarra from '../../assets/img/guitarracard.jpg';
import identificadordeacordes from '../../assets/img/identificador-de-acordes.jpg';
import identificadordeescalas from '../../assets/img/identificador-de-escalas.jpg';
import identificadordeintervalos from '../../assets/img/identificador-de-intervalor.jpg';
import identificadordenotas from '../../assets/img/identificador-de-notas.jpg';
import metronomo from '../../assets/img/metronomo.jpg';
import piano from '../../assets/img/pianocard.jpg';
import termosmusicais from '../../assets/img/termos-musicais.jpg';

export default function FerramentasMusica() {
  return (
    <div>
      <div className="header-dashdora">
        <img src={Logo} alt="Doracorde Logo" className="logo" />
      </div>

      <div className="mus-main-content">
        <div className="mus-sidebar">
          <h2>Ferramentas</h2>
          <div className="mus-section">
            <h5 className='h5-sidebar'>Instrumentos</h5>
            <Link to="/instrumentos/piano">Piano</Link>
            <Link to="/instrumentos/guitarra">Guitarra</Link>
            <Link to="/instrumentos/baixo">Baixo</Link>
            <Link to="/instrumentos/bateria">Bateria</Link>
          </div>

          <div className="mus-section">
            <h5 className='h5-sidebar'>Equipamento</h5>
            <Link to="/equipamento/gerador-de-acordes">Gerador de acordes</Link>
            <Link to="/equipamento/caixa-de-ritmos">Caixa de ritmos</Link>
            <Link to="/equipamento/metronomo">Metrônomo</Link>
            <Link to="/equipamento/afinador">Afinador</Link>
          </div>

          <div className="mus-section">
            <h5 className='h5-sidebar'>Identificadores</h5>
            <Link to="/identificadores/notas">Notas</Link>
            <Link to="/identificadores/intervalos">Intervalos</Link>
            <Link to="/identificadores/acordes">Acordes</Link>
            <Link to="/identificadores/escalas">Escalas</Link>
          </div>

          <div className="mus-section">
            <h5 className='h5-sidebar'>Mais</h5>
            <Link to="/mais/circulo-de-quintas">Círculo de quintas</Link>
            <Link to="/mais/termos-musicais">Termos musicais</Link>
            <Link to="/mais/intervalos-em-cancoes">Intervalos em canções</Link>
            <Link to="/mais/folhas-de-pauta">Folhas de pauta</Link>
            <Link to="/">Voltar para página inicial </Link>

          </div>
        </div>

        <div className="mus-content">
          <h1>Ferramentas de música</h1>
          {/* colocar um video explicando como funcionará essa parte da plataforma */}
          <div className="mus-cards-grid">
            <div className="mus-card">
              <h2 >Piano</h2>
              <p>Toca o piano virtual e visualiza notas, acordes e escalas. <Link to="/instrumentos/piano">Piano</Link>.</p>
              <img src={piano} alt="Piano" />
            </div>
            <div className="mus-card">
              <h2>Guitarra</h2>
              <p>Toca a guitarra virtual e visualiza notas, acordes e escalas. <Link to="/instrumentos/guitarra">Guitarra</Link>.</p>
              <img src={guitarra} alt="Guitarra" />
            </div>
            <div className="mus-card">
              <h2>Baixo</h2>
              <p>Toca o baixo virtual e visualiza notas, acordes e escalas. <Link to="/instrumentos/baixo">Baixo</Link>.</p>
              <img src={baixocard} alt="Baixo" />
            </div>
            <div className="mus-card">
              <h2>Bateria</h2>
              <p>Toca a bateria virtual e pratica as tuas batidas e ritmos. <Link to="/instrumentos/bateria">Bateria</Link>.</p>
              <img src={bateria} alt="Bateria" />
            </div>
            <div className="mus-card">
              <h2>Gerador de acordes</h2>
              <p>Crie acordes facilmente com esta ferramenta. <Link to="/equipamento/gerador-de-acordes">Gerador de acordes</Link>.</p>
              <img src={geradordeacordes} alt="Gerador de acordes" />
            </div>
            <div className="mus-card">
              <h2>Caixa de ritmos</h2>
              <p>Crie e pratique ritmos com esta ferramenta. <Link to="/equipamento/caixa-de-ritmos">Caixa de ritmos</Link>.</p>
              <img src={caixaderitmos} alt="Caixa de ritmos" />
            </div>
            <div className="mus-card">
              <h2>Metrônomo</h2>
              <p>Melhore sua precisão rítmica com este metrônomo. <Link to="/equipamento/metronomo">Metrônomo</Link>.</p>
              <img src={metronomo} alt="Metrônomo" />
            </div>
            <div className="mus-card">
              <h2>Afinador</h2>
              <p>Afine seu instrumento musical com afinador online. <Link to="/equipamento/afinador">Afinador</Link>.</p>
              <img src={afinador} alt="Afinador" />
            </div>
            <div className="mus-card">
              <h2>Identificador de notas</h2>
              <p>Descubra as notas no piano, na guitarra e no baixo. <Link to="/identificadores/notas">Identificador de notas</Link>.</p>
              <img src={identificadordenotas} alt="Identificador de notas" />
            </div>
            <div className="mus-card">
              <h2>Identificador de intervalos</h2>
              <p>Encontre intervalos no piano, na guitarra e no baixo. <Link to="/identificadores/intervalos">Identificador de intervalos</Link>.</p>
              <img src={identificadordeintervalos} alt="Identificador de intervalos" />
            </div>
            <div className="mus-card">
              <h2>Identificador de acordes</h2>
              <p>Descubra os acordes no piano, na guitarra e no baixo. <Link to="/identificadores/acordes">Identificador de acordes</Link>.</p>
              <img src={identificadordeacordes} alt="Identificador de acordes" />
            </div>
            <div className="mus-card">
              <h2>Identificador de escalas</h2>
              <p>Descubra as escalas no piano, na guitarra e no baixo. <Link to="/identificadores/escalas">Identificador de escalas</Link>.</p>
              <img src={identificadordeescalas} alt="Identificador de escalas" />
            </div>

            <div className="mus-card">
              <h2>Termos musicais</h2>
              <p>Aprenda sobre termos musicais utilizados na teoria musical. <Link to="/mais/termos-musicais">Termos musicais</Link>.</p>
              <img src={termosmusicais} alt="Termos musicais" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
