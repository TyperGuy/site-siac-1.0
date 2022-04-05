import Style from './Item.module.scss'
import {FiArrowUpRight as LinkArrow} from 'react-icons/fi'
import Link from 'next/link'

 

export default function Item(props){

  return(
    <>
        <div className={Style.dropdown}>
          <Link href={props.to} ><a><button className={Style.dropbtn}>{props.title}</button></a></Link>
          {
            props.isIterable&&
            <div className={Style.dropdownContent}>
              <div className={Style.marker}></div>
              {
                props.menu.map((item)=>{
                  return(
                    <div className={Style.linkContainer} key={item.name}>
                      <div className={Style.link} >
                        <Link href={item.to} ><a>{item.name}</a></Link>
                        <span>{item.desc}</span>
                      </div> 
                      {item.isLink&&<LinkArrow className={Style.arrow}/>}
                    </div>
                  )
                })
              }
            </div>  
          }   
        </div> 
    </>
  )
}