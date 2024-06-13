import imgmulher from '../../assets/img/imgmulher.png';
import imgflores from '../../assets/img/imgflores.png';
import imghomem from '../../assets/img/imghomem.png';
import {useTranslation} from 'react-i18next';
import '../../i18n';
import './harmonia.css';

export default function Harmonia  () {

  const { t, i18n } = useTranslation();

    return (
        <section className="harmonia">
          <div className="harmonia-section">
            <div className="text-header">
              <h1>{t("Harmonia para todos os")} <span style={{color:"#F9C402"}}>{t("sentidos")} </span></h1>
             
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