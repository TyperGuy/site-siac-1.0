import React from 'react';
import {Flex} from '@chakra-ui/react';
import Style from './Grid.module.css';
import Publicity from '../../components/publicity/Publicity.jsx'
import News from './components/news/News.jsx';
import Services from './components/siac-services/Services.jsx';

function Grid(){
  return(
    <div className={Style.mainContainer}>
      <Services/>
      <News/>
    </div>
  )
}

export default Grid;