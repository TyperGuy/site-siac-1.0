import React from 'react';
import Style from './Up.module.css'
import inf from './information.json';
import Standard from './components/standard/Standard.jsx';
function Schedule(){
  return(
    <div className={Style.mainContainer} >
      {
        inf.map((inf,id)=>{
          return(
            <Standard {...inf} key={id}/>
          )
        })
      }
    </div>
  )
}
export default Schedule;