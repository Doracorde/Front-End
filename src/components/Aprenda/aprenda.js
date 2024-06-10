import aprendalogo from '../../assets/img/imgmulher.png';
import './aprenda.css';
import { Link } from 'react-router-dom';

export default function Aprenda() {
  return (
    <section className="aprenda">
      <section className="music-learning-section">

        <aside className='cabecalho-aprenda'>

          <aside className='titulo-aprenda'>
            <h2>Aprenda e Melhore Suas Habilidades</h2>
          </aside>

          <p>Prepare-se para uma experiência única e enriquecedora no mundo da música.</p>

          <button className="discover-more-btn">
            <Link to="/dashdora">Descubra Mais</Link>
          </button>
        </aside>

        <aside className="image-content2">
          <img src={aprendalogo} alt="Músicos tocando instrumentos" />
        </aside>

      </section>
    </section>
  );
}