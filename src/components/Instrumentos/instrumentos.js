import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import somlogo from '../../assets/img/som.png';
import tecladologo from '../../assets/img/teclado.png';
import violaologo from '../../assets/img/violao.png';
import './instrumentos.css';
import { Link } from 'react-router-dom';


export default function Instrumentos () {
    return (
        <section className="instrumentos">
          <h1>Instrumentos Musicais</h1>
          <p >Confira alguns dos instrumentos que ensinamos!</p>
          < CardGroup style={{width: "1071px", height: "650px", display:"flex", flexDirection: "row", gap:"29px"}}>

            <Card style={{width: "271px", height: "100%", backgroundColor: "#FEFAEB", borderRadius: "20px", display:"flex", alignItems:"center", paddingTop:"21px", margin:"0"}}>
              <Card.Img variant="top" src={somlogo} style={{}} />
              <Card.Body>
                <Card.Title>Guitarra</Card.Title>
                <Card.Text className='card-text'>
                
                Entre agora para o nosso clube de descontos! Faça parte e tenha acesso exclusivo às melhores marcas e modelos de guitarra do mercado! Aulas online e presenciais com os melhores professores do Brasil! 
                </Card.Text>
              </Card.Body>
              <Card.Footer style={{backgroundColor: "#FEFAEB", border:"none", width:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
                <Link to="/instrumentos">
                <button className="btn-saiba-mais">Saiba Mais</button>
                </Link>
              </Card.Footer>
              
            </Card>
            <Card style={{width:"271px", height: "100%", backgroundColor: "#FEFAEB", borderRadius: "20px", alignItems:"center",  paddingTop:"21px", margin:"0"}}>
              <Card.Img variant="top" src={violaologo} style={{}} />
              <Card.Body>
                <Card.Title>Violão</Card.Title>
                <Card.Text>
                  Entre agora para o nosso clube de descontos! Faça parte e tenha acesso exclusivo às melhores marcas e modelos de violão do mercado! Aulas online e presenciais com os melhores
                  professores do Brasil!
                </Card.Text>
              </Card.Body>
              <Card.Footer style={{backgroundColor: "#FEFAEB", border:"none", width:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
              <Link to="/instrumentos">
                <button className="btn-saiba-mais">Saiba Mais</button>
                </Link>
              </Card.Footer>

            </Card>
            <Card style={{width: "271px", height: "100%", backgroundColor: "#FEFAEB", borderRadius: "20px",alignItems:"center",  paddingTop:"21px", margin:"0"}}>
              <Card.Img variant="top" src={tecladologo} style={{}} />
              <Card.Body>
                <Card.Title>Piano</Card.Title>
                <Card.Text>
                  Entre agora para o nosso clube de descontos! Faça parte
                  e tenha acesso exclusivo às melhores marcas e modelos de
                  piano do mercado! Aulas online e presenciais com os melhores
                  professores do Brasil!
                </Card.Text>
              </Card.Body>
              <Card.Footer style={{backgroundColor: "#FEFAEB", border:"none", width:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
              <Link to="/instrumentos">
                <button className="btn-saiba-mais">Saiba Mais</button>
                </Link>
              </Card.Footer>

            </Card>
          </CardGroup >
      </section>
    );
}