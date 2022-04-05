import {RiStore3Fill as Home,RiHomeGearFill as Servicer,RiTeamFill as Partner} from 'react-icons/ri';
import Stats from './Stats.json';
import Styles from './Stats.module.css';
const Information = (props) =>{
  return(
      <div className={Styles.statsInfContainer}>
           
           <div className={Styles.statsComponent}>
              <div className={Styles.up}>
                <div className={Styles.iconContainer}><Home /></div>
                <span className={Styles.metrics}>{Stats.unity.unities}</span>
              </div>
              <span className={Styles.content}>{Stats.unity.content}</span>
            </div>

            <div className={Styles.statsComponent}>
              <div className={Styles.up}>
                <div className={Styles.iconContainer}><Servicer/></div>
                <span className={Styles.metrics}>{Stats.services.services}</span>
              </div>
              <span className={Styles.content}>{Stats.services.content}</span>
            </div>

            <div className={Styles.statsComponent}>
              <div className={Styles.up}>
                <div className={Styles.iconContainer}><Partner /></div>
                <span className={Styles.metrics}>{Stats.partner.partners}</span>
              </div>
              <span className={Styles.content}>{Stats.partner.content}</span>
            </div>

           
      </div>
   
  )
}

export default Information;