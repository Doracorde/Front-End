import './holiday.css'
import holiday from '../../assets/midia/holiday.mp4'
import holidayimg from '../../assets/img/holiday.png'
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



function Conteudo_direitaholiday(){

return(
    <>
    <div className='conteudodireitatocarmusicastablatura'>
        

            <div className='bannermenumusicas'>
                   <iframe src={holiday}/>
                    
            </div>

            <div className='imagemartistatocarmusicastablatura'>
                <img src={holidayimg}/>
            </div>

            <div className='textotocarmusicatablatura'>
                <h6>Holiday</h6>
                <h4>Green Day</h4>
            </div>

            <div className='botoestocarmusicatablatura'>

            <button className='autorolagemmusicatablatura'>Auto Rolagem</button>

            </div>

            <div className='tablaturatocarmusicatablatura'>
                <h6>
                Tom: <span className='color'>A</span><br/>
[Intro] <span className='color'>Fm  Db  Ab  Eb<br/>
&emsp;&emsp;&emsp; Fm  Db  Ab  Eb<br/>
&emsp;&emsp;&emsp;       Fm  Db  Ab  Eb<br/>
&emsp;&emsp;&emsp;       Fm  Db  Ab  Eb<br/>
&emsp;&emsp;&emsp;       F5  Db5  Ab5  Eb5<br/>
&emsp;&emsp;&emsp;       F5  Db5  Ab5  Eb5<br/></span>
        <br/>
[Primeira Parte]<br/>
<br/>
<span className='color'>F5&emsp;&emsp;&emsp;Db5&emsp;&emsp;&emsp;&emsp;          Ab5&emsp;&emsp;     Eb5</span><br/>
   Hear the sound of the falling rain<br/>
   <span className='color'>F5&emsp;&emsp;&emsp;&emsp;&emsp;Db5&emsp;&emsp;&emsp;         Ab5  &emsp;&emsp;C5&emsp;&emsp;      F5</span><br/>
   Coming down like an Armageddon flame <br/>
(hey)<br/>
&emsp;&emsp;&emsp;<span className='color'>Db5      &emsp;&emsp;&emsp;&emsp;Ab5&emsp;&emsp;       Eb5     &emsp;&emsp;&emsp;&emsp;C5</span><br/>
The shame, the ones who died without a name<br/>
<br/>
<span className='color'>F5&emsp;&emsp;&emsp;&emsp;Db5&emsp;&emsp;&emsp;         Ab5&emsp;&emsp;&emsp;     Eb5</span><br/>
   Hear the dogs howling out of key<br/>
   <span className='color'>F5&emsp; Db5&emsp;&emsp;&emsp;&emsp;          Ab5&emsp;&emsp;&emsp;       C5&emsp;&emsp;  F5</span><br/>
   To a hymn called "Faith and Misery" <br/>
(hey)<br/>
&emsp;&emsp;&emsp;<span className='color'>Db5&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;       Ab5&emsp;&emsp;     Eb5&emsp;&emsp;&emsp;      C5</span><br/>
And bleed, the company lost the war today<br/>
<br/>
[Primeiro Refrão]<br/>
<br/>
<span className='color'>F5&emsp;&emsp;&emsp;&emsp;Db5&emsp;&emsp;&emsp;&emsp;&emsp;              Ab5 </span> <br/>
   I beg to dream and differ from the <br/>
   <span className='color'>&emsp;&emsp;&emsp;Eb5</span><br/>
hollow lies<br/>
<span className='color'>F5&emsp;&emsp;&emsp;&emsp;&emsp;Db5&emsp;&emsp;&emsp;&emsp;            Ab5   </span><br/>    
   This is the dawning of the rest of our<br/>
   <span className='color'>C5</span><br/>
 lives<br/>
 <br/>
On Holiday<br/>
<br/>
<span className='color'>( Fm  Db  Ab  Eb )<br/>
( Fm  Db  Ab  Eb )<br/>
<br/></span>
[Segunda Parte]<br/>
<br/>
<span className='color'>F5&emsp;&emsp;&emsp;&emsp;Db5&emsp;&emsp;&emsp;&emsp;         Ab5&emsp;&emsp;     Eb5</span><br/>
   Hear the drum pounding out of time<br/>
   <span className='color'>F5&emsp;&emsp;&emsp;&emsp;Db5&emsp;&emsp;  Ab5&emsp;      C5&emsp;&emsp;&emsp;         F5</span><br/>
   Another protestor has crossed the line <br/>
(hey)<br/>
<span className='color'>&emsp;&emsp;Db5&emsp;&emsp;       Ab5&emsp;&emsp;&emsp;    Eb5&emsp;&emsp;&emsp;    C5</span><br/>
To find, the money's on the other side<br/>
<span className='color'>F5&emsp;&emsp;&emsp;Db5&emsp;&emsp;  Ab5&emsp;&emsp;&emsp;     Eb5</span><br/>
   Can I get another Amen? (Amen)<br/>
   <span className='color'>F5&emsp;&emsp;&emsp;&emsp;Db5</span><br/>
   There's a flag wrapped<br/>
   <span className='color'> Ab5&emsp;&emsp;&emsp;C5&emsp;&emsp;&emsp;      F5</span><br/>
Around a score of men (hey)<br/>
<span className='color'>&emsp;&emsp;&emsp;Db5&emsp;&emsp;&emsp;     Ab5    &emsp;Eb5&emsp;&emsp;&emsp;      C5</span><br/>
A gag, A plastic bag on a monument<br/>
<br/>
[Segundo Refrão]<br/>

<span className='color'>F5&emsp;&emsp;&emsp;Db5&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;              Ab5  </span><br/>
   I beg to dream and differ from the <br/>
   <span className='color'> &emsp;&emsp;&emsp;Eb5</span><br/>
hollow lies<br/>
<span className='color'>F5&emsp;&emsp;&emsp;&emsp;&emsp;Db5&emsp;&emsp;&emsp;&emsp;            Ab5      </span><br/> 
   This is the dawning of the rest of our<br/>
   <span className='color'>C5</span><br/>
 lives<br/>
 <br/>
On Holiday<br/>
<br/>
[Ponte]<br/>
<br/>
E|-----------------------------------------<br/>
B|-----------------------------------------<br/>
G|-------------------6\--3--8\--5----------<br/>
D|-\-3--3--5-6--6-6--6\--3--8\--5----------<br/>
A|-\-3--3--5-6--6-6--4\--1--6\--3----------<br/>
E|-\-1--1--3-4--4-4------------------------<br/>
<br/>
<br/>
E|-----------------------------------------<br/>
B|-----------------------------------------<br/>
G|-----------------8\--5--10---------------<br/>
D|-3--3--5-6--6-6--8\--5--10---------------<br/>
A|-3--3--5-6--6-6--6\--3--8----------------<br/>
E|-1--1--3-4--4-4--------------------------<br/>
<br/>
(Hey!)<br/>
<br/>
E|-----------------------------------------<br/>
B|-----------------------------------------<br/>
G|-------------------6\--3--8\--5----------<br/>
D|-\-3--3--5-6--6-6--6\--3--8\--5----------<br/>
A|-\-3--3--5-6--6-6--4\--1--6\--3----------<br/>
E|-\-1--1--3-4--4-4------------------------<br/>
<br/>
<br/>
E|-----------------------------------------<br/>
B|-----------------------------------------<br/>
G|-----------------8\--5--10---------------<br/>
D|-3--3--5-6--6-6--8\--5--10--\------------<br/>
A|-3--3--5-6--6-6--6\--3--8---\------------<br/>
E|-1--1--3-4--4-4-------------\------------<br/>
<br/>
[Solo] <span className='color'>Db5  Ab5  C5  F5  Eb5<br/>
&emsp;&emsp;&emsp;Db5  Ab5  C5<br/>
       <br/></span>
       <br/>
E|-----------------------------------------<br/>
B|-/6| —6-6-8-9--------------------8--5----<br/>
G|--------------8--6--5~-5-5-5---------5~--<br/>
D|-----------------------------------------<br/>
A|-----------------------------------------<br/>
E|-----------------------------------------<br/>
<br/>
E|----------| <br/>  
B|------------| <br/>
G|5---------|   <br/>
D|----------|  <br/> 
A|----------|   <br/>
E|----------|   <br/>
<br/>
<br/>
E|----8-----8------------------------------<br/>
B|-6-----6-----6-6~--6-6-8-9---------------<br/>
G|-----------------------------8--6--5~--5-<br/>
D|-----------------------------------------<br/>
A|-----------------------------------------<br/>
E|-----------------------------------------<br/>
<br/>
<br/>
E|------12-12-12-12-12--13~~---| <br/>
B|8-8/13-----------------------| <br/>
G|-----------------------------| <br/>
D|-----------------------------| <br/>
A|-----------------------------| <br/>
E|-----------------------------| <br/>
<br/>
[Terceira Parte]<br/>
<br/>
The representative from California has the <br/>
floor<br/>
Zieg Heil to the president gasman<br/>
Bombs away is your punishment<br/>
Pulverize the Eiffel towers<br/>
Who criticize your government<br/>
Bang bang goes the broken glass<br/>
Kill all the fags that don't agree<br/>
Trials by fire, setting fire<br/>
<span className='color'>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Eb5&emsp;   C5&emsp;  F5</span><br/>
Is not a way that's meant for me<br/>
<span className='color'>C5</span><br/>
   Just cause, Just cause, because we're <br/>
outlaws!<br/>
<br/>
[Refrão Final]<br/>
<br/>
<span className='color'>F5&emsp;&emsp;&emsp;Db5&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;              Ab5 </span> <br/>
   I beg to dream and differ from the <br/>
   &emsp;&emsp;&emsp;<span className='color'>Eb5</span><br/>
hollow lies<br/>
<span className='color'>F5&emsp;&emsp;&emsp;&emsp;Db5&emsp;&emsp;&emsp;&emsp;&emsp;            Ab5    </span> <br/>  
   This is the dawning of the rest of our<br/>
   <span className='color'>C5</span><br/>
 lives<br/>
 <span className='color'>F5&emsp;&emsp;&emsp;Db5&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;              Ab5 </span> <br/>
   I beg to dream and differ from the <br/>
   <span className='color'>&emsp;&emsp;&emsp;&emsp;Eb5</span><br/>
hollow lies<br/>
<span className='color'>F5&emsp;&emsp;&emsp;&emsp;&emsp; Db5&emsp;&emsp;&emsp;&emsp;            Ab5     </span> <br/> 
   This is the dawning of the rest of our<br/>
   <span className='color'>C5</span><br/>
 lives<br/>
 <span className='color'>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;F5&emsp;  Db5&emsp;  Ab5&emsp;  Eb5</span><br/>
This is our lives on Holiday<br/>
<br/>
<span className='color'>( F5  Db5  Ab5  Eb5 )<br/>
( F5  Db5  Ab5  Eb5 )<br/>
( F5  Db5   Eb5  C5  F5 )<br/>
( F5 )<br/></span>




                </h6>
                
            </div>


            
        
        
    </div>
    </>


)

}


export default function Menumusicas(){
    return(
        <>
        <Conteudo_direitaholiday />
        <Sidebar />
        </>
    )
}

