import {Heading} from '@chakra-ui/react'
import {useState,useEffect} from 'react'
import Style from './Clock.module.css'

const DataBuilder = (date)=>{
  let months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro" ]
  let days = ["Domingo", "Segunda-Feira", "Terça" ,"Quarta","Quinta" ," Sexta","Sábado"]
  return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
}

export default function Clock(){
  const [second,setSecond] = useState(new Date().getSeconds())
  const [minute,setMinute] = useState(new Date().getMinutes())
  const [hour,setHour] =useState(new Date().getHours())
  useEffect(() => {   
    const clock = setInterval(()=>{
      new Date().getSeconds()<10?setSecond("0" + new Date().getSeconds()):setSecond(new Date().getSeconds())
      new Date().getMinutes()<10?setMinute("0" + new Date().getMinutes()):setMinute(new Date().getMinutes())
      new Date().getHours()<10?setHour("0" + new Date().getHours()):setHour(new Date().getHours())
      
    },1000)
    return ()=>{
      clearInterval(clock)
    }
  });

  return (
    <>
      <div className={Style.clock}>
        <span>{DataBuilder(new Date())}</span>
        <Heading>{`${hour} :${minute} : ${second} `}</Heading>
      </div>
    </>
  );
}

