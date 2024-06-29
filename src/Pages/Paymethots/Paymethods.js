import React from "react";
import "./paymethots.css";
import { MdKeyboardArrowLeft } from "react-icons/md";
import PagEsquerda from "../../components/PagEsquerda/pagesquerda";
import PagDireita from "../../components/PagDireita/pagdireita";
import Trilha from "../../assets/img/trilha.png";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import '../../i18n';

export default function Pagamento() {
    const { t } = useTranslation();

    return (
        <>
            <div className="tela-pagamento">
                <div className="container-voltar">
                    <Link to='/'>
                        <a href="" className=""><MdKeyboardArrowLeft className="botao-voltar" alt={t('botão voltar')} /></a>
                    </Link>
                </div>
                <img className="trilha-pagamento" src={Trilha} alt={t('trilha de pagamento')}></img>
                <div className='conteudo'>
                    <PagEsquerda />
                    <PagDireita />
                </div>
            </div>
        </>
    );
}
