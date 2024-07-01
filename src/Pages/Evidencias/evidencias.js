import './evidencias.css'
import evidencias from '../../assets/midia/evidencias.mp4'
import chitaozinhoexororo from '../../assets/img/chitaozinhoexororo.png'
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

function Conteudo_direitaevidencias(){

   
return(
    <>
    
    <div className='conteudodireitatocarmusicastablatura'>
        

            <div className='bannermenumusicas'>
                   <iframe src={evidencias}/>
                    
            </div>

            <div className='imagemartistatocarmusicastablatura'>
                <img src={chitaozinhoexororo}/>
            </div>

            <div className='textotocarmusicatablatura'>
                <h6>Evidências</h6>
                <h4>Chitãozinho & Xororó</h4>
            </div>

            <div className='botoestocarmusicatablatura'>

            <button className='autorolagemmusicatablatura'>Auto Rolagem</button>

            </div>

            <div className='tablaturatocarmusicatablatura'>
                <h6>
                Tom: E<br/><br/>
[Intro] &nbsp; &nbsp;<span className='color'>E  E5+  A  F#m  A/B<br/>
&nbsp;  &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   E  E5+  A  E/G#  F#m<br/>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  A/B  E  A/B</span><br/>
        <br/>
[Primeira Parte]
<br/>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;  &nbsp;  &nbsp;  &nbsp;        <span className='color'>  E  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;                  B/D#</span><br/>
Quando eu digo que deixei de te amar<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;    <span className='color'>C#m7    E7(9)  E6  E7</span><br/>
É porque eu te amo<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;    <span className='color'>  A</span><br/>
Quando eu digo que não quero<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  <span className='color'>  C#7</span><br/>
Mais você<br/>
&nbsp;  &nbsp;<span className='color'>    F#m</span><br/>
É porque eu te quero<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;    <span className='color'>    B7</span><br/>
Eu tenho medo de te dar meu<br/>
&nbsp; <span className='color'>  Cº</span><br/>
Coração<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;    <span className='color'> C#m7</span>  <br/>
E confessar que eu estou<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;   <span className='color'> C#m7/B</span> <br/>
Em tuas mãos<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;   <span className='color'>F#      &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;     E/G#</span><br/>
Mas não posso imaginar<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;<span className='color'>     F#/A#</span>  <br/>
O que vai ser de mim<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; <span className='color'>    B   &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;     A/C# &nbsp;   B/D#</span> <br/>
Se eu te perder um dia<br/>
<br/>
[Segunda Parte]<br/>
<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  <span className='color'>  E</span>  <br/>
Eu me afasto e me defendo<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  <span className='color'>  B/D#</span><br/>
De você<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;    <span className='color'>C#m      &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;      E7(9)  E6  E7</span><br/>
Mas depois me entrego<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;<span className='color'>    A</span><br/>
Faço tipo, falo coisas que<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp; <span className='color'>C#7</span>  <br/>
Eu não sou<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;<span className='color'>F#m</span><br/>
Mas depois eu nego<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; <span className='color'>B7</span><br/>
Mas a verdade é que eu sou<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; <span className='color'>    Cº</span> <br/>
Louco por você<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;   <span className='color'>C#m</span><br/>
E tenho medo de pensar<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;   <span className='color'>Am</span><br/>
Em te perder<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;     <span className='color'>                &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;      A/BE  </span> <br/>
Eu preciso aceitar que não dá mais<br/>
&nbsp;<span className='color'>  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;   E4&nbsp;  &nbsp;  &nbsp;  &nbsp;&nbsp;         E&nbsp;  &nbsp;  &nbsp;  &nbsp;      E4 &nbsp;  &nbsp;   E &nbsp;  &nbsp;   A/B</span><br/>
Pra separar as nossas vidas<br/>
<br/>
[Refrão]<br/>
<br/>
<span className='color'>E</span><br/>
E nessa loucura de dizer<br/>
<br/>
Que não te quero<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;<span className='color'>  G#</span><br/>
Vou negando as aparências<br/>
<br/>
Disfarçando as evidências<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; <span className='color'> A</span><br/>
Mas pra que viver fingindo<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; <span className='color'> F#m</span><br/>
Se eu não posso enganar<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; <span className='color'> B7</span><br/>
Meu coração<br/>
&nbsp;  &nbsp;  &nbsp; <span className='color'> F#m &nbsp;  &nbsp;  &nbsp;  &nbsp;  B7</span><br/>
Eu sei que te amo<br/>
<br/>
&nbsp;  &nbsp; <span className='color'> E</span><br/>
Chega de mentiras<br/>
<br/>
De negar o meu desejo<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;<span className='color'>  G#</span><br/>
Eu te quero mais que tudo<br/>
<br/>
Eu preciso do seu beijo<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;<span className='color'> A</span> <br/>
Eu entrego a minha vida<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;<span className='color'> F#m</span> <br/>
Pra você fazer o que quiser<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp; <span className='color'>B7</span> <br/>
De mim<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;<span className='color'> F#m&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;            B7</span> <br/>
Só quero ouvir você dizer<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;<span className='color'>  E</span><br/>
Que sim<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; <span className='color'> E5+</span><br/>
Diz que é verdade que tem<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp; <span className='color'> A  &nbsp;  &nbsp;  &nbsp;  &nbsp;   E/G#</span><br/>
Saudade<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp; <span className='color'>F#m&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;           B7</span> <br/>
Que ainda você pensa muito<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp; <span className='color'>E</span> <br/>
Em mim<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  <span className='color'>E5+</span><br/>
Diz que é verdade que tem<br/>
&nbsp; <span className='color'> &nbsp;  &nbsp;  &nbsp;  &nbsp;  A&nbsp;  &nbsp;  &nbsp;  &nbsp;     E/G#</span><br/>
Saudade<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp; <span className='color'> F#m&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;            B7</span><br/>
Que ainda você quer viver<br/>
<br/>
Pra mim<br/>
<br/>
[Solo]&nbsp; <span className='color'>&nbsp;   C#m &nbsp; &nbsp;    C5+  &nbsp; &nbsp;   E/B &nbsp;&nbsp;     F#/A#  Am&nbsp;  &nbsp;    A/B</span> <br/>
<br/>

[Tab - Solo]<br/>
<br/>
Parte 1 de 3<br/>
<br/>
E|-16h17~-16~-12~--------------------------------|<br/>
B|-----------------14~--14/19b20/21~------------|<br/>
G|----------------------------------------------------|<br/>
D|----------------------------------------------------|<br/>
A|----------------------------------------------------|<br/>
E|----------------------------------------------------|<br/>

<br/>
Parte 2 de 3<br/>
<br/>
E|-16h17~-16~12~----19b21r19---19~----------|<br/>
B|----------------------------------------------------|<br/>
G|----------------------------------------------------|<br/>
D|----------------------------------------------------|<br/>
A|----------------------------------------------------|<br/>
E|----------------------------------------------------|<br/>
<br/>

Parte 3 de 3<br/>
<br/>
E|-15p12--------12p8--------8p5------------------|<br/>
B|-------13----------10---------5-------------------|<br/>
G|----------12-----------9--------5---7p5--4~-----|<br/>
D|----------------------------------------------------|<br/>
A|----------------------------------------------------|<br/>
E|----------------------------------------------------|<br/>
<br/>
[Segunda Parte]<br/>
<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  <span className='color'>  E</span>  <br/>
Eu me afasto e me defendo<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  <span className='color'>  B/D#</span><br/>
De você<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;    <span className='color'>C#m      &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;      E7(9)  E6  E7</span><br/>
Mas depois me entrego<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;<span className='color'>    A</span><br/>
Faço tipo, falo coisas que<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp; <span className='color'>C#7</span>  <br/>
Eu não sou<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;<span className='color'>F#m</span><br/>
Mas depois eu nego<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; <span className='color'>B7</span><br/>
Mas a verdade é que eu sou<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; <span className='color'>    Cº</span> <br/>
Louco por você<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;   <span className='color'>C#m</span><br/>
E tenho medo de pensar<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;   <span className='color'>Am</span><br/>
Em te perder<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;     <span className='color'>                &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;      A/BE  </span> <br/>
Eu preciso aceitar que não dá mais<br/>
&nbsp;<span className='color'>  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;   E4&nbsp;  &nbsp;  &nbsp;  &nbsp;&nbsp;         E&nbsp;  &nbsp;  &nbsp;  &nbsp;      E4 &nbsp;  &nbsp;   E &nbsp;  &nbsp;   A/B</span><br/>
Pra separar as nossas vidas<br/>
<br/>

[Refrão]<br/>
<br/>
<span className='color'>E</span><br/>
E nessa loucura de dizer<br/>
<br/>
Que não te quero<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;<span className='color'>  G#</span><br/>
Vou negando as aparências<br/>
<br/>
Disfarçando as evidências<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; <span className='color'> A</span><br/>
Mas pra que viver fingindo<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; <span className='color'> F#m</span><br/>
Se eu não posso enganar<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; <span className='color'> B7</span><br/>
Meu coração<br/>
&nbsp;  &nbsp;  &nbsp; <span className='color'> F#m &nbsp;  &nbsp;  &nbsp;  &nbsp;  B7</span><br/>
Eu sei que te amo<br/>
<br/>
&nbsp;  &nbsp; <span className='color'> E</span><br/>
Chega de mentiras<br/>
<br/>
De negar o meu desejo<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;<span className='color'>  G#</span><br/>
Eu te quero mais que tudo<br/>
<br/>
Eu preciso do seu beijo<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;<span className='color'> A</span> <br/>
Eu entrego a minha vida<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;<span className='color'> F#m</span> <br/>
Pra você fazer o que quiser<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp; <span className='color'>B7</span> <br/>
De mim<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;<span className='color'> F#m&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;            B7</span> <br/>
Só quero ouvir você dizer<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;<span className='color'>  E</span><br/>
Que sim<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; <span className='color'> E5+</span><br/>

Diz que é verdade que tem<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp; <span className='color'> A  &nbsp;  &nbsp;  &nbsp;  &nbsp;   E/G#</span><br/>
Saudade<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp; <span className='color'>F#m&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;           B7</span> <br/>
Que ainda você pensa muito<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp; <span className='color'>E</span> <br/>
Em mim<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  <span className='color'>E5+</span><br/>
Diz que é verdade que tem<br/>
&nbsp; <span className='color'> &nbsp;  &nbsp;  &nbsp;  &nbsp;  A&nbsp;  &nbsp;  &nbsp;  &nbsp;     E/G#</span><br/>
Saudade<br/>
&nbsp;  &nbsp;  &nbsp;  &nbsp; <span className='color'> F#m&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;            B7</span><br/>
Que ainda você quer viver<br/>
<br/>
Pra mim<br/>
<br/>
                </h6>
                
            </div>


            
        
        
    </div>
    </>


)

}
  
export default function Menumusicas(){
    return(
        <>
        <Conteudo_direitaevidencias />
        <Sidebar />
        </>
    )
}
