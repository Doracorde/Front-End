import './menumusicas.css'
import imagembannermenumusicas2 from '../../assets/img/imagembannermenumusicas.png'
import imagemum from '../../assets/img/imagemum.png'
import imagemdois from '../../assets/img/imagemdois.png'
import imagemtres from '../../assets/img/imagemtres.png'
import imagemquatro from '../../assets/img/imagemquatro.png'
import imagemcinco from '../../assets/img/imagemcinco.png'
import imagemseis from '../../assets/img/imagemseis.png'
import imagemsete from '../../assets/img/imagemsete.png'
import imagemoito from '../../assets/img/imagemoito.png'
import instrumentosum from '../../assets/img/instrumentosum.png'
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HomeIcon from '../../assets/img/home-icon.png';
import PracticeIcon from '../../assets/img/practice.png';
import SoundIcon from '../../assets/img/sound.png';
import ProfileIcon from '../../assets/img/profile-icon.png';
import MoreIcon from '../../assets/img/more.png';
import Sair from '../../assets/img/sair.png';
import { useTranslation } from 'react-i18next';
import '../../i18n'



function Conteudo_direitamenumusicas() {

  return (
    <>
      <div className='conteudodireitamenumusicas'>


        <div className='bannermenumusicas2'>
          <img className='imagembannertablatura' alt='Imagem de um homem segurando um violão' src={imagembannermenumusicas2} />

        </div>

        <div className='titulotodasasmusicasmenumusicas'><h1>Todas as músicas para tocar</h1></div>
        <div className='agrupamentomenumusicas'>

          <span className='linksmenumusicas'><a href='/tocarmusicas/evidencias'><div className='menumusicas'><img className='numerosmusicasmenu' src={imagemum} /><h6>Evidências</h6><h5>Chitãozinho & Xororó</h5><img className='instrumentosmenumusicas' alt='Tablatura e partitura' src={instrumentosum} /></div></a></span>

          <span className='linksmenumusicas'><a href='/tocarmusicas/sotuessanto'><div className='menumusicas'><img className='numerosmusicasmenu' src={imagemdois} /><h6>Só Tu És Santo</h6><h5>Morada</h5><img className='instrumentosmenumusicas' alt='Tablatura e partitura' src={instrumentosum} /></div></a></span>

          <span className='linksmenumusicas'><a href='/tocarmusicas/lugaraosol'><div className='menumusicas'><img className='numerosmusicasmenu' src={imagemtres} /><h6>Lugar Ao Sol</h6><h5>Charlie Brown Jr.</h5><img className='instrumentosmenumusicas' alt='Tablatura e partitura' src={instrumentosum} /></div></a></span>

          <span className='linksmenumusicas'> <a href='/tocarmusicas/tempoperdido'><div className='menumusicas'><img className='numerosmusicasmenu' src={imagemquatro} /><h6>Tempo Perdido</h6><h5>Legião Urbana</h5><img className='instrumentosmenumusicas' alt='Tablatura e partitura' src={instrumentosum} /></div></a></span>

        </div>

        <div className='agrupamentomenumusicas2'>
          <span className='linksmenumusicas'><a href='/tocarmusicas/holiday'><div className='menumusicas'><img className='numerosmusicasmenu' src={imagemcinco} /><h6>Holiday</h6><h5>Green Day</h5><img className='instrumentosmenumusicas' alt='Tablatura e partitura' src={instrumentosum} /></div></a></span>

          <span className='linksmenumusicas'><a href='/tocarmusicas/harrypottertheme'><div className='menumusicas'><img className='numerosmusicasmenu' src={imagemseis} /><h6>Harry Potter Theme</h6><h5>Temas de Filmes</h5><img className='instrumentosmenumusicas' alt='Tablatura e partitura' src={instrumentosum} /></div></a></span>

          <span className='linksmenumusicas'><a href='/tocarmusicas/ceuazul'><div className='menumusicas'><img className='numerosmusicasmenu' src={imagemsete} /><h6>Céu Azul</h6><h5>Charlie Brown Jr.</h5><img className='instrumentosmenumusicas' alt='Tablatura e partitura' src={instrumentosum} /></div></a></span>

          <span className='linksmenumusicas'><a href='/tocarmusicas/everlong'><div className='menumusicas'><img className='numerosmusicasmenu' src={imagemoito} /><h6>Everlong</h6><h5>Foo Fighters</h5><img className='instrumentosmenumusicas' alt='Tablatura e partitura' src={instrumentosum} /></div></a></span>

        </div>



        <div className='mostrarmaismenumusicas'>Mostrar mais músicas</div>




      </div>
    </>


  )

}
function Sidebar() {
  const { t } = useTranslation();

  return (
    <div className="sidebar">
      <Link to="/dashdora">
        <img src={HomeIcon} alt={t("Aprender")} className="sidebar-icon" />
        {t("Aprender")}
      </Link>
      <Link to="/menumusicas">
        <img src={PracticeIcon} alt={t("Tocar músicas")} className="sidebar-icon" />
        {t("Tocar músicas")}
      </Link>
      <Link to="/sons">
        <img src={SoundIcon} alt={t("Sons")} className="sidebar-icon" />
        {t("Sons")}
      </Link>
      <Link to="/perfil">
        <img src={ProfileIcon} alt={t("Perfil")} className="sidebar-icon" />
        {t("Perfil")}
      </Link>
      <Link to="/">
        <img src={MoreIcon} alt={t("Mais")} className="sidebar-icon" />
        {t("Mais")}
      </Link>
      <Link to="/">
        <img src={Sair} alt={t("Sair")} className="sidebar-icon" />
        {t("Sair")}
      </Link>
    </div>
  );
}



export default function Menumusicas() {
  return (
    <>
      <Conteudo_direitamenumusicas />
      <Sidebar />
    </>
  )
}

