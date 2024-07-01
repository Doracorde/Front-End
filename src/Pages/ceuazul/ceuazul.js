import './ceuazul.css'
import ceuazul from '../../assets/midia/ceuazul.mp4'
import ceuazulimg from '../../assets/img/ceuazul.png'
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


function Conteudo_direitaceuazul(){

return(
    <>
    <div className='conteudodireitatocarmusicastablatura'>
        

            <div className='bannermenumusicas'>
                   <iframe src={ceuazul}/>
                    
            </div>

            <div className='imagemartistatocarmusicastablatura'>
                <img src={ceuazulimg}/>
            </div>

            <div className='textotocarmusicatablatura'>
                <h6>Céu Azul</h6>
                <h4>Charlie Brown Jr.</h4>
            </div>

            <div className='botoestocarmusicatablatura'>

            <button className='autorolagemmusicatablatura'>Auto Rolagem</button>

            </div>

            <div className='tablaturatocarmusicatablatura'>
                <h6>
                Tom: <span className='color'> Fm</span> (forma dos acordes no tom de Em)<br/>
Capotraste na <span className='color'>1ª casa</span><br/>
[Intro] <span className='color'>Em7(9)  D  Bm  A11</span><br/>
<br/>
[Dedilhado - Intro]<br/>
<br/>
Parte 1 de 2<br/>
<span className='color'> Em7(9)&emsp;&emsp;&emsp;&emsp;&emsp;D</span><br/>
E|------------------------------------------|<br/>
B|------------------------------------------|<br/>
G|----12---12---------12-------12-12--------|<br/>
D|----13---13---------13-------13-13--------|<br/>
A|------------------------------------------|<br/>
E|--0----0----0----11----11-11-------0------|<br/>
<br/>
    <br/>
Parte 2 de 2<br/>
<span className='color'>&emsp;  Bm    &emsp;&emsp;&emsp;       A11</span><br/>
E|------------------------------------------|<br/>
B|------------------------------------------|<br/>
G|----8---8--------7-----8-7----------------|<br/>
D|----0---0--------0---------0--------------|<br/>
A|------------------------------------------|<br/>
E|--8---8---0----6---6-6-------0------------|<br/>
<br/>
    <br/>
[Primeira Parte] <br/>
<br/>
<span className='color'>&emsp;&emsp;&emsp;&emsp; Em7(9)&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; D</span><br/>
Tão natural quanto a luz do dia<br/>
<span className='color'>&emsp;&emsp;&emsp;&emsp;&emsp;Bm </span>     <br/>
Mas que preguiça boa <br/>
<span className='color'>   &emsp;&emsp;&emsp;&emsp;&emsp;A11</span><br/>
Me deixa aqui a toa<br/>
<span className='color'>    &emsp;&emsp;&emsp;&emsp;&emsp; Em7(9)               &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; D</span><br/>
Hoje ninguém vai estragar meu dia<br/>
<span className='color'>     &emsp;&emsp;&emsp;&emsp;&emsp;Bm    </span> <br/>    
Só vou gastar energia <br/>
<span className='color'>   &emsp;&emsp;&emsp;A11</span><br/>
Pra beijar sua boca<br/>
<span className='color'>Em7(9)  </span>                <br/>
       Fica comigo então <br/>  
       <span className='color'>D</span><br/>
  Não me abandona não<br/>
  <span className='color'>Bm &emsp;&emsp; A11  &emsp;                Em7(9)</span><br/>
        Alguém te perguntou <br/>
        <span className='color'>  &emsp;&emsp;  D</span><br/>
Como é que foi seu dia<br/>
<span className='color'> &emsp;&emsp;&emsp;&emsp; Bm   </span> <br/>     
Uma palavra amiga<br/>
<span className='color'>  &emsp;&emsp; A11</span><br/>
Uma notícia boa<br/>
<span className='color'>  &emsp;&emsp;    Em7(9)   &emsp;&emsp;       D</span><br/>
Isso faz falta no dia a dia<br/>
<span className='color'>           Bm </span> <br/>
A gente nunca sabe <br/>
<span className='color'>      A11</span><br/>
Quem são essas pessoas<br/>
<br/>
[Pré-Refrão] <br/>
<br/>
<span className='color'>&emsp;&emsp;Em          &emsp;&emsp;            Bm11</span><br/>
   Eu só queria te lembrar<br/>
   <span className='color'> &emsp;&emsp;&emsp;A9</span><br/>
Que aquele tempo <br/>
<br/>
Eu não podia fazer mais por nós<br/>
<span className='color'>  &emsp;&emsp;&emsp;&emsp;  G   </span><br/>
Eu estava errado <br/>
<span className='color'>         &emsp;&emsp;&emsp;          A9</span><br/>
E você não tem que me perdoar<br/>
<span className='color'>&emsp;Em           &emsp;&emsp;               Bm11</span><br/>
   Mas também quero te mostrar<br/>
   <span className='color'>      &emsp;&emsp;  A9</span><br/>
Que existe um lado bom nessa história<br/>
<span className='color'> G &emsp;&emsp;&emsp;                                 A9</span><br/>
Tudo que ainda temos a compartilhar<br/>
<br/>
[Refrão] <br/>
<br/>
<span className='color'> &emsp;&emsp; Em7(9) &emsp;&emsp;&emsp;   D</span><br/>
E viver, e cantar<br/>
<span className='color'>   Bm  &emsp;&emsp;              A11&emsp;&emsp;</span><br/>
Não importa qual seja o dia<br/>
<span className='color'>    Em7(9)  D</span><br/>
Vamos viver, vadiar<br/>
<span className='color'>    &emsp;  Bm      &emsp;&emsp;&emsp;           A11</span><br/>
O que importa é nossa alegria<br/>
<span className='color'>    &emsp;   Em7(9) &emsp;&emsp;   D</span><br/>
Vamos viver, e cantar<br/>
<span className='color'>    Bm          &emsp;&emsp;&emsp;      A11</span><br/>
Não importa qual seja o dia<br/>
<span className='color'>  &emsp;&emsp;  Em7(9)&emsp;&emsp;&emsp;  D</span><br/>
Vamos viver, vadiar<br/>
<span className='color'>      Bm                 A11</span><br/>
O que importa é nossa alegria<br/>
<br/>
[Primeira Parte] <br/>
<br/>
<span className='color'>  &emsp;&emsp;Em7(9)    &emsp;&emsp;&emsp;           D</span><br/>
Tão natural quanto a luz do dia<br/>
<span className='color'>    Bm         &emsp;&emsp;      A11</span><br/>
Mas que preguiça boa me deixa aqui a toa<br/>
<span className='color'>       Em7(9)    &emsp;&emsp;            D</span><br/>
Hoje ninguém vai estragar meu dia<br/>
<span className='color'>    &emsp;&emsp;&emsp;  Bm        &emsp;&emsp;         A11</span><br/>
Só vou gastar energia pra beijar sua boca<br/>
<br/>
[Pré-Refrão] <br/>
<br/>
<span className='color'>&emsp;&emsp;&emsp;Em                  &emsp;&emsp;&emsp;    Bm11</span><br/>
   Eu só queria te lembrar<br/>
   <span className='color'>     &emsp;&emsp;&emsp;   A9</span><br/>
Que aquele tempo <br/>
<br/>
Eu não podia fazer mais por nós<br/>
<span className='color'>         &emsp;&emsp; G </span>  <br/>
Eu estava errado <br/>
<span className='color'>                             A9&emsp;&emsp;&emsp;</span><br/>
E você não tem que me perdoar<br/>
<span className='color'>&emsp;&emsp;&emsp;Em                  &emsp;&emsp;&emsp;       Bm11</span><br/>
   Mas também quero te mostrar<br/>
   <span className='color'>         &emsp;&emsp;&emsp;A9&emsp;&emsp;</span>   <br/>
Que existe um lado bom nessa história<br/>
<span className='color'>&emsp;&emsp;G                                &emsp;&emsp;&emsp;  A9</span><br/>
Tudo que ainda temos a compartilhar<br/>
<br/>
[Refrão] <br/>
<br/>
<span className='color'> &emsp;&emsp; Em7(9) &emsp;&emsp;&emsp;   D</span><br/>
E viver, e cantar<br/>
<span className='color'>   &emsp;&emsp;Bm            &emsp;&emsp;&emsp;    A11</span><br/>
Não importa qual seja o dia<br/>
<span className='color'>   &emsp;&emsp;&emsp;&emsp; Em7(9)&emsp;&emsp;  D</span><br/>
Vamos viver, vadiar<br/>
<span className='color'>  &emsp;&emsp; Bm               &emsp;&emsp;&emsp;  A11</span><br/>
O que importa é nossa alegria<br/>
<span className='color'> &emsp;&emsp;Em7(9)  &emsp;&emsp;&emsp;  D</span><br/>
Vamos viver, e cantar<br/>
<span className='color'>   &emsp;&emsp;  Bm &emsp;&emsp;&emsp;               A11</span><br/>
Não importa qual seja o dia<br/>
<span className='color'>   &emsp;&emsp;&emsp;&emsp; Em7(9) &emsp;&emsp; D</span><br/>
Vamos viver, vadiar<br/>
<span className='color'>&emsp;&emsp;Bm    &emsp;&emsp;&emsp;             A11</span><br/>
O que importa é nossa alegria<br/>
<br/>
[Final] <br/>
<br/>
<span className='color'>   Em7(9)</span><br/>
Tão natural quanto a luz do dia<br/>




                </h6>
                
            </div>


            
        
        
    </div>
    </>


)

}

  
export default function Menumusicas(){
    return(
        <>
        <Conteudo_direitaceuazul />
        <Sidebar />
        </>
    )
}

