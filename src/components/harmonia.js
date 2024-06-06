import imgflores from '../img/imgflores.png';
import imgmulher from '../img/imgmulher.png';
import imghomem from '../img/imghomem.png';
import './harmonia.css';

export default function Harmonia  () {
    return (
        <section className="harmonia">
          <div className="harmonia-section">
            <div className="text-header">
              <h1>Harmonia para todos os <span style={{color:"#F9C402"}}>sentidos</span></h1>
             
              <p>Aqui se inicia uma nova era na educação musical, marcando o amanhecer de métodos inovadores e experiências transformadoras.</p>
              
              <a href='/cadastro'>
                <button className="comece-agora-btn">
                  Comece Agora
                </button>
              </a>

            </div>
            <div className="image-content">
              <div className="img-wrapper"><img className="img1" src={imgmulher} alt="Descrição da imagem 2" /></div>
              <div className="img-wrapper"><img className="img2" src={imgflores} alt="Uma mulher negra com deficiencia visual, com borboleta em seu rosto" /></div>
              <div className="img-wrapper"><img className="img3" src={imghomem} alt="Descrição da imagem 3" /></div>
            </div>
          </div>
        </section>
    );
}