import IMG from './parceiros/minjusdh.png';
import Styles from './Partners.module.css';
import {Heading} from '@chakra-ui/react';
import {BsArrowRightShort as Arrow} from "react-icons/bs";
const Partner = (props) =>{
  return(
    <div className={Styles.partnerMain}>
      <div className={Styles.partnerInner}>
        <div className={Styles.front} style={{display:"flex",justifyContent:"center",alignItems: "center",backgroundColor:"#ffffff"}}>
          <img src={props.img} style={{maxWidth:"80%",maxHeight:180}} alt="" />
        </div>
        <div className={Styles.backCard} style={{display: "flex",backgroundColor:"#ffffff"}}>
          <div style={{width:"100%",display:"flex",margin:"20px 40px",justifyContent:"flex-start", flexDirection:"column"}}>
            <div style={ { color:"#4376f7",display:"flex",justifyContent:"space-between", alignItems: "center", flexDirection:"row"}}>
              <Heading size="md">{props.name}</Heading>
              <Arrow style={ {fontSize:"2rem", transform:"rotate(-30deg)"}}/>
            </div>
            <ul style={{listStyle:"none"}}>
              <li className={Styles.li}><div style={{display:"flex",alignItems: "center",gap:5}}><div style={{width:10,height:10,borderRadius:"50%",border:"1px solid #4376f7"}}></div><p style={{cursor:"pointer"}}>Atendimento ao Público</p></div></li>
              <li className={Styles.li}><div style={{display:"flex",alignItems: "center",gap:5}}><div style={{width:10,height:10,borderRadius:"50%",border:"1px solid #4376f7"}}></div><p style={{cursor:"pointer"}}>Pagamento de serviços</p></div></li>
              <li className={Styles.li}><div style={{display:"flex",alignItems: "center",gap:5}}><div style={{width:10,height:10,borderRadius:"50%",border:"1px solid #4376f7"}}></div><p style={{cursor:"pointer"}}>Reclamações</p></div></li>
              <li className={Styles.li}><div style={{display:"flex",alignItems: "center",gap:5}}><div style={{width:10,height:10,borderRadius:"50%",border:"1px solid #4376f7"}}></div><p style={{cursor:"pointer"}}>Adesão</p></div></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
  )
}
export default Partner;