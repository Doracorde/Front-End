import React from 'react'
import './SessaoPlano.css'
import CardPlano from '../../components/SessaoPlano/CardPlano/CardPlano'

export default function Planos(){
    return(
        <>
           <section className="Plano">
                <h1>Nossos Planos</h1>
                <h5 className='subtituloPlano'>Conheça alguns dos nossos planos!</h5>
                <section className="columns">
                    <CardPlano
                        titulo="Solo"
                        subtitulo="O que está incluso"
                        descBeneficio={[
                            "Acesso LIMITADO a tablaturas e partituras",
                            "Acesso LIMITADO as nossas aulas",
                            "Exibição de anúncios"
                        ]}
                        preco="Gratuito"
                        mensalidade="/mês"
                    />
                    <CardPlano
                        titulo="Banda"
                        subtitulo="O que está incluso"
                        descBeneficio={[
                            "Acesso LIMITADO a tablaturas e partituras",
                            "Acesso LIMITADO as nossas aulas",
                            "Exibição de anúncios"
                        ]}
                        preco="$30"
                        mensalidade="/mês"
                    />
                    <CardPlano
                        titulo="Orquestra"
                        subtitulo="O que está incluso"
                        descBeneficio={[
                            "Acesso LIMITADO a tablaturas e partituras",
                            "Acesso LIMITADO as nossas aulas",
                            "Exibição de anúncios"
                        ]}
                        preco="$40"
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