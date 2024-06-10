import React from 'react';
import './Carrosel.css';
// import Logo from '../../images/Logo.png'
import {Swiper, SwiperSlide} from 'swiper/react'
import { register } from 'swiper/element/bundle';
import Nota from '../../../assets/img//Star 1.svg'
import FotoComentario from '../../../assets/img/foto-comentario.svg'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

register();

export default function Carrossel(props) {
  return (
    <>
      <section className='container-slide'>
        <Swiper
          slidesPerView={1}
          pagination={{clickable:true}}
          navigation
        >
          <SwiperSlide>
              <aside className="slide-item">
                <aside className='comentario-slide'>
                  <article className='card-comentario'>

                    <span className='foto-comentario'>
                      <img src={FotoComentario}></img>
                    </span>

                    <aside className='nome-comentario'>
                      <h3>{props.nomeComentario} </h3>
                    </aside>

                    <aside className='nota-comentario'>
                      <img src={Nota}></img>
                      <img src={Nota}></img>
                      <img src={Nota}></img>
                      <img src={Nota}></img>
                      <img src={Nota}></img>
                    </aside>

                    <aside className='comentario-texto'>
                      <h4>{props.textoDepoimento}</h4>
                    </aside>
                  </article>
                </aside>
              </aside>
          </SwiperSlide>
          <SwiperSlide>
              <aside className="slide-item">
                <aside className='comentario-slide'>
                  <article className='card-comentario'>

                      <span className='foto-comentario'>
                        <img src={FotoComentario}></img>
                      </span>

                      <aside className='nome-comentario'>
                        <h3>{props.nomeComentario} </h3>
                      </aside>

                      <aside className='nota-comentario'>
                        <img src={Nota}></img>
                        <img src={Nota}></img>
                        <img src={Nota}></img>
                        <img src={Nota}></img>
                       
                      </aside>

                      <aside className='comentario-texto'>
                        <h4>{props.textoDepoimento}</h4>
                      </aside>

                  </article>
                </aside>
              </aside>
          </SwiperSlide>
          <SwiperSlide>
              <aside className="slide-item">
                <aside className='comentario-slide'>
                  <article className='card-comentario'>

                    <span className='foto-comentario'>
                      <img src={FotoComentario}></img>
                    </span>

                    <aside className='nome-comentario'>
                      <h3>{props.nomeComentario} </h3>
                    </aside>

                    <aside className='nota-comentario'>
                      <img src={Nota}></img>
                      <img src={Nota}></img>
                      <img src={Nota}></img>
                    </aside>

                    <aside className='comentario-texto'>
                      <h4>{props.textoDepoimento}</h4>
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

