import './sotuessanto.css'
import sotuessanto from '../../assets/midia/sotuessanto.mp4'
import sotuessantoimg from '../../assets/img/sotuessanto.png'
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


function Conteudo_direitasotuessanto(){

return(
    <>
    <div className='conteudodireitatocarmusicastablatura'>
        

            <div className='bannermenumusicas'>
                   <iframe src={sotuessanto}/>
                    
            </div>

            <div className='imagemartistatocarmusicastablatura'>
                <img src={sotuessantoimg}/>
            </div>

            <div className='textotocarmusicatablatura'>
                <h6>Só Tu És Santo</h6>
                <h4>Morada</h4>
            </div>

            <div className='botoestocarmusicatablatura'>

            <button className='autorolagemmusicatablatura'>Auto Rolagem</button>

            </div>

            <div className='tablaturatocarmusicatablatura'>
                <h6>
                Tom: <span className='color'>A</span> (forma dos acordes no tom de G)<br/><br/>
Capotraste na<span className='color'>2ª casa</span> <br/>
[Intro] <span className='color'>G9  C6(9)</span> <br/>
<br/>
[Tab - Intro]
<br/>
Parte 1 de 4<br/>
<span className='color'>G9</span> <br/>
E|------------------------------------------|<br/>
B|---------0-------0-------0---------------|<br/>
G|-----0-------0-------0-------0-----------|<br/>
D|---0---0---0---0---0---0---0---0-------|<br/>
A|------------------------------------------|<br/>
E|-3----------------------------------------|<br/>
<br/>
Parte 2 de 4<br/>
<span className='color'> G9</span><br/>
E|------------------------------------------|<br/>
B|---------0-------0-------0---------------|<br/>
G|-----0-------0-------0-------0-----------|<br/>
D|---0---0---0---0---0---0---0---0-------|<br/>
A|------------------------------------------|<br/>
E|-3----------------------------------------|<br/>
<br/>
Parte 3 de 4<br/>
<span className='color'>C6(9)</span><br/>
E|------------------------------------------|<br/>
B|---------0-------0-------0---------------|<br/>
G|-----0-------0-------0-------0-----------|<br/>
D|---0---0---0---0---0---0---0---0-------|<br/>
A|-3----------------------------------------|<br/>
E|-------------------------------------------|<br/>
<br/>
Parte 4 de 4<br/>
<span className='color'>C6(9)</span><br/>
E|------------------------------------------|<br/>
B|---------0-------0-------0---------------|<br/>
G|-----0-------0-------0-------0-----------|<br/>
D|---0---0---0---0---0---0---0---0-------|<br/>
A|-3----------------------------------------|<br/>
E|------------------------------------------|<br/>
<br/>
[Primeira parte]<br/>
<br/>
[Tab - Primeira Parte]<br/>
<br/>
Parte 1 de 8<br/>
<span className='color'> G9</span><br/>
E|-------------------------------------------|<br/>
B|---------0-------0-------0----------------|<br/>
G|-----0-------0-------0-------0-----------|<br/>
D|---0---0---0---0---0---0---0---0-------|<br/>
A|------------------------------------------|<br/>
E|-3----------------------------------------|<br/>
<br/>
Parte 2 de 8<br/>
<span className='color'>G9</span><br/>
E|------------------------------------------|<br/>
B|---------0-------0-------0---------------|<br/>
G|-----0-------0-------0-------0-----------|<br/>
D|---0---0---0---0---0---0---0---0-------|<br/>
A|------------------------------------------|<br/>
E|-3----------------------------------------|<br/>
<br/>
Parte 3 de 8<br/>
<span className='color'>C6(9)</span><br/>
E|------------------------------------------|<br/>
B|---------0-------0-------0---------------|<br/>
G|-----0-------0-------0-------0-----------|<br/>
D|---0---0---0---0---0---0---0---0-------|<br/>
A|-3----------------------------------------|<br/>
E|-------------------------------------------|<br/>
<br/>
Parte 4 de 8<br/>
<span className='color'> C6(9)</span><br/>
E|------------------------------------------|<br/>
B|---------0-------0-------0---------------|<br/>
G|-----0-------0-------0-------0-----------|<br/>
D|---0---0---0---0---0---0---0---0-------|<br/>
A|-3----------------------------------------|<br/>
E|-------------------------------------------|<br/>
<br/>
Parte 5 de 8<br/>
<span className='color'>G9/B</span><br/>
E|-------------------------------------------|<br/>
B|---------0-------0-------0----------------|<br/>
G|-----0-------0-------0-------0-----------|<br/>
D|---0---0---0---0---0---0---0---0-------|<br/>
A|-2----------------------------------------|<br/>
E|-------------------------------------------|<br/>
<br/>
Parte 6 de 8<br/>
<span className='color'>G9/B</span><br/>
E|-------------------------------------------|<br/>
B|---------0-------0-------0---------------|<br/>
G|-----0-------0-------0-------0-----------|<br/>
D|---0---0---0---0---0---0---0---0-------|<br/>
A|-2----------------------------------------|<br/>
E|-------------------------------------------|<br/>
<br/>
Parte 7 de 8<br/>
<span className='color'>  C6(9)            D4</span><br/>
E|--------------------------------------------|<br/>
B|---------0---------------0----------------|<br/>
G|-----0-------0-------0-------0-----------|<br/>
D|---0---0---0---0---0---0---0---0-------|<br/>
A|-3---------------5------------------------|<br/>
E|-------------------------------------------|<br/>
<br/>
Parte 8 de 8<br/>
<span className='color'> C6(9)</span><br/>
E|-------------------------------------------|<br/>
B|---------0-------0-------0----------------|<br/>
G|-----0-------0-------0-------0-----------|<br/>
D|---0---0---0---0---0---0---0---0-------|<br/>
A|-3----------------------------------------|<br/>
E|-------------------------------------------|<br/>
<br/>
<span className='color'>G9</span> <br/>
   Tudo está preparado aqui<br/>
   <span className='color'>C6(9)</span><br/>
      A casa e o meu coração também<br/>
      <span className='color'>G9/B</span>            <br/>             
     Tu és o único motivo <br/>
     <span className='color'>&emsp;&emsp;&emsp;&emsp;C6(9)  D4  C6(9) <br/></span>
Que me fez   che__gar<br/>
<span className='color'>G9<br/></span>
   Os filhos já estão chegando aqui<br/>
   <span className='color'>C6(9)</span><br/>
      Agora, somos dois ou três ou mais<br/>
      <span className='color'>G9/B </span>                <br/>                       
     Encontre meu coração <br/>
     <span className='color'>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;C6(9)  D4  C6(9)<br/></span>
Disposto a queimar    por ti<br/>
<br/>
[Pré-Refrão]<br/>
<br/>
<span className='color'>&emsp;&emsp;&emsp;&emsp;&emsp;G9/B   <br/> </span>             
Todos os versos e canções <br/>
&emsp;&emsp;&emsp;&emsp;<span className='color'>C6(9)</span>  <br/>
Que eu conseguir cantar<br/>
&emsp;&emsp;&emsp;&emsp;&emsp;<span className='color'>G9/B </span>         <br/>        
Todas as vezes quebrantado<br/>
&emsp;&emsp;<span className='color'>C6(9) <br/></span>
Só quero te falar<br/>
<br/>
&emsp;&emsp;&emsp;&emsp;<span className='color'>Em7(11)/B  D4/A      &emsp;&emsp;&emsp;C6(9)/G<br/></span>
Teu é o reino e a glória pra sempre!<br/>
&emsp;&emsp;&emsp;&emsp;&emsp;<span className='color'>Em7(11)/B&emsp;  D4/A   <br/> </span>  
Teu é o domínio e o  poder<br/>
<span className='color'> C6(9)/G</span><br/>
Amém e amém!<br/>
&emsp;&emsp;&emsp;&emsp;<span className='color'>Em7(11)/B  D4/A    &emsp;  C6(9)/G<br/></span>
Teu é o reino e a glória pra sempre!<br/>
&emsp;&emsp;&emsp;&emsp;<span className='color'>Em7(11)/B  D4/A</span>     <br/> 
Teu é o domínio e o  poder<br/>
&emsp;&emsp;<span className='color'>C6(9)/G<br/></span>
Amém e amém!<br/>
<br/><span className='color'>
( G9  C6(9)  G9/B )<br/>
( Am7(11)  G9/B  C6(9) )<br/>
( G9  C6(9)  G9/B )<br/>
( Am7(11)  G9/B  C6(9) )<br/>
<br/></span>
[Refrão Final]<br/>
<br/>
&emsp;&emsp;&emsp;&emsp;<span className='color'>G9             &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; C6(9)</span><br/>
Só tu és santo! Só tu és santo!<br/>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className='color'> G9/B<br/></span>
Não há outro como tu<br/>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; <span className='color'>Am7(11)</span><br/>
Não há outro como tu<br/>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; <span className='color'>G9/B<br/></span>
Não há outro como tu<br/>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; <span className='color'>C6(9)</span><br/>
Não há outro como Jesus<br/>
<br/>
&emsp;&emsp;&emsp;&emsp;<span className='color'>G9&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;C6(9)</span><br/>
Só tu és santo! Só tu és santo!<br/>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className='color'>G9/B<br/></span>
Não há outro como tu<br/>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className='color'>Am7(11)</span><br/>
Não há outro como tu<br/>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className='color'>G9/B<br/></span>
Não há outro como tu<br/>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className='color'>C6(9)<br/></span>
Não há outro como Jesus<br/>
                </h6>
                
            </div>


            
        
        
    </div>
    </>


)

}
export default function Menumusicas(){
    return(
        <>
        <Conteudo_direitasotuessanto />
        <Sidebar />
        </>
    )
}
