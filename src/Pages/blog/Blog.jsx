import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import Logo from '../../assets/img/Logo.png';
import Footer from '../../components/Footer/footer';
import noticia1 from '../../assets/img/noticia1.png';
import noticia2 from '../../assets/img/noticia2.png';
import noticia3 from '../../assets/img/filmes-imperdiveis.png';
import noticia4 from '../../assets/img/noticia3.png';
import noticia5 from '../../assets/img/noticia4.png';
import noticia6 from '../../assets/img/noticia5.png';
import noticia7 from '../../assets/img/noticia6.png';
import HeaderFaq from '../../components/FaleConosco/headerFaq/headerFaq'


export default function Blog() {
  return (
    <>
      
      <HeaderFaq/>
      <div className="noticias">
        <h5>Blog</h5>
        <h3>Noticias</h3>
        <p>Fique por dentro das principais noticias sobre o entretenimento, música e arte!</p>
      </div>

      <div className="nav-container">
        <ul className="nav-tabs">
          <li className="tab-item active"><a href="#">Ver Todos</a></li>
          <li className="tab-item"><a href="#">Sociedade</a></li>
          <li className="tab-item"><a href="#">Cinema</a></li>
          <li className="tab-item"><a href="#">Televisão</a></li>
          <li className="tab-item"><a href="#">Música</a></li>
        </ul>
      </div>

        <section class="highlighted-article">
          <img src={noticia1} alt="Imagem de dois dados"/>

          <div class="content">
            <span class="category">Notícias</span>
            <span class="read-time">5 min de leitura</span>
            <h2>Deficientes visuais: saiba como ferramentas podem te ajudar a promover a equidade na sua empresa</h2>
            <p>Investir em ferramentas para deficientes visuais é essencial para alcançar a igualdade social. Afinal, elas fazem com que esse grupo consiga explorar todo o seu potencial sem limites. Então, veja quais são elas, entenda como são essenciais no dia a dia e no trabalho.</p>
            <button>Leia mais</button>
          </div>
        </section>
      <main>

        <section className="article-grid">
          <div className="article">
            <div className="article-image">
            <img src={noticia2} alt="Imagem de dois dados"/>
            </div>
            <div className="article-content">
              <span className="category">Sociedade</span>
              <span className="read-time">3 min de leitura</span>
              <h3>É lei: consumidor com deficiência visual pode solicitar contrato em Braille sem custo extra</h3>
              <p>Medida vale para documentos de fornecedores de produtos ou serviços de instituições financeiras e similares</p>
              <button>Leia mais</button>
            </div>
          </div>

          <div className="article">
            <div className="article-image">
            <img src={noticia3} alt="Imagem de dois dados"/>
            </div>
            <div className="article-content">
              <span className="category">Cinema</span>
              <span className="read-time">5 min de leitura</span>
              <h3>10 filmes imperdíveis com personagens cegos</h3>
              <p>Que tal conhecer melhor o mundo das pessoas cegas e com baixa visão através do cinema?</p>
              <button>Leia mais</button>
            </div>
          </div>

          <div className="article">
            <div className="article-image">
            <img src={noticia4} alt="Imagem de dois dados"/>
            </div>
            <div className="article-content">
              <span className="category">Cinema</span>
              <span className="read-time">4 min de leitura</span>
              <h3>Ator de Anatomia de Uma Queda realmente tem deficiência visual?</h3>
              <p>Diretor falou impressionado com a "maneira como Mila falava"</p>
              <button>Leia mais</button>
            </div>
          </div>

          <div className="article">
            <div className="article-image">
            <img src={noticia5} alt="Imagem de dois dados"/>
            </div>
            <div className="article-content">
              <span className="category">Cinema</span>
              <span className="read-time">5 min de leitura</span>
              <h3>Brasília terá mostra de cinema para deficientes visuais em setembro</h3>
              <p>Versão Inclusiva de Capitol Na Tela disponibilizará quatro filmes com audiodescrições integradas e uma curta-metragem</p>
              <button>Leia mais</button>
            </div>
          </div>

          <div className="article">
            <div className="article-image">
            <img src={noticia6} alt="Imagem de dois dados"/>
            </div>
            <div className="article-content">
              <span className="category">Música</span>
              <span className="read-time">4 min de leitura</span>
              <h3>Orquestra Parassinfônica encerra temporada 2023 na Sala São Paulo</h3>
              <p>A Orquestra Parassinfônica de São Paulo - OPESP - a primeira orquestra brasileira que dá protagonismo a pessoas com deficiência, retorna à Sala São Paulo.</p>
              <button>Leia mais</button>
            </div>
          </div>

          <div className="article">
            <div className="article-image">
            <img src={noticia7} alt="Imagem de dois dados"/>
            </div>
            <div className="article-content">
              <span className="category">Televisão</span>
              <span className="read-time">6 min de leitura</span>
              <h3>'Todas as Flores': hora da virada e de vingança na nova fase da novela</h3>
              <p>Falecimento de João Emanuel Carneiro e o mistério se torna nova fase do streaming; trama é inspirada em 'O Cravo e a Rosa'.</p>
              <button>Leia mais</button>
            </div>
          </div>
        </section>

      </main>

      <footer className="footer">
        <div className="newsletter">
          <h3>Se inscreva na newsletter Doracorde</h3>
          <form className="form">
            <input type="email" placeholder="Seu melhor email" />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </footer>

      <Footer />
    </>
  );
}
