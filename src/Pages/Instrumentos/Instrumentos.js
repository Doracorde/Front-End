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
import { useTranslation } from 'react-i18next';
import '../../i18n'

export default function FerramentasMusica() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="header-dashdora">
        <img src={Logo} alt="Doracorde Logo" className="logo" />
      </div>

      <div className="mus-main-content">
        <div className="mus-sidebar">
          <h2>{t('Ferramentas de música')}</h2>
          <div className="mus-section">
            <h5 className='h5-sidebar'>{t('Instrumentos')}</h5>
            <Link to="/instrumentos/piano">{t('Piano')}</Link>
            <Link to="/instrumentos/guitarra">{t('Guitarra')}</Link>
            <Link to="/instrumentos/baixo">{t('Baixo')}</Link>
            <Link to="/instrumentos/bateria">{t('Bateria')}</Link>
          </div>

          <div className="mus-section">
            <h5 className='h5-sidebar'>{t('Equipamento')}</h5>
            <Link to="/equipamento/gerador-de-acordes">{t('Gerador de acordes')}</Link>
            <Link to="/equipamento/caixa-de-ritmos">{t('Caixa de ritmos')}</Link>
            <Link to="/equipamento/metronomo">{t('Metrônomo')}</Link>
            <Link to="/equipamento/afinador">{t('Afinador')}</Link>
          </div>

          <div className="mus-section">
            <h5 className='h5-sidebar'>{t('Identificadores')}</h5>
            <Link to="/identificadores/notas">{t('Notas')}</Link>
            <Link to="/identificadores/intervalos">{t('Intervalos')}</Link>
            <Link to="/identificadores/acordes">{t('Acordes')}</Link>
            <Link to="/identificadores/escalas">{t('Escalas')}</Link>
          </div>

          <div className="mus-section">
            <h5 className='h5-sidebar'>{t('Mais')}</h5>
            <Link to="/mais/circulo-de-quintas">{t('Círculo de quintas')}</Link>
            <Link to="/mais/termos-musicais">{t('Termos musicais')}</Link>
            <Link to="/mais/intervalos-em-cancoes">{t('Intervalos em canções')}</Link>
            <Link to="/mais/folhas-de-pauta">{t('Folhas de pauta')}</Link>
            <Link to="/">{t('Voltar para página inicial')}</Link>
          </div>
        </div>

        <div className="mus-content">
          <h1>{t('Ferramentas de música')}</h1>
          {/* colocar um video explicando como funcionará essa parte da plataforma */}
          <div className="mus-cards-grid">
            <div className="mus-card">
              <h2>{t('Piano')}</h2>
              <p>{t('Toca o piano virtual e visualiza notas, acordes e escalas.')}. <Link to="/instrumentos/piano">{t('Piano')}</Link>.</p>
              <img src={piano} alt="Piano" />
            </div>
            <div className="mus-card">
              <h2>{t('Guitarra')}</h2>
              <p>{t('Toca a guitarra virtual e visualiza notas, acordes e escalas.')}. <Link to="/instrumentos/guitarra">{t('Guitarra')}</Link>.</p>
              <img src={guitarra} alt="Guitarra" />
            </div>
            <div className="mus-card">
              <h2>{t('Baixo')}</h2>
              <p>{t('Toca o baixo virtual e visualiza notas, acordes e escalas.')}. <Link to="/instrumentos/baixo">{t('Baixo')}</Link>.</p>
              <img src={baixocard} alt="Baixo" />
            </div>
            <div className="mus-card">
              <h2>{t('Bateria')}</h2>
              <p>{t('Toca a bateria virtual e pratica as tuas batidas e ritmos.')}. <Link to="/instrumentos/bateria">{t('Bateria')}</Link>.</p>
              <img src={bateria} alt="Bateria" />
            </div>
            <div className="mus-card">
              <h2>{t('Gerador de acordes')}</h2>
              <p>{t('Crie acordes facilmente com esta ferramenta.')}. <Link to="/equipamento/gerador-de-acordes">{t('Gerador de acordes')}</Link>.</p>
              <img src={geradordeacordes} alt="Gerador de acordes" />
            </div>
            <div className="mus-card">
              <h2>{t('Caixa de ritmos')}</h2>
              <p>{t('Crie e pratique ritmos com esta ferramenta.')}. <Link to="/equipamento/caixa-de-ritmos">{t('Caixa de ritmos')}</Link>.</p>
              <img src={caixaderitmos} alt="Caixa de ritmos" />
            </div>
            <div className="mus-card">
              <h2>{t('Metrônomo')}</h2>
              <p>{t('Melhore sua precisão rítmica com este metrônomo.')}. <Link to="/equipamento/metronomo">{t('Metrônomo')}</Link>.</p>
              <img src={metronomo} alt="Metrônomo" />
            </div>
            <div className="mus-card">
              <h2>{t('Afinador')}</h2>
              <p>{t('Afine seu instrumento musical com afinador online.')}. <Link to="/equipamento/afinador">{t('Afinador')}</Link>.</p>
              <img src={afinador} alt="Afinador" />
            </div>
            <div className="mus-card">
              <h2>{t('Identificador de notas')}</h2>
              <p>{t('Descubra as notas no piano, na guitarra e no baixo.')}. <Link to="/identificadores/notas">{t('Identificador de notas')}</Link>.</p>
              <img src={identificadordenotas} alt="Identificador de notas" />
            </div>
            <div className="mus-card">
              <h2>{t('Identificador de intervalos')}</h2>
              <p>{t('Encontre intervalos no piano, na guitarra e no baixo.')}. <Link to="/identificadores/intervalos">{t('Identificador de intervalos')}</Link>.</p>
              <img src={identificadordeintervalos} alt="Identificador de intervalos" />
            </div>
            <div className="mus-card">
              <h2>{t('Identificador de acordes')}</h2>
              <p>{t('Descubra os acordes no piano, na guitarra e no baixo.')}. <Link to="/identificadores/acordes">{t('Identificador de acordes')}</Link>.</p>
              <img src={identificadordeacordes} alt="Identificador de acordes" />
            </div>
            <div className="mus-card">
            <h2>{t('Identificador de escalas')}</h2>
              <p>{t('Descubra as escalas no piano, na guitarra e no baixo.')}. <Link to="/identificadores/escalas">{t('Identificador de escalas')}</Link>.</p>
              <img src={identificadordeescalas} alt="Identificador de escalas" />
            </div>

            <div className="mus-card">
              <h2>{t('Termos musicais')}</h2>
              <p>{t('Aprenda sobre termos musicais utilizados na teoria musical.')}. <Link to="/mais/termos-musicais">{t('Termos musicais')}</Link>.</p>
              <img src={termosmusicais} alt="Termos musicais" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
