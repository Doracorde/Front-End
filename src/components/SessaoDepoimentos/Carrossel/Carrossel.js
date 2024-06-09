import React from 'react';
import './Carrosel.css';
// import Logo from '../../images/Logo.png'
import {Swiper, SwiperSlide} from 'swiper/react'
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

register();

export default function Carrossel() {
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
                  <h2 className='slide-content'>"Melhor Plataforma de Todas "</h2>
                </aside>
              </aside>
          </SwiperSlide>
          <SwiperSlide>
              <aside className="slide-item">
                <aside className='comentario-slide'>
                  <h2 className='slide-content'>"Melhor Plataforma de Todas 2"</h2>
                </aside>
              </aside>
          </SwiperSlide>
          <SwiperSlide>
              <aside className="slide-item">
                <aside className='comentario-slide'>
                  <h2 className='slide-content'>"Melhor Plataforma de Todas 3"</h2>
                </aside>
              </aside>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

