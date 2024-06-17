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

export default function Instrumentos() {
  const { t } = useTranslation();

  return (
    <section className="instrumentos">
      <h1>{t('Instrumentos Musicais')}</h1>
      <p>{t('Confira alguns dos instrumentos que ensinamos!')}</p>
      <CardGroup style={{width: "1071px", height: "650px", display:"flex", flexDirection: "row", gap:"29px"}}>
        <Card style={{width: "271px", height: "100%", backgroundColor: "#FEFAEB", borderRadius: "20px", display:"flex", alignItems:"center", paddingTop:"21px", margin:"0"}}>
          <Card.Img variant="top" src={somlogo} />
          <Card.Body>
            <Card.Title>{t('Guitarra')}</Card.Title>
            <Card.Text className='card-text'>
              {t('Entre agora para o nosso clube de descontos! Faça parte e tenha acesso exclusivo às melhores marcas e modelos de guitarra do mercado! Aulas online e presenciais com os melhores professores do Brasil!')}
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{backgroundColor: "#FEFAEB", border:"none", width:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <button className="btn-saiba-mais">{t('Saiba Mais')}</button>
          </Card.Footer>
        </Card>
        <Card style={{width:"271px", height: "100%", backgroundColor: "#FEFAEB", borderRadius: "20px", alignItems:"center", paddingTop:"21px", margin:"0"}}>
          <Card.Img variant="top" src={violaologo} />
          <Card.Body>
            <Card.Title>{t('Violão')}</Card.Title>
            <Card.Text>
              {t('Entre agora para o nosso clube de descontos! Faça parte e tenha acesso exclusivo às melhores marcas e modelos de violão do mercado! Aulas online e presenciais com os melhores professores do Brasil!')}
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{backgroundColor: "#FEFAEB", border:"none", width:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <button className="btn-saiba-mais">{t('Saiba Mais')}</button>
          </Card.Footer>
        </Card>
        <Card style={{width: "271px", height: "100%", backgroundColor: "#FEFAEB", borderRadius: "20px", alignItems:"center", paddingTop:"21px", margin:"0"}}>
          <Card.Img variant="top" src={tecladologo} />
          <Card.Body>
            <Card.Title>{t('Piano')}</Card.Title>
            <Card.Text>
              {t('Entre agora para o nosso clube de descontos! Faça parte e tenha acesso exclusivo às melhores marcas e modelos de piano do mercado! Aulas online e presenciais com os melhores professores do Brasil!')}
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{backgroundColor: "#FEFAEB", border:"none", width:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <button className="btn-saiba-mais">{t('Saiba Mais')}</button>
          </Card.Footer>
        </Card>
      </CardGroup>
    </section>
  );
}
