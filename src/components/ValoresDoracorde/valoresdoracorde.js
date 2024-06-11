import './valoresdoracorde.css';
import Do from "../../assets/img/do.jpg";
import Sol from "../../assets/img/sol.png";
import Fa from "../../assets/img/fa.png";


function ValoresDoracorde() {
  return (

    <section className='valores-container'>
      <div className="valores-doracorde">
        <h2>Nossas notas</h2>
      </div>

      <div className="descricaoValores">
        <div className="missao">
          <img src={Sol} alt="Missão" className="icon" />
          <h3 className="titleDescricao">Missão (Sol)</h3>
          <div className="missao-descricao">
            <p>
              Democratizar à educação musical para todas as pessoas com
              deficiência visual.
            </p>
          </div>
        </div>
        <div className="missao">
          <img src={Fa} alt="Visão" className="icon-fa" />
          <h3 className="titleDescricao">Visão (Fá)</h3>
          <div className="missao-descricao">
            <p>
              Ser uma referência em recursos educacionais para a comunidade de
              pessoas com deficiência visual.
            </p>
          </div>
        </div>
        <div className="missao">
          <img src={Do} alt="Valores" className="icon-do" />
          <h3 className="titleDescricao">Valores (Dó)</h3>
          <div className="missao-descricao">
            <p>
              Promovemos o direito de acesso igualitário à educação musical
              para todos.
            </p>
          </div>
        </div>
      </div>
    </section>

  );
}

export default ValoresDoracorde;