
import Styles from './Stats.module.css';
import StatsFile from './Stats.json';
import Information from './Information.jsx';
import {Heading} from '@chakra-ui/react';

const Stats = () =>{
  
  return(
    <div className={Styles.statsContainer}>
      <div className={Styles.statsInnerContainer}>
        <div className={Styles.titleContainer}><Heading size='lg'>{StatsFile.title}</Heading></div>
        <Information/>
      </div>
    </div>
  )
}


export default  Stats;

