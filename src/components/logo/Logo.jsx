import React from 'react';
import styles from './Logo.module.css';
import minImg from './assets/logo_ministerio.svg';
import siacImg from './assets/siac.svg';
import pngLogo from './assets/logo.png'

export default function Logo(props){
  const isTrigger = props.isTrigger;
  if(isTrigger){
    return(
      <div className={styles.logoContainer}>
         <img src={minImg}
           className={styles.minLogo}/>
         <img src={siacImg}
           className={styles.siacLogo}
         />
      </div>
    );
  } else{
    return(
      <div className={styles.logoContainer}>
         <img src={pngLogo}
           className={styles.minPngLogo}/>
      </div>
    );  
  }
  

}