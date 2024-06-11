import React from 'react'
import './SessaoPlano.css'
import CardPlano from '../../components/SessaoPlano/CardPlano/CardPlano'

export default function Planos(){
    return(
        <>
           <section className="Plano">
                <h1>Nossas Batidas</h1>
                <h5 className='subtituloPlano'>Conheça alguns dos nossos planos!</h5>
                <section className="columns">
                    <CardPlano
                        titulo="Solo"
                        subtitulo="O que está incluso"
                        descBeneficio={[
                            "Acesso limitado a tablaturas e partituras",
                            "Acesso limitado as nossas aulas disponiveis",
                            "Exibição de anuncios"
                
                        ]}
                        preco="Gratuito"
                        mensalidade="/mês"
                    />
                    <CardPlano
                        titulo="Banda"
                        subtitulo="O que está incluso"
                        descBeneficio={[
                            "Acesso ilimitado a tablaturas e partituras",
                            "Acesso ilimitado as nossas aulas disponiveis",
                            "Remoção de anúncios "
                        ]}
                        preco="R$30"
                        mensalidade="/mês"
                    />
                    <CardPlano
                        titulo="Orquestra"
                        subtitulo="O que está incluso"
                        descBeneficio={[
                            "Participação nas sugestões de novos arranjos",
                            "Contato direto com nossos profissionais de música",
                            " Sugestões de novos exercicios"
                        ]}
                        preco="R$40"
                        mensalidade="/mês"
                    />
                </section>
                <section className='aviso'>
                    <h4>*Todos planos concedem o benefício do anterior</h4>
                </section>
            </section>  
        </>
    )
}