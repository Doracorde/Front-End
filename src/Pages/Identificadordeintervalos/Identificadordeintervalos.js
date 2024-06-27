import Logo from '../../assets/img/Logo.png';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/footer';

export default function Bateria() {
    return (
        <>
            <div className="header-dashdora">
                <Link to='/instrumentos'>
                    <img src={Logo} alt="Doracorde Logo" className="logo" />
                </Link>
            </div>

            <Footer />
        </>
    )
}