import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import somlogo from '../../assets/img/som.png';
import tecladologo from '../../assets/img/teclado.png';
import violaologo from '../../assets/img/violao.png';
import './instrumentos.css';

export default function Instrumentos() {
    const { t } = useTranslation();

    return (
        <section className="instrumentos">
            <h1>{t('instrumentos.titulo')}</h1>
            <p>{t('instrumentos.subtitulo')}</p>
            <CardGroup style={{ width: "1071px", height: "650px", display: "flex", flexDirection: "row", gap: "29px" }}>
                <Card style={{ width: "271px", height: "100%", backgroundColor: "#FEFAEB", borderRadius: "20px", display: "flex", alignItems: "center", paddingTop: "21px", margin: "0" }}>
                    <Card.Img variant="top" src={somlogo} style={{}} />
                    <Card.Body>
                        <Card.Title>{t('instrumentos.guitarra.titulo')}</Card.Title>
                        <Card.Text className='card-text'>
                            {t('instrumentos.guitarra.descricao')}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer style={{ backgroundColor: "#FEFAEB", border: "none", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <button className="btn-saiba-mais">{t('instrumentos.guitarra.botao')}</button>
                    </Card.Footer>
                </Card>
                <Card style={{ width: "271px", height: "100%", backgroundColor: "#FEFAEB", borderRadius: "20px", alignItems: "center", paddingTop: "21px", margin: "0" }}>
                    <Card.Img variant="top" src={violaologo} style={{}} />
                    <Card.Body>
                        <Card.Title>{t('instrumentos.violao.titulo')}</Card.Title>
                        <Card.Text>
                            {t('instrumentos.violao.descricao')}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer style={{ backgroundColor: "#FEFAEB", border: "none", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <button className="btn-saiba-mais">{t('instrumentos.violao.botao')}</button>
                    </Card.Footer>
                </Card>
                <Card style={{ width: "271px", height: "100%", backgroundColor: "#FEFAEB", borderRadius: "20px", alignItems: "center", paddingTop: "21px", margin: "0" }}>
                    <Card.Img variant="top" src={tecladologo} style={{}} />
                    <Card.Body>
                        <Card.Title>{t('instrumentos.piano.titulo')}</Card.Title>
                        <Card.Text>
                            {t('instrumentos.piano.descricao')}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer style={{ backgroundColor: "#FEFAEB", border: "none", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <button className="btn-saiba-mais">{t('instrumentos.piano.botao')}</button>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </section>
    );
}
