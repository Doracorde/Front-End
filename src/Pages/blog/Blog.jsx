import React from 'react';
import { useTranslation } from 'react-i18next';
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
import HeaderFaq from '../../components/FaleConosco/headerFaq/headerFaq';

function Blog() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <HeaderFaq />
      <div className="noticias">
        <h5>{t('Blog')}</h5>
        <h3>{t('Notícias')}</h3>
        <p>{t('Fique por dentro das principais notícias sobre o entretenimento, música e arte!')}</p>
      </div>

      <div className="nav-container">
        <ul className="nav-tabs">
          <li className="tab-item active"><a href="#">{t('Ver Todos')}</a></li>
          <li className="tab-item"><a href="#">{t('Sociedade')}</a></li>
          <li className="tab-item"><a href="#">{t('Cinema')}</a></li>
          <li className="tab-item"><a href="#">{t('Televisão')}</a></li>
          <li className="tab-item"><a href="#">{t('Música')}</a></li>
        </ul>
      </div>

      <section className="highlighted-article">
        <img src={noticia1} alt={t('Imagem de dois dados')} />

        <div className="content">
          <span className="category">{t('Notícias')}</span>
          <span className="read-time">5 {t('min de leitura')}</span>
          <h2>{t('Deficientes visuais: saiba como ferramentas podem te ajudar a promover a equidade na sua empresa')}</h2>
          <p>{t('Investir em ferramentas para deficientes visuais é essencial para alcançar a igualdade social. Afinal, elas fazem com que esse grupo consiga explorar todo o seu potencial sem limites. Então, veja quais são elas, entenda como são essenciais no dia a dia e no trabalho.')}</p>
          <Link to='/noticia1'>
            <button>{t('Leia mais')}</button>
          </Link>
        </div>
      </section>

      <main>
        <section className="article-grid">
          <div className="article">
            <div className="article-image">
              <img src={noticia2} alt={t('Imagem de dois dados')} />
            </div>
            <div className="article-content">
              <span className="category">{t('Sociedade')}</span>
              <span className="read-time">3 {t('min de leitura')}</span>
              <h3>{t('É lei: consumidor com deficiência visual pode solicitar contrato em Braille sem custo extra')}</h3>
              <p>{t('Medida vale para documentos de fornecedores de produtos ou serviços de instituições financeiras e similares')}</p>
              <Link to='/noticia2'>
              <button>{t('Leia mais')}</button>
              </Link>
            </div>
          </div>

          <div className="article">
            <div className="article-image">
              <img src={noticia3} alt={t('Imagem de dois dados')} />
            </div>
            <div className="article-content">
              <span className="category">{t('Cinema')}</span>
              <span className="read-time">5 {t('min de leitura')}</span>
              <h3>{t('10 filmes imperdíveis com personagens cegos')}</h3>
              <p>{t('Que tal conhecer melhor o mundo das pessoas cegas e com baixa visão através do cinema?')}</p>
              <Link to='/noticia3'>
              <button>{t('Leia mais')}</button>
              </Link>
            </div>
          </div>

          <div className="article">
            <div className="article-image">
              <img src={noticia4} alt={t('Imagem de dois dados')} />
            </div>
            <div className="article-content">
              <span className="category">{t('Cinema')}</span>
              <span className="read-time">4 {t('min de leitura')}</span>
              <h3>{t('Ator de Anatomia de Uma Queda realmente tem deficiência visual?')}</h3>
              <p>{t('Diretor falou impressionado com a "maneira como Mila falava"')}</p>
              <Link to='/noticia4'>
              <button>{t('Leia mais')}</button>
              </Link>
            </div>
          </div>

          <div className="article">
            <div className="article-image">
              <img src={noticia5} alt={t('Imagem de dois dados')} />
            </div>
            <div className="article-content">
              <span className="category">{t('Cinema')}</span>
              <span className="read-time">5 {t('min de leitura')}</span>
              <h3>{t('Arte salvou minha vida, diz grafiteiro surdo que participa de exposição em São Paulo')}</h3>
              <p>{t('Odrus, que esteve em instituições de ressocialização na adolescência, quer inspirar outras pessoas com deficiência e participa de mostra no Itaú Cultural')}</p>
              <Link to='/noticia5'>
              <button>{t('Leia mais')}</button>
              </Link>
            </div>
          </div>

          <div className="article">
            <div className="article-image">
              <img src={noticia6} alt={t('Imagem de dois dados')} />
            </div>
            <div className="article-content">
              <span className="category">{t('Música')}</span>
              <span className="read-time">4 {t('min de leitura')}</span>
              <h3>{t('Orquestra parassinfônica fará sua estreia na Sala São Paulo')}</h3>
              <p>{t('Músicos com deficiência tiveram aulas para aperfeiçoamento técnico')}</p>
              <Link to='/noticia6'>
              <button>{t('Leia mais')}</button>
              </Link>
            </div>
          </div>

          <div className="article">
            <div className="article-image">
              <img src={noticia7} alt={t('Imagem de dois dados')} />
            </div>
            <div className="article-content">
              <span className="category">{t('Televisão')}</span>
              <span className="read-time">6 {t('min de leitura')}</span>
              <h3>{t("'Todas as Flores': hora da virada e de vingança na nova fase da novela")}</h3>
              <p>{t('Falecimento de João Emanuel Carneiro e o mistério se torna nova fase do streaming; trama é inspirada em \'O Cravo e a Rosa\'.')}</p>
              <Link to='/noticia7'>
              <button>{t('Leia mais')}</button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="newsletter">
          <h3>{t('Se inscreva na newsletter Doracorde')}</h3>
          <iframe
            src="https://doracorde.substack.com/embed"
            width="480"
            height="320"
            style={{ border: '1px solid #EEE', background: 'white' }}
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
      </footer>

      <Footer />
    </>
  );
}

export default Blog;
