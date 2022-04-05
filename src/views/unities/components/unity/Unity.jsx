import React from 'react';
import Styles from './Unity.module.css';
import img from '../../assets/black-yellow.jpg';
import { MdFmdGood } from 'react-icons/md';
import {Heading} from '@chakra-ui/react';
import {BsClockHistory,BsDash} from 'react-icons/bs';


function Unity(props){

  return (
    <div className={Styles.unityContainer}>
      <img className={Styles.unityIMG} src={img} alt=""/>
      <div className={Styles.unityChildContainer}>
        <Heading size='md'>{props.unity.name}</Heading>
        <div className={Styles.adress}>
          <MdFmdGood/> 
          <span>{props.unity.adress}</span>
        </div>
        <hr className={Styles.unitySimpleLine}/>
        <div className={Styles.schedule}>
          <div style={{ border:'1px dashed #a2a1a1'}} className={Styles.scheduler}>
            <BsClockHistory/>
            <span className={Styles.innerText}>{props.unity.abertura}</span>
            <BsDash/>
            <span className={Styles.innerText}>{props.unity.encerramento + " " + "H"}</span>
          </div>
          <div className={Styles.scheduler} style={{color:props.status.color,backgroundColor:props.status.bGcolor}}>{props.status.status}</div>
        </div>
        <p className={Styles.unityDesciption}>{props.unity.descriprion}</p>
        
        <button className={Styles.locateBtn}>Leva-me lá</button>
      </div>   
    </div>
  );

 
}
export default Unity;