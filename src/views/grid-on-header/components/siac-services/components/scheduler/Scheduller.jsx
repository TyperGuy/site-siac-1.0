import React from 'react';
import Style from './Scheduller.module.css';
import img from './assets/scheduller.png';
import {Heading} from '@chakra-ui/react';
import arq from './information.json';
import Button from '../../../../../../components/my-button/Button';




function Scheduller(){
  const URL ="https://www.siac.gv.ao/pt/siac-online";
  return( 

    <div className={Style.main}>
        <div className={Style.mainContainer}>
          <div className={Style.contentContainer}>
            <Heading size="md" >{arq.titulo}</Heading>
            <p>{arq.conteudo}</p>
            <a href={URL}><Button text={arq.callToAction} color="#fff" bg="transparent" hbg="#ff0c0c"/></a>
          </div>
          <img src={img} className={Style.img} alt="" />
          
        
       </div>

    </div>
    
  )
}

export default Scheduller;