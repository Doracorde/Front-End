import React from 'react'
import './SessaoPlano.css'
import CardPlano from '../../components/SessaoPlano/CardPlano/CardPlano'
import { Link } from "react-router-dom";
import './SessaoPlano.css';
import { useTranslation } from 'react-i18next';

export default function Planos(){
    const { t } = useTranslation();

    return(
        <>
           <section className="Plano">
                <h1>{t('Nossas Batidas')}</h1>
                <h5 className='subtituloPlano'>{t('Conheça alguns dos nossos planos!')}</h5>
                <section className="columns">
                    <CardPlano
                        titulo={t('Solo')}
                        subtitulo={t('O que está incluso')}
                        descBeneficio={[
                            t('Acesso limitado a tablaturas e partituras'),
                            t('Acesso limitado as nossas aulas disponiveis'),
                            t('Exibição de anuncios')
                        ]}
                        preco={t('Gratuito')}
                        mensalidade={t('/mês')}
                    />
                    <CardPlano
                        titulo={t('Banda')}
                        subtitulo={t('O que está incluso')}
                        descBeneficio={[
                            t('Acesso ilimitado a tablaturas e partituras'),
                            t('Acesso ilimitado as nossas aulas disponiveis'),
                            t('Remoção de anúncios ')
                        ]}
                        preco={t('R$30')}
                        mensalidade={t('/mês')}
                    />
                    <CardPlano
                        titulo={t('Orquestra')}
                        subtitulo={t('O que está incluso')}
                        descBeneficio={[
                            t('Participação nas sugestões de novos arranjos'),
                            t('Contato direto com nossos profissionais de música'),
                            t('Sugestões de novos exercicios')
                        ]}
                        preco={t('R$40')}
                        mensalidade={t('/mês')}
                    />
                </section>
                <section className='aviso'>
                    <h4>{t('*Todos planos concedem o benefício do anterior')}</h4>
                </section>
            </section>  
        </>
    )
}
