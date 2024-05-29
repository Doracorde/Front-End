import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import somlogo from '../img/som.png';
import tecladologo from '../img/teclado.png';
import violaologo from '../img/violao.png';
import './instrumentos.css';

export default function Instrumentos () {
    return (
        <section className="instrumentos">
        < CardGroup >
          <Card style={{width: "271px", height: "348px", backgroundColor: "#FEFAEB", borderRadius: "20px"}}>
            <Card.Img variant="top" src={somlogo} style={{marginLeft: "190px"}} />
            <Card.Body>
              <Card.Title>Guitarra</Card.Title>
              <Card.Text>
                Entre agora para o nosso clube de descontos! Faça parte
                e tenha acesso exclusivo às melhores marcas e modelos de
                guitarra do mercado! Aulas online e presenciais com os melhores
                professores do Brasil!
              </Card.Text>
              <button className="btn-saiba-mais">Saiba Mais</button>
            </Card.Body>
            <Card.Footer>
            </Card.Footer>
          </Card>
          <Card style={{width: "271px", height: "348px", backgroundColor: "#FEFAEB", borderRadius: "20px"}}>
            <Card.Img variant="top" src={violaologo} style={{marginLeft: "170px"}} />
            <Card.Body>
              <Card.Title>Violão</Card.Title>
              <Card.Text>
                Entre agora para o nosso clube de descontos! Faça parte
                e tenha acesso exclusivo às melhores marcas e modelos de
                violão do mercado! Aulas online e presenciais com os melhores
                professores do Brasil!
              </Card.Text>
              <button className="btn-saiba-mais">Saiba Mais</button>
            </Card.Body>
            <Card.Footer>
            </Card.Footer>
          </Card>
          <Card style={{width: "271px", height: "348px", backgroundColor: "#FEFAEB", borderRadius: "20px"}}>
            <Card.Img variant="top" src={tecladologo} style={{marginLeft: "170px"}} />
            <Card.Body>
              <Card.Title>Piano</Card.Title>
              <Card.Text>
                Entre agora para o nosso clube de descontos! Faça parte
                e tenha acesso exclusivo às melhores marcas e modelos de
                piano do mercado! Aulas online e presenciais com os melhores
                professores do Brasil!
              </Card.Text>
              <button className="btn-saiba-mais">Saiba Mais</button>
            </Card.Body>
            <Card.Footer>
            </Card.Footer>
          </Card>
        </CardGroup >
      </section>
    );
}