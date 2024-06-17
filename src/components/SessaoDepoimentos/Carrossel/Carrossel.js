import React from 'react';
import './Carrosel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from 'swiper/element/bundle';
import { useTranslation } from 'react-i18next';
import Nota from '../../../assets/img/Star 1.svg';
import FotoComentario from '../../../assets/img/foto-comentario.svg';
import Cleffs from '../../../assets/img/cleffs.jpg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

register();

export default function Carrossel(props) {
  const { t } = useTranslation();

  return (
    <>
      <section className='container-slide'>
        <Swiper
          slidesPerView={3}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 3000 }}
        >
          <SwiperSlide>
            <aside className='slide-item'>
              <aside className='comentario-slide'>
                <article className='card-comentario'>
                  <span className='foto-comentario'>
                    <img src={FotoComentario} alt='Foto de comentário' />
                  </span>
                  <aside className='nome-comentario'>
                    <h3>{t('James Baxter')}</h3>
                  </aside>
                  <aside className='nota-comentario'>
                    <img src={Nota} alt='Nota' />
                    <img src={Nota} alt='Nota' />
                    <img src={Nota} alt='Nota' />
                    <img src={Nota} alt='Nota' />
                    <img src={Nota} alt='Nota' />
                  </aside>
                  <aside className='comentario-texto'>
                    <h4>"{t('Plataforma revolucionária, método de ensino bem feito.')}"</h4>
                  </aside>
                </article>
              </aside>
            </aside>
          </SwiperSlide>
          <SwiperSlide>
            <aside className='slide-item'>
              <aside className='comentario-slide'>
                <article className='card-comentario'>
                  <span className='foto-comentario'>
                    <img src='https://avatars.githubusercontent.com/u/33496735?v=4' alt='Avatar' />
                  </span>
                  <aside className='nome-comentario'>
                    <h3>{t('Gabriel Azevedo')}</h3>
                  </aside>
                  <aside className='nota-comentario'>
                    <img src={Nota} alt='Nota' />
                    <img src={Nota} alt='Nota' />
                    <img src={Nota} alt='Nota' />
                    <img src={Nota} alt='Nota' />
                  </aside>
                  <aside className='comentario-texto'>
                    <h4>"{t('Tecnologia aplicada da melhor maneira, plataforma fácil de usar.')}"</h4>
                  </aside>
                </article>
              </aside>
            </aside>
          </SwiperSlide>
          <SwiperSlide>
            <aside className='slide-item'>
              <aside className='comentario-slide'>
                <article className='card-comentario'>
                  <span className='foto-comentario'>
                    <img src={Cleffs} alt='Foto de Cleffs' />
                  </span>
                  <aside className='nome-comentario'>
                    <h3>{t('Gabryel Venâncio')}</h3>
                  </aside>
                  <aside className='nota-comentario'>
                    <img src={Nota} alt='Nota' />
                    <img src={Nota} alt='Nota' />
                    <img src={Nota} alt='Nota' />
                    <img src={Nota} alt='Nota' />
                    <img src={Nota} alt='Nota' />
                  </aside>
                  <aside className='comentario-texto'>
                    <h4>"{t('Jamais acreditaria que uma plataforma como esta existisse.')}"</h4>
                  </aside>
                </article>
              </aside>
            </aside>
          </SwiperSlide>
          <SwiperSlide>
            <aside className='slide-item'>
              <aside className='comentario-slide'>
                <article className='card-comentario'>
                  <span className='foto-comentario'>
                    <img src='https://avatars.githubusercontent.com/u/158758040?v=4' alt='Avatar' />
                  </span>
                  <aside className='nome-comentario'>
                    <h3>{t('Iago Matheus')}</h3>
                  </aside>
                  <aside className='nota-comentario'>
                    <img src={Nota} alt='Nota' />
                    <img src={Nota} alt='Nota' />
                    <img src={Nota} alt='Nota' />
                  </aside>
                  <aside className='comentario-texto'>
                    <h4>"{t('Adorei a plataforma, os exercícios, mas gostaria de mais músicas.')}"</h4>
                  </aside>
                </article>
              </aside>
            </aside>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}
