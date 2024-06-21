import Proa from '../../assets/img/proa.png'
import Senac from '../../assets/img/senac.png'

import './logo.css';

export default function Logos () {
    return (
        <section className="logos">
          <div className="img-section">
            <div className="logos-container">
              <img src={Proa} alt="Logo Proa" />
              <img src={Senac} alt="Logo Senac" />
            </div>
          </div>
      </section>
    );
}