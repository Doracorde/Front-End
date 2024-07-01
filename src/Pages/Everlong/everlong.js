import './everlong.css'
import foofighters from '../../assets/midia/foofighters.mp4'
import foofightersimg from '../../assets/img/foofighters.png'
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


function Conteudo_direitaeverlong(){

return(
    <>
    <div className='conteudodireitatocarmusicastablatura'>
        

            <div className='bannermenumusicas'>
                   <iframe src={foofighters}/>
                    
            </div>

            <div className='imagemartistatocarmusicastablatura'>
                <img src={foofightersimg}/>
            </div>

            <div className='textotocarmusicatablatura'>
                <h6>Everlong</h6>
                <h4>Foo Fighters</h4>
            </div>

            <div className='botoestocarmusicatablatura'>

            <button className='autorolagemmusicatablatura'>Auto Rolagem</button>

            </div>

            <div className='tablaturatocarmusicatablatura'>
                <h6>
                Tom: <span className='color'>D</span><br/>
Afinação:<span className='color'> D  A  D  G  B  E</span><br/>
<br/>
[Intro] <span className='color'>D7M  B5(9)  G5(9)  B5(9) <br/>
&emsp;&emsp;&emsp;D7M  B5(9)  G5(9)  B5(9) </span><br/>
        <br/>
[Primeira Parte]<br/>
<br/>
<span className='color'>D7M</span><br/>
Hello<br/>
<span className='color'>  &emsp;&emsp;&emsp;B5(9)</span><br/>
I've waited here for you<br/>
<span className='color'>G5(9)   B5(9)</span><br/>
      Everlong<br/>
      <span className='color'>D7M</span><br/>
Tonight<br/>
<span className='color'>  B5(9)</span><br/>
I throw myself into<br/>
<span className='color'>G5(9)      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;           B5(9)</span><br/>
      And out of the red, out of her head she sang<br/>
      <br/>
      <span className='color'>( D7M &emsp; B5(9) &emsp; G5(9) &emsp; B5(9) )</span><br/>
<br/>
[Primeira Parte]<br/>
<br/>
<span className='color'> D7M</span><br/>
Come down<br/>
<span className='color'> &emsp;&emsp;B5(9)</span><br/>
And waste away with me<br/>
<span className='color'>G5(9)  &emsp;&emsp;&emsp;     B5(9)</span><br/>
      Down with me<br/>
      <span className='color'> D7M</span><br/>
Slow how<br/>
<span className='color'>&emsp;&emsp; B5(9)</span><br/>
You wanted it to be<br/>
<br/>
<span className='color'>G5(9)        &emsp;&emsp;&emsp;&emsp;      B5(9)</span><br/>
      I'm over my head, out of her head she sang<br/>
      <br/>
[Segunda Parte]<br/>
<br/>
[Riff Segunda Parte]<br/>
<br/>
<span className='color'>( C# &emsp; D &emsp; E &emsp; F#&emsp;  G &emsp; F# &emsp; A5 )</span><br/>
<br/>
And I wonder<br/>
When I sing along with you<br/>
<br/>
[Refrão]<br/>
<br/>
<span className='color'>B5&emsp;&emsp;&emsp;&emsp;&emsp;G5      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;             D5</span><br/>
   If everything could ever feel this real forever<br/>
   <span className='color'>B5&emsp;&emsp;&emsp;&emsp;&emsp;G5  &emsp;&emsp;&emsp;&emsp;&emsp;   &emsp;         D5</span><br/>
   If anything could ever be this good again<br/>
   <span className='color'>&emsp;&emsp;&emsp;B5    &emsp;&emsp;&emsp;                 G5           &emsp;&emsp;&emsp;   D5</span><br/>
   The only thing I'll ever ask of you<br/>
   <span className='color'>                              A5      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;        G5</span><br/>
You've got to promise not to stop when I say when<br/>
She sang<br/>
<br/>
<span className='color'>( D7M  B5(9)  G5(9)  B5(9) )</span><br/>
<br/>
[Primeira Parte]<br/>
<br/>
<span className='color'> D7M</span><br/>
Breathe out<br/>
<span className='color'> &emsp;&emsp;&emsp;&emsp;B5(9)</span><br/>
So I can breathe you in<br/>
<span className='color'>G5(9)    &emsp;&emsp;&emsp;&emsp;   B5(9)</span><br/>
      Hold you in<br/>
      <span className='color'>&emsp;&emsp;D7M</span><br/>
And now<br/>
<span className='color'>  &emsp;&emsp;&emsp;&emsp;&emsp;B5(9)</span><br/>
I know you've always been<br/>
<span className='color'>G5(9)      &emsp;&emsp;&emsp;&emsp;&emsp;        B5(9)</span><br/>
      Out of your head, out of my head I sang<br/>
      <br/>
[Segunda Parte]<br/>
<br/>
[Riff Segunda Parte]<br/>
<br/>
<span className='color'>( C#  D  E  F#  G  F#  A5 )</span><br/>
<br/>
And I wonder<br/>
When I sing along with you<br/>
<br/>
[Refrão]<br/>
<br/>
<span className='color'>B5&emsp;&emsp;&emsp;&emsp;&emsp; G5  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;                 D5</span><br/>
   If everything could ever feel this real forever<br/>
   <span className='color'>B5         &emsp;&emsp;&emsp;&emsp;&emsp;            G5     &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;         D5</span><br/>
   If anything could ever be this good again<br/>
   <span className='color'>B5         &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;            G5     &emsp;&emsp;&emsp;&emsp;&emsp;      D5</span><br/>
   The only thing I'll ever ask of you<br/>
   <span className='color'>    &emsp;&emsp;&emsp;&emsp;&emsp;        A5     &emsp;&emsp;&emsp;&emsp;         G5</span><br/>
You've got to promise not to stop when I say when<br/>
She sang<br/>
<br/>
<span className='color'>( D7M  B5(9)  G5(9)  B5(9) )<br/>
( D7M  B5(9)  G5(9)  B5(9) )<br/></span>
<br/>
[Riff Segunda Parte]<br/>
<br/>
<span className='color'>( C#  D  E  F#  G  F#  A5 )<br/>
( C#  D  E  F#  G  F#  A5 )<br/>
( C#  D  E  F#  G  F#  A5 )<br/>
( C#  D  E  F#  G  F#  A5 )<br/>
( C#  D  E  F#  G  F#  A5 )<br/></span>
<br/>
[Refrão]<br/>
<br/>
<span className='color'>B5     &emsp;&emsp;&emsp;                  G5          &emsp;&emsp;&emsp;&emsp;         D5</span><br/>
   If everything could ever feel this real forever<br/>
   <span className='color'>B5       &emsp;&emsp;&emsp;&emsp;              G5    &emsp;&emsp;&emsp;&emsp;&emsp;          D5</span><br/>
   If anything could ever be this good again<br/>
   <span className='color'>B5              &emsp;&emsp;&emsp;&emsp;&emsp;       G5     &emsp;&emsp;&emsp;&emsp;      D5</span><br/>
   The only thing I'll ever ask of you<br/>
   <span className='color'> A5    &emsp;&emsp;&emsp;&emsp;          G5</span><br/>
You've got to promise not to stop when I say when<br/>
She sang<br/>
<br/>
<span className='color'>( D7M &emsp; B5(9)  &emsp;G5(9) &emsp; B5(9) )<br/>
( D7M &emsp; B5(9) &emsp; G5(9) &emsp; B5(9) )<br/></span>




                </h6>
                
            </div>


            
        
        
    </div>
    </>


)

}

export default function Menumusicas(){
    return(
        <>
        <Conteudo_direitaeverlong />
        <Sidebar />
        </>
    )
}
