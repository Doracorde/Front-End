import './harrypottertheme.css'
import harrypottertheme from '../../assets/midia/harrypottertheme.mp4'
import harrypotterthemeimg from '../../assets/img/harrypotterheme.png'
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


function Conteudo_direitaharrypottertheme(){

return(
    <>
    <div className='conteudodireitatocarmusicastablatura'>
        

            <div className='bannermenumusicas'>
                   <iframe src={harrypottertheme}/>
                    
            </div>

            <div className='imagemartistatocarmusicastablatura'>
                <img src={harrypotterthemeimg}/>
            </div>

            <div className='textotocarmusicatablatura'>
                <h6>Harry Potter Theme</h6>
                <h4>Temas de Filmes</h4>
            </div>

            <div className='botoestocarmusicatablatura'>

            <button className='autorolagemmusicatablatura'>Auto Rolagem</button>

            </div>

            <div className='tablaturatocarmusicatablatura'>
                <h6>
                Tom:  <span className='color'>A</span><br/>
E|--0--3-2-0--7-5--2--0--3-2---1-----|<br/>
B|0--------------------------4---0------|<br/>
G|---------------------------------------|<br/>
D|---------------------------------------|<br/>
A|---------------------------------------|<br/>
E|---------------------------------------|<br/>
<br/>
E|--0--3-2-0--7-10--9-8--5-8--7-6----|<br/>
B|0-------------------------------0-------|<br/>
G|----------------------------------------|<br/>
D|----------------------------------------|<br/>
A|----------------------------------------|<br/>
E|----------------------------------------|<br/>
<br/>
E|3-0--3-7--3-7--3-8--7-6--2-3--7-6--|<br/>
B|----------------------------------0-----|<br/>
G|----------------------------------------|<br/>
D|----------------------------------------|<br/>
A|----------------------------------------|<br/>
E|----------------------------------------|<br/>
<br/>
E|--7--3-7--3-7--3-10--9-8--5-8--7-6-|<br/>
B|0----------------------------------------|<br/>
G|-----------------------------------------|<br/>
D|-----------------------------------------|<br/>
A|-----------------------------------------|<br/>
E|-----------------------------------------|<br/>
<br/>
E|2--3-0----0--3-2-0--7-10--9-8--5-8-|<br/>
B|--------0--------------------------------|<br/>
G|-----------------------------------------|<br/>
D|-----------------------------------------|<br/>
A|-----------------------------------------|<br/>
E|-----------------------------------------|<br/>
<br/>
E|7-6-----3-0--0---------------------|<br/>
B|-----0-----------------------------|<br/>
G|-----------------------------------|<br/>
D|-----------------------------------|<br/>
A|-----------------------------------|<br/>
E|-----------------------------------|<br/>




                </h6>
                
            </div>


            
        
        
    </div>
    </>


)

}

  
export default function Menumusicas(){
    return(
        <>
        <Conteudo_direitaharrypottertheme />
        <Sidebar />
        </>
    )
}
