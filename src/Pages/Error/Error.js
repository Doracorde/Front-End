import React from 'react';
import './Error.css'
import { Link } from 'react-router-dom';
export default function Error() {
  return (
    <>
      <section>
        <div className='error-container'>
          <h5>404 - Página não encontrada</h5>
          <p>Desculpe, a página que você está procurando não existe.</p>
          <Link to='/'>
            <button className='button-error'>Voltar para a página inicial</button>
          </Link>
        </div>

      </section>

    </>
  )
}
