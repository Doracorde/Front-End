import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import somlogo from '../../assets/img/som.png';
import tecladologo from '../../assets/img/teclado.png';
import violaologo from '../../assets/img/violao.png';
import './instrumentos.css';
import { useTranslation } from 'react-i18next';
import '../../i18n'
import { Link } from 'react-router-dom';


export default function Instrumentos() {
  const { t } = useTranslation();

  return (
    <section className="instrumentos">
      <h1>{t('Instrumentos Musicais')}</h1>
      <p>{t('Confira alguns dos instrumentos que ensinamos!')}</p>
      <CardGroup style={{ width: "1071px", height: "650px", display: "flex", flexDirection: "row", gap: "29px" }}>
        <Card style={{ width: "271px", height: "100%", backgroundColor: "#FEFAEB", borderRadius: "20px", display: "flex", alignItems: "center", paddingTop: "21px", margin: "0" }}>
          <Card.Img variant="top" src={somlogo} />
          <Card.Body>
            <Card.Title>{t('Guitarra')}</Card.Title>
            <Card.Text className='card-text'>
              {t(' A guitarra é um instrumento versátil, capaz de expressar uma ampla gama de emoções. Além disso, ao ensinar, também cultivamos habilidades técnicas e conhecimento musical sólido.')}
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{ backgroundColor: "#FEFAEB", border: "none", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>

            <Link to="/instrumentos">
              <button className="btn-saiba-mais">{t('Saiba Mais')}</button>
            </Link>
          </Card.Footer>
        </Card>
        <Card style={{ width: "271px", height: "100%", backgroundColor: "#FEFAEB", borderRadius: "20px", alignItems: "center", paddingTop: "21px", margin: "0" }}>
          <Card.Img variant="top" src={violaologo} />
          <Card.Body>
            <Card.Title>{t('Violão')}</Card.Title>
            <Card.Text>
              {t('O violão é composto de um corpo de madeira, que fornece a amplificação da música produzida, e possui seis ou mais cordas, na maioria das vezes de aço, que são tocadas com os dedos ou usando palhetas')}
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{ backgroundColor: "#FEFAEB", border: "none", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Link to="/instrumentos">
              <button className="btn-saiba-mais">{t('Saiba Mais')}</button>
            </Link>
          </Card.Footer>
        </Card>
        <Card style={{ width: "271px", height: "100%", backgroundColor: "#FEFAEB", borderRadius: "20px", alignItems: "center", paddingTop: "21px", margin: "0" }}>
          <Card.Img variant="top" src={tecladologo} />
          <Card.Body>
            <Card.Title>{t('Piano')}</Card.Title>
            <Card.Text>
              {t('O piano é composto por um corpo de madeira que amplifica a música produzida. Ele possui teclas que, quando pressionadas, acionam martelos para percutir as cordas.')}
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{ backgroundColor: "#FEFAEB", border: "none", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Link to="/instrumentos">
              <button className="btn-saiba-mais">{t('Saiba Mais')}</button>
            </Link>
          </Card.Footer>
        </Card>
      </CardGroup>
    </section>
  );
}