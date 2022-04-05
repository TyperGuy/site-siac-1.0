import React from 'react';
import Style from './Services.module.css';
import UP from './components/up/Up.jsx';
import Scheduler from './components/scheduler/Scheduller';


function Services(){
  return(
    <div className={Style.mainContainer}>
      <UP/>
      <Scheduler/>
    </div>
  )
}

export default Services;