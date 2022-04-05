
import {Heading} from '@chakra-ui/react';
import Animated from '../animated/Animated';
import Style from './Wather.module.css';

const Wather = () =>{
  return(
    <div className={Style.weather}>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent:'center',alignItems: 'center'}}>
        <Heading size="lg">30.1 {"°"}</Heading>
        <span>{"Min 30 -- Max 31.9"}</span>
      </div>
      <Animated/>
    </div>
  )
}

export default Wather;