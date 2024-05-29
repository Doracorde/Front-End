import stripeLogo from '../img/stripe.png';
import awsLogo from '../img/aws.png';
import redditLogo from '../img/reddit.png';
import './logo.css';

export default function Logos () {
    return (
        <section className="logos">
        <div className="img-section">
          <div className="logos-container">
            <img src={stripeLogo} alt="Logo Stripe" />
            <img src={awsLogo} alt="Logo AWS" />
            <img src={redditLogo} alt="Logo Carrinho" />
          </div>
        </div>
      </section>
    );
}