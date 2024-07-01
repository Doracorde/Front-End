import './metronomo.css';
import FerramentaMetronomo from '../../components/Ferramenta-Metronomo/Ferramenta-metronomo'
import Logo from '../../assets/img/Logo.png';
import { Link } from 'react-router-dom';
export default function Metronomo(){
    return(
        <>
        <div className="header-dashdora">
                <Link to='/instrumentos'>
                    <img src={Logo} alt="Doracorde Logo" className="logo" />
                </Link>
        </div>
        <FerramentaMetronomo/>
        </>
    )
}