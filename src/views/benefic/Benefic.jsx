import Style from './Benefic.module.css';
import img from './assets/girl.png';
import {Heading} from '@chakra-ui/react';

export default function Benefic(){
  return(
    <div className={Style.sup}>
      <div className={Style.mainContainer}>
        <div className={Style.textContainer}>
          <Heading size="2xl">Os melhores serviços comportados num mesmo espaço físico. <span>SIAC</span> , a casa de todo cidadão!</Heading>
        </div>
        <img src={img} alt="girl" className={Style.img}/>
      </div>
    </div>
    
  )
}



