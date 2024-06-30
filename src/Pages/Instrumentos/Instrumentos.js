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
import api from '../../utils/axios';
import Footer from '../../components/Footer/footer';


import { useTranslation } from 'react-i18next';
import '../../i18n';


export default function FerramentasMusica() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="header-dashdora">
        <img src={Logo} alt={t('Doracorde Logo')} className="logo" />
      </div>

      <div className="mus-main-content">
        <div className="mus-sidebar">
          <h2>{t('Ferramentas')}</h2>
          <div className="mus-section">
            <h5 className='h5-sidebar'>Instrumentos</h5>
            <Link to="/piano">Piano</Link>
            <Link to="/guitarra">Guitarra</Link>
            <Link to="/baixo">Baixo</Link>
            <Link to="/bateria">Bateria</Link>
          </div>

          <div className="mus-section">
            <h5 className='h5-sidebar'>Equipamento</h5>
            <Link to="/gerador-de-acordes">Gerador de acordes</Link>
            <Link to="/caixa-de-ritmos">Caixa de ritmos</Link>
            <Link to="/metronomo">Metrônomo</Link>
            <Link to="/afinador">Afinador</Link>
          </div>

          <div className="mus-section">
            <h5 className='h5-sidebar'>Identificadores</h5>
            <Link to="/identificador-de-notas">Notas</Link>
            <Link to="/identificador-de-intervalos">Intervalos</Link>
            <Link to="/identificador-de-acordes">Acordes</Link>
            <Link to="/identificador-de-escalas">Escalas</Link>
          </div>

          <div className="mus-section">
            <h5 className='h5-sidebar'>Mais</h5>
            <Link to="/termos-musicais">Termos musicais</Link>
            <Link to="/intervalos-em-cancoes">Intervalos em canções</Link>
            <Link to="/folhas-de-pauta">Folhas de pauta</Link>
            <Link to="/">Voltar para página inicial </Link>

          </div>
        </div>

        <div className="mus-content">
          <h1>{t('Ferramentas de música')}</h1>
          <div className="mus-cards-grid">
            <div className="mus-card">
              <h2 >Piano</h2>
              <Link to="/piano">
                <p>Toque o piano virtual e visualiza notas, acordes e escalas.</p>
                <img src={piano} alt="Piano" />
              </Link>
            </div>
            <div className="mus-card">
              <h2>Guitarra</h2>
              <Link to="/guitarra">
                <p>Toca a guitarra virtual e visualiza notas, acordes e escalas.</p>
                <img src={guitarra} alt="Guitarra" />
              </Link>
            </div>
            <div className="mus-card">
              <h2>Baixo</h2>
              <Link to="/baixo">
                <p>Toca o baixo virtual e visualiza notas, acordes e escalas</p>
                <img src={baixocard} alt="Baixo" />
              </Link>
            </div>
            <div className="mus-card">
              <h2>Bateria</h2>
              <Link to="/bateria">
                <p>Toca a bateria virtual e pratica as tuas batidas e ritmos.</p>
                <img src={bateria} alt="Bateria" />
              </Link>

            </div>
            <div className="mus-card">
              <h2>Gerador de acordes</h2>
              <Link to="/gerador-de-acordes">
                <p>Crie acordes facilmente com esta ferramenta.</p>
                <img src={geradordeacordes} alt="Gerador de acordes" />
              </Link>
            </div>
            <div className="mus-card">
              <h2>Caixa de ritmos</h2>
              <Link to="/caixa-de-ritmos">
                <p>Crie e pratique ritmos com esta ferramenta. </p>
                <img src={caixaderitmos} alt="Caixa de ritmos" />
              </Link>
            </div>
            <div className="mus-card">
              <h2>Metrônomo</h2>
              <Link to="/metronomo">
                <p>Melhore sua precisão rítmica com este metrônomo.</p>
                <img src={metronomo} alt="Metrônomo" />
              </Link>
            </div>
            <div className="mus-card">
              <h2>Afinador</h2>
              <Link to="/afinador">
                <p>Afine seu instrumento musical com afinador online. </p>
                <img src={afinador} alt="Afinador" />
              </Link>
            </div>
            <div className="mus-card">
              <h2>Identificador de notas</h2>
              <Link to="/identificador-de-notas">
                <p>Descubra as notas no piano, na guitarra e no baixo. .</p>
                <img src={identificadordenotas} alt="Identificador de notas" />
              </Link>
            </div>
            <div className="mus-card">
              <h2>Identificador de intervalos</h2>
              <Link to="/identificador-de-intervalos">
                <p>Encontre intervalos no piano, na guitarra e no baixo.
                  Identificador de intervalos.</p>
                <img src={identificadordeintervalos} alt="Identificador de intervalos" />
              </Link>
            </div>
            <div className="mus-card">
              <h2>Identificador de acordes</h2>
              <Link to="/identificador-de-acordes">
                <p>Descubra os acordes no piano, na guitarra e no baixo.</p>
                <img src={identificadordeacordes} alt="Identificador de acordes" />
              </Link>
            </div>
            <div className="mus-card">
              <h2>Identificador de escalas</h2>
              <Link to="/identificador-de-escalas">
                <p>Descubra as escalas no piano, na guitarra e no baixo.</p>
                <img src={identificadordeescalas} alt="Identificador de escalas" />
              </Link>
            </div>

            <div className="mus-card">
              <h2>Termos musicais</h2>
              <Link to="/termosmusicais">Termos musicais
                <p>Aprenda sobre termos musicais utilizados na teoria musical.</p>
                <img src={termosmusicais} alt="Termos musicais" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  );
}
