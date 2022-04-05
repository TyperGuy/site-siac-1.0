import React from 'react';
import pub from './assets/publicity.png';
import Style from './Publicity.module.css';
import Button from './components/my-button/Button.jsx';

function Publicity(){
  return(
    <div className={Style.publicityContainer}>
        <img className={Style.publicityContainer} src={pub}/>
        <Button className={Style.button} text="Visitar Anunciante" color="rgb(0, 127, 255)" bg="#fff" hbg="#fff" size="200px"/>
    </div>
    
  )
}

export default Publicity;