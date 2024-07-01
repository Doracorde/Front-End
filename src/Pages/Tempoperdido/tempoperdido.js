import './tempoperdido.css'
import tempoperdido from '../../assets/midia/tempoperdido.mp4'
import tempoperdidoimg from '../../assets/img/tempoperdido.png'
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

function Sidebar() {
    const { t } = useTranslation();
  
    return (
      <div className="sidebar">
        <Link to="/dashdora">
          <img src={HomeIcon} alt={t("Aprender")} className="sidebar-icon" />
          {t("Aprender")}
        </Link>
        <Link to="/praticar">
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


function Conteudo_direitatempoperdido(){

return(
    <>
    <div className='conteudodireitatocarmusicastablatura'>
        

            <div className='bannermenumusicas'>
                   <iframe src={tempoperdido}/>
                    
            </div>

            <div className='imagemartistatocarmusicastablatura'>
                <img src={tempoperdidoimg}/>
            </div>

            <div className='textotocarmusicatablatura'>
                <h6>Tempo Perdido</h6>
                <h4>Legião Urbana</h4>
            </div>

            <div className='botoestocarmusicatablatura'>

            <button className='autorolagemmusicatablatura'>Auto Rolagem</button>

            </div>

            <div className='tablaturatocarmusicatablatura'>
                <h6>
                Tom: <span className='color'> Em</span><br/>
[Intro]<span className='color'> Em  C  Am7  Bm  Em</span><br/>
<br/>
[Tab - Intro]<br/>
<br/>
<span className='color'> C7M</span><br/>
E|-----------------------------------------|<br/>
B|-------12-------12-------12-------12-----|<br/>
G|----12-------12-------12-------12--------|<br/>
D|-10-------10-------10-------10-----------|<br/>
A|-----------------------------------------|<br/>
E|-----------------------------------------|<br/>
<br/>
<span className='color'>Am7&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Bm7</span><br/>
E|-----------------------------------------|<br/>
B|----8-----8------8------8-------10-----10|<br/>
G|--9-----9------9------9------11------11--|<br/>
D|7-----7------7------7------9-------9-----|<br/>
A|-----------------------------------------|<br/>
E|-----------------------------------------|<br/>
<br/>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className='color'>E5</span><br/>
E|-----------------------------------------|<br/>
B|------10------10-------------------------|<br/>
G|---11------11-----------9-----9-----9----|<br/>
D|-9-------9------------9---9-----9-----9--|<br/>
A|-------------------7--------7-----7------|<br/>
E|-----------------0-----------------------|<br/>
<br/>
&emsp;&emsp;<span className='color'>D5</span><br/>
E|-----------------------------------------|<br/>
B|-----------------------------------------|<br/>
G|---7-------------------------------------|<br/>
D|-----7-----------------------------------|<br/>
A|-5---------------------------------------|<br/>
E|-----------------------------------------|<br/>
<br/>
[Primeira Parte]<br/>
<br/>
[Tab - Estrofes]<br/>
<br/>
<span className='color'> C&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Am7</span><br/>
E|-----------------------------------------|<br/>
B|------1-1-1---0-1--------1-----3-----1---|<br/>
G|----0------------------0---0-----0-----0-|<br/>
D|--2---------2--------2-------------2----2|<br/>
A|3------------------0---------------------|<br/>
E|-----------------------------------------|<br/>
<br/>
<span className='color'> Bm7&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Em</span><br/>
E|--------------------------------2----3---|<br/>
B|------0-3-----1-----------0-------0----0-|<br/>
G|----2----2------2-----------0-0----0----0|<br/>
D|--0--------0------0-----2----------------|<br/>
A|2-------------------2--------------------|<br/>
E|----------------------0------------------|<br/>
<br/>
[Tab - Variação]<br/>
<br/>
&emsp;&emsp;<span className='color'>Am7</span><br/>
E|-----------------------------------------|<br/>
B|------1---------3------------------------|<br/>
G|----0---0-----0---0----------------------|<br/>
D|--2-------2/4----------------------------|<br/>
A|0----------------------------------------|<br/>
E|-----------------------------------------|<br/>
<br/>
&emsp;&emsp;&emsp;&emsp;&emsp;<span className='color'>C                 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Am7</span><br/>
Todos os dias quando acordo<br/>
<span className='color'>Bm&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Em</span><br/>
   Não tenho mais o tempo que passou<br/>
   &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className='color'>C&emsp;&emsp;&emsp;          Am7</span><br/>
Mas tenho muito tempo<br/>
&emsp;&emsp;&emsp;<span className='color'>Bm&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;              Em</span><br/>
Temos todo o tempo do mundo<br/>
<span className='color'>C&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Am7</span><br/>
  Todos os dias antes de dormir<br/>
  <span className='color'>Bm&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Em</span><br/>
Lembro e esqueço como foi o dia<br/>
 <span className='color'>C&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Am7</span><br/>
Sempre em frente<br/>
&emsp;&emsp;<span className='color'>Bm&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Em</span><br/>
Não temos tempo a perder<br/>
&emsp;&emsp;&emsp;<span className='color'>C&emsp;&emsp;&emsp;&emsp;          Am7</span><br/>
Nosso suor sagrado<br/>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className='color'>Bm</span><br/>
É bem mais belo que esse<br/>
&emsp;&emsp;&emsp;&emsp;<span className='color'>Em</span><br/>
Sangue amargo<br/>
&emsp;&emsp;&emsp;&emsp;<span className='color'>C&emsp;&emsp;    Am7</span><br/>
E tão sério<br/>
<br/>
&emsp;&emsp;<span className='color'>Bm&emsp;&emsp;  Em</span><br/>
E selva__gem<br/>
&emsp;&emsp;<span className='color'>Bm &emsp;&emsp; Em</span><br/>
E selva__gem<br/>
&emsp;&emsp;&emsp;<span className='color'>Bm </span>  (passagem)<br/>
E selvagem<br/>

[Tab - Passagem]<br/>
<br/>
&emsp;&emsp;&emsp;H.N.     . . . .<br/>
B|-----------------------------------------|<br/>
G|-----12----------7-----------------------|<br/>
D|-----12--------7---7---------------------|<br/>
A|-----12------7---------------------------|<br/>
E|-----------------------------------------|<br/>
E|-0---------------------------------------|<br/>
<br/>
[Segunda Parte]<br/>
<br/>
<span className='color'>C&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Am7&emsp;&emsp;&emsp;         Bm</span><br/>
Veja o sol dessa manhã tão cinza<br/>
&emsp;&emsp;&emsp;&emsp; <span className='color'>Em     &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;             C</span><br/>
A tempestade que chega é da cor<br/>
&emsp;&emsp;&emsp;&emsp;&emsp;<span className='color'>Am7</span><br/>
Dos teus olhos<br/>
&emsp;&emsp;<span className='color'>Bm &emsp; Em</span><br/>
Casta_nhos<br/>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className='color'>C  &emsp;&emsp;&emsp;       Am7</span><br/>
Então me abraça forte<br/>
&emsp;<span className='color'>Bm</span><br/>
E diz mais uma vez<br/>
&emsp;&emsp;&emsp;&emsp;&emsp;<span className='color'>Em  &emsp;&emsp;     <span className='color'>C    &emsp;&emsp;&emsp;     Am7</span></span><br/>
Que já estamos distantes de tudo<br/>
<br/>
<span className='color'>Bm&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Em</span><br/>
Temos nosso próprio tempo<br/>
<span className='color'>Bm&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Em</span><br/>
Temos nosso próprio tempo<br/>
<span className='color'>Bm&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Em</span><br/>
Temos nosso próprio tempo<br/>
<br/>
[Terceira Parte]<br/>
<br/>
&emsp;&emsp;&emsp;<span className='color'>C&emsp;&emsp;Am7      &emsp;&emsp;&emsp;     Bm</span><br/>
Não tenho medo     do escuro<br/>
&emsp;&emsp;&emsp; <span className='color'>Em     &emsp;&emsp;     C   &emsp;&emsp;&emsp;     Am7</span><br/>
Mas deixe    as luzes   acesas<br/>
&emsp;<span className='color'>Bm &emsp; Em</span><br/>
Ago__ra<br/>
<br/>
&emsp;&emsp;&emsp;&emsp;<span className='color'>C     &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;             Am7</span><br/>
O que foi escondido é o que se escondeu<br/>
&emsp;&emsp;&emsp;&emsp;<span className='color'>Bm</span><br/>
E o que foi prometido<br/>
&emsp;&emsp;&emsp;<span className='color'>Em</span><br/>
Ninguém prometeu<br/>
&emsp;&emsp;&emsp;&emsp;&emsp;<span className='color'>C      &emsp;&emsp;&emsp;      Am7</span><br/>
Nem foi tempo perdido<br/>
&emsp;&emsp;&emsp;&emsp;&emsp;<span className='color'>Bm &emsp; Em</span><br/>
Somos tão jo__vens<br/>
&emsp;&emsp;&emsp;&emsp;<span className='color'>Bm &emsp;&emsp; Em   &emsp;&emsp;&emsp;     Bm  </span> (passagem)<br/>
Tão jo__vens, tão jovens<br/>




                </h6>
                
            </div>


            
        
        
    </div>
    </>


)

}

export default function Menumusicas(){
    return(
        <>
        <Conteudo_direitatempoperdido />
        <Sidebar />
        </>
    )
}
