import Do from "../../assets/img/do.jpg";
import Sol from "../../assets/img/sol.png";
import Fa from "../../assets/img/fa.png";
import { useTranslation } from 'react-i18next';
import '../../i18n';
import './valoresdoracorde.css';

function ValoresDoracorde() {
  const { t, i18n } = useTranslation();

  return (
    <section className='valores-container'>
      <div className="valores-doracorde">
        <h2>{t("Nossas notas")}</h2>
      </div>

      <div className="descricaoValores">
        <div className="missao">
          <img src={Sol} alt={t("Missão")} className="icon"/>
          <h3 className="titleDescricao">{t("Missão (Sol)")}</h3>
          <div className="missao-descricao">
            <p>
              {t("Democratizar à educação musical para todas as pessoas com deficiência visual.")}
            </p>
          </div>
        </div>
        <div className="missao">
          <img src={Fa} alt={t("Visão")} className="icon-fa" />
          <h3 className="titleDescricao">{t("Visão (Fá)")}</h3>
          <div className="missao-descricao">
            <p>
              {t("Ser uma referência em recursos educacionais para a comunidade de pessoas com deficiência visual.")}
            </p>
          </div>
        </div>
        <div className="missao">
          <img src={Do} alt={t("Valores")} className="icon-do" />
          <h3 className="titleDescricao">{t("Valores (Dó)")}</h3>
          <div className="missao-descricao">
            <p>
              {t("Promovemos o direito de acesso igualitário à educação musical para todos.")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ValoresDoracorde;
