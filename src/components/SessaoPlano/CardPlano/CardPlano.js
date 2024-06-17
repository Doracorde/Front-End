import './CardPlano.css'
import { Link } from "react-router-dom";

export default function CardPlano(props){
    return(
       <article className='cardPlano'>
            <div className='cardCabecalho'>
                <h3>{props.titulo}</h3>
                <aside className='subtituloContainer'>
                    <h4>{props.subtitulo}</h4>
                </aside>                            
            </div>
            <aside className='beneficioContainer'>
                <ul className='listaBeneficio'>
                    {props.descBeneficio.map((beneficio, index) => {
                         return <li key={index}>{beneficio}</li>; 
                    })}
                </ul>
            </aside>  
            <hr></hr>
            <footer className='planoRodape'>
                <aside className='compraPlano'>
                    <h3 className='precoPlano'>{props.preco}</h3>
                    <h5 className='mensalidadePlano'>{props.mensalidade}</h5>
                </aside>
                <Link to="/pagamento">
                     <button className='saibaMais' type="button">Saiba mais</button>
                </Link>
            </footer>  
          
       </article> 
    )
}