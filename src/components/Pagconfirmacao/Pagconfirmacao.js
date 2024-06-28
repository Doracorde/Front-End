import './pagConfirmacao.css';
import Check from "../../src/imagem/Check.png";
import { useTranslation } from 'react-i18next';
import '../../i18n';

export default function Confirmacao() {
    const { t } = useTranslation();

    return (
        <div className="all">
            <div className="amarelo-confirmacao">
                <div className="branco-confirmacao">
                    <div>
                        <img src={Check} alt={t('símbolo de confirmação')} />
                        <CCheck />
                        <h1>{t('thanks')}</h1>
                    </div>

                    <div>
                        <p>{t('goBack')}</p>
                        <button className='bt-inicio'>{t('start')}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function CCheck() {
    const { t } = useTranslation();
    return (
        <div>
            <img className='check' src={Check} alt={t('símbolo de confirmação')} />
        </div>
    );
}
