import React from 'react';
import Styles from './Fam.module.css';
import Button from '../../components/my-button/Button.jsx';
import arq from './information.json';
import img from './assets/doodle-fam.svg';
import {Heading} from '@chakra-ui/react';

function Fam () {
  return(
    <div className={Styles.famMainDiv}>
      <div className={Styles.famInsideContainer}>
        <div className={Styles.famLeftContainer}>
          <Heading>{arq.titulo}</Heading>
          <p>No SIAC o candengue tem Prioridade</p>
          <p>Venha tratar aqui o primeiro bilhete de identidade do seu filho</p>
          <Button size="10rem" text={arq.callToAction} color="#fff" bg="rgb(0, 127, 255)" hbg=" rgb(0, 127, 255)"/>
        </div>
        <div className={Styles.right}><img src={img} alt="black-fam" /></div>
      </div>
    </div>
  );
}

export default Fam;