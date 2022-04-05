import img from '../../../../public/assets/stop.png';
import Style from './Vertical.module.scss';


const Advertising = ()=>{
  return(
    <div className={Style.adContainer}>
      <img src={img} alt="" />
    </div>
  )
}

export default  Advertising;