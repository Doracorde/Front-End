import './lugaraosol.css'
import lugaraosol from '../../assets/midia/lugaraosol.mp4'
import lugaraosolimg from '../../assets/img/lugaraosol.png'
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


function Conteudo_direitalugaraosol(){

return(
    <>
    <div className='conteudodireitatocarmusicastablatura'>
        

            <div className='bannermenumusicas'>
                   <iframe src={lugaraosol}/>
                    
            </div>

            <div className='imagemartistatocarmusicastablatura'>
                <img src={lugaraosolimg}/>
            </div>

            <div className='textotocarmusicatablatura'>
                <h6>Lugar Ao Sol</h6>
                <h4>Charlie Brown Jr.</h4>
            </div>

            <div className='botoestocarmusicatablatura'>

            <button className='autorolagemmusicatablatura'>Auto Rolagem</button>

            </div>

            <div className='tablaturatocarmusicatablatura'>
                <h6>
                Tom: <span className='color'>Am</span> (forma dos acordes no tom de Gm)<br/>
Afinação:<span className='color'> Eb Ab Db Gb Bb Eb</span><br/>
Capotraste na <span className='color'>2ª casa</span><br/>
[Introdução] <span className='color'>F#m  E5  D7M<br/>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; F#m  E5  D7M<br/></span>
             <br/>
             <span className='color'>F#m&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;E5</span><br/>
E|------------------------------------------|<br/>
B|-----2-----------------------2------------|<br/>
G|---------2-4-------4-----2-4--------------|<br/>
D|-4-----4-------2-------2------------------|<br/>
A|------------------------------------------|<br/>
E|------------------------------------------|<br/>
<br/>
<span className='color'>  D7M</span><br/>
E|-----2-----5---2---0-------0-2------------|<br/>
B|-------2-5-------------2------------------|<br/>
G|------------------------------------------|<br/>
D|-0----------------------------------------|<br/>
A|------------------------------------------|<br/>
E|------------------------------------------|<br/>
<br/>
<span className='color'>F#m</span><br/>
E|------------------------------------------|<br/>
B|-----2-----------------------2------------|<br/>
G|---------2-4-------4-----2-4--------------|<br/>
D|-4-----4-------2-------2------------------|<br/>
A|------------------------------------------|<br/>
E|------------------------------------------|<br/>
<br/>
<span className='color'> D7M</span><br/>
E|-2----------------------------------------|<br/>
B|-2----------------------------------------|<br/>
G|-2----------------------------------------|<br/>
D|-0----------------------------------------|<br/>
A|------------------------------------------|<br/>
E|------------------------------------------|<br/>
<br/>
<br/>
[Primeira Parte]<br/>
<br/>
<span className='color'>F#m&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;E5</span><br/>
E|------------------------------------------|<br/>
B|-----2-----------------------2------------|<br/>
G|---------2-4-------4-----2h4---6p4p2------|<br/>
D|-4-----4-------2-------2------------------|<br/>
A|-4-------------2--------------------------|<br/>
E|-2-------------0--------------------------|<br/>
<br/>
<span className='color'> D7M</span><br/>
E|-----2------------------------------------|<br/>
B|-----2-----5-5-5---2---5---2-2------------|<br/>
G|-----2-----2-2-2---2---2---2-2------------|<br/>
D|-0---------------0---0---0----------------|<br/>
A|------------------------------------------|<br/>
E|------------------------------------------|<br/>
<br/>
<span className='color'>F#m&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;E5</span><br/>
E|------------------------------------------|<br/>
B|-----2-----------------------2------------|<br/>
G|---------2-4-------4-----2h4---6p4p2------|<br/>
D|-4-----4-------2-------2------------------|<br/>
A|-4-------------2--------------------------|<br/>
E|-2-------------0--------------------------|<br/>
<br/>
<span className='color'>D7M</span><br/>
E|-----2-----2-2-2---2-2-2---2-2-2----------|<br/>
B|-----2-----2-2-2---2-2-2---2-2-2----------|<br/>
G|-----2-----2-2-2---2-2-2---2-2-2----------|<br/>
D|-0----------------------------------------|<br/>
A|------------------------------------------|<br/>
E|------------------------------------------|<br/>
<br/>
<span className='color'>F#m&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;E5</span><br/>
E|------------------------------------------|<br/>
B|-----2-----------------------2------------|<br/>
G|---------2-4-------4-----2h4---6p4p2------|<br/>
D|-4-----4-------2-------2------------------|<br/>
A|-4-------------2--------------------------|<br/>
E|-2-------------0--------------------------|<br/>
<br/>
<span className='color'>D7M</span><br/>
E|-----2------------------------------------|<br/>
B|-----2-----5-5-5---2---5---2-2------------|<br/>
G|-----2-----2-2-2---2---2---2-2------------|<br/>
D|-0---------------0---0---0----------------|<br/>
A|------------------------------------------|<br/>
E|------------------------------------------|<br/>
<br/>
<span className='color'>F#m&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;E5</span><br/>
E|------------------------------------------|<br/>
B|-----2-----------------------2------------|<br/>
G|---------2-4-------4-----2h4---6p4p2------|<br/>
D|-4-----4-------2-------2------------------|<br/>
A|-4-------------2--------------------------|<br/>
E|-2-------------0--------------------------|<br/>
<br/>
<span className='color'> D7M</span><br/>
E|-2-----2----------------------------------|<br/>
B|-2--------2-------------------------------|<br/>
G|-2----------2-----------------------------|<br/>
D|-0---0------------------------------------|<br/>
A|------------------------------------------|<br/>
E|------------------------------------------|<br/>
<br/>
<span className='color'>F#m</span><br/>
&emsp;&emsp;Que bom viver<br/>
&emsp;&emsp;&emsp;&emsp;<span className='color'>E5</span><br/>
Como é bom sonhar<br/>
&emsp;&emsp;&emsp;&emsp;&emsp;<span className='color'>D7M</span><br/>
E o que ficou pra trás passou <br/>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className='color'>F#m</span><br/>
E eu não me importei<br/>
&emsp;&emsp;&emsp;&emsp; <span className='color'>E5</span><br/>
Foi até melhor<br/>
&emsp;&emsp;&emsp;&emsp;&emsp;<span className='color'>D7M</span><br/>
Tive que pensar <br/>
<br/>
Em algo novo que fizesse sentido<br/>
&emsp;&emsp;&emsp;&emsp;<span className='color'>F#m</span><br/>
Ainda vejo o mundo <br/>
&emsp;&emsp;&emsp;&emsp; <span className='color'>E5</span><br/>
Com os olhos    de criança<br/>
<span className='color'> D7M</span><br/>
Que só quer brincar <br/>
<br/>
E não tanta responsa<br/>
&emsp;&emsp;&emsp;&emsp;<span className='color'>F#m</span><br/>
Mas a vida cobra sério <br/>
&emsp;&emsp;&emsp;<span className='color'> E5 </span>   &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;             D7M<br/>
E realmente não dá pra fugir<br/>
<br/>
<br/>
[Primeiro Refrão]<br/>
<br/>
<span className='color'>A7M&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;A9</span>  <br/>
E|---------------0--------------------------|<br/>
B|---------------0--------------------------|<br/>
G|---------------6--------------------------|<br/>
D|-6-6-6-6-6-7---7--------------------------|<br/>
A|-7-7-7-7-7-7------------------------------|<br/>
E|-5-5-5-5-5-5-5----------------------------|<br/>
<br/>
<span className='color'> F#m9&emsp;&emsp;&emsp;&emsp; D5</span><br/>
E|------------------------------------------|<br/>
B|------------------------------------------|<br/>
G|---------------7-7-7-7-7-7-7--------------|<br/>
D|-6-6-6-6-6-6-6-7-7-7-7-7-7-7--------------|<br/>
A|-4-4-4-4-4-4-4-5-5-5-5-5-5-5-5h7----------|<br/>
E|-2-2-2-2-2-2-2----------------------------|<br/>
<br/>
<span className='color'> A7M&emsp;&emsp;&emsp;&emsp;&emsp;A9</span>  <br/>
E|---------------0--------------------------|<br/>
B|---------------0--------------------------|<br/>
G|---------------6--------------------------|<br/>
D|-6-6-6-6-6-7---7--------------------------|<br/>
A|-7-7-7-7-7-7------------------------------|<br/>
E|-5-5-5-5-5-5-5----------------------------|<br/>
<br/>
<span className='color'>D5&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Dm7      &emsp;&emsp;&emsp;   F5/E  F5</span><br/>
E|------------------------------------------|<br/>
B|------------------------------------------|<br/>
G|-7-7-7-7-7-7-7-10-10-10-10-10-10-10-10-10-|<br/>
D|-7-7-7-7-7-7-7-10-10-10-10-10-10-10-10-10-|<br/>
A|-5-5-5-5-5-5-5--5--5--5--5--7--7--8--8--8-|<br/>
E|------------------------------------------|<br/>
<br/>
<span className='color'>A7M&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;A9 </span><br/>
Livre pra poder sorrir, sim<br/>
<span className='color'>F#m9&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;D5</span><br/>
Livre pra poder buscar <br/>
&emsp;&emsp;&emsp;  <span className='color'>A7M&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;A9  ( D5  Dm7  F5/E  F5 )</span><br/>
O meu lugar ao sol<br/>




                </h6>
                
            </div>


            
        
        
    </div>
    </>


)

}

export default function Menumusicas(){
    return(
        <>
        <Conteudo_direitalugaraosol />
        <Sidebar />
        </>
    )
}
