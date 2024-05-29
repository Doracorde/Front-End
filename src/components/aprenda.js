import aprendalogo from '../img/aprenda.png';
import './aprenda.css';

export default function Aprenda () {
    return (
        <section className="aprenda">
        <div className="music-learning-section">
          <div className="text-content">
            <h1>Aprenda e Melhore Suas Habilidades</h1>
            <p>Prepare-se para uma experiência única e enriquecedora no mundo da música.</p>
            <br />
            <button className="discover-more-btn">Descubra Mais</button>
          </div>
          <div className="image-content2">
            <img src={aprendalogo} alt="Músicos tocando instrumentos" />
          </div>
        </div>
      </section>
    );
}