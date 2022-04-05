
import Style from './DateTime.module.css';
import Clock from '../../../../../../components/clock/Clock'
import Wather from '../../../../../../components/wather/Wather'

/*
import {useState} from 'react'
const API ={
  apiKey :"14e35fd7cb4ddfe6a9d7a2a574c38bec",
  baseUrl :"https://api.openweathermap.org/data/2.5/",
}
const [weather,setWeather] = useState({})
let lat="35",lon="139"
const getWeather=(lat,lon)=>{
  fetch(`${API.baseUrl}weather?q=lat=${lat}&lon=${lon}&appid=${API.apiKey}`)
  .then(res=>res.json())
  .then(result =>setWeather(result))

  console.log(weather)
}
getWeather(lat,lon)
*/
const DataTime = () =>{
  
  return(
    <div className={Style.mainContainer}>
      <Clock/>
      <Wather/>
    </div>
  )
}

export default DataTime;