import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import somlogo from '../../assets/img/som.png';
import tecladologo from '../../assets/img/teclado.png';
import violaologo from '../../assets/img/violao.png';
import './instrumentos.css';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import { Link } from 'react-router-dom';

export default function Instrumentos() {
  const { t } = useTranslation();

  return (
    <section className="instrumentos">
      <h1>{t('Instrumentos Musicais')}</h1>
      <p>{t('Confira alguns dos instrumentos que ensinamos!')}</p>

      <CardGroup className='card-group-custom'>
        <Card className='card-custom'>
          <Card.Img variant="top" src={somlogo} alt="amplificador de guitarra" />
          <Card.Body>
            <Card.Title>{t('Guitarra')}</Card.Title>
            <Card.Text className='card-text'>
              {t('A guitarra é um instrumento versátil, capaz de expressar uma ampla gama de emoções. Além disso, ao ensinar, também cultivamos habilidades técnicas e conhecimento musical sólido.')}
            </Card.Text>
          </Card.Body>
          <Card.Footer className="card-footer-custom" style={{ backgroundColor: "#FEFAEB", border: "none", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Link to="/instrumentos">
              <button className="btn-saiba-mais">{t('Saiba Mais')}</button>
            </Link>
          </Card.Footer>
        </Card>

        <Card className="card-custom">
          <Card.Img variant="top" src={violaologo} alt="violão" />
          <Card.Body>
            <Card.Title>{t('Violão')}</Card.Title>
            <Card.Text className='card-text'>
              {t('O violão é composto de um corpo de madeira, que fornece a amplificação da música, e possui seis ou mais cordas, na maioria das vezes de aço, que são tocadas com os dedos ou usando palhetas')}
            </Card.Text>
          </Card.Body>
          <Card.Footer className="card-footer-custom" style={{ backgroundColor: "#FEFAEB", border: "none", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Link to="/instrumentos">
              <button className="btn-saiba-mais">{t('Saiba Mais')}</button>
            </Link>
          </Card.Footer>
        </Card>

        <Card className="card-custom">
          <Card.Img variant="top" src={tecladologo} alt="piano digital" />
          <Card.Body>
            <Card.Title>{t('Piano')}</Card.Title>
            <Card.Text className='card-text'>
              {t('O piano é composto por um corpo de madeira que amplifica a música produzida. Ele possui teclas que, quando pressionadas, acionam martelos para percutir as cordas.')}
            </Card.Text>
          </Card.Body>
          <Card.Footer className="card-footer-custom" style={{ backgroundColor: "#FEFAEB", border: "none", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Link to="/instrumentos">
              <button className="btn-saiba-mais">{t('Saiba Mais')}</button>
            </Link>
          </Card.Footer>
        </Card>
      </CardGroup>
    </section>
  );
}
