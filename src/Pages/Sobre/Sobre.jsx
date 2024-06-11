import React from 'react';
import ValoresDoracorde from '../../components/ValoresDoracorde/valoresdoracorde';
import DevDoracorde from '../../components/DevDoracorde/devdoracorde';
import Footer from '../../components/Footer/footer';
import HeaderSobre from '../../components/HeaderSobre/headerSobre';



export default function Sobre() {
  return(
    <>
      <HeaderSobre/>
      <ValoresDoracorde/>
      <DevDoracorde/> 
      <Footer/> 
    </>
   
  ) 
}
