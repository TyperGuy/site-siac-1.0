import React from 'react';
import Row from './components/simple-row/Row.jsx';
import Middle from './components/middle-nav/Middle.jsx';
import Bottom from './components/bottom-nav/Bottom.jsx';
import {Flex} from '@chakra-ui/react'





function header(){
  return(
    
    
    <Flex with="100vw" bg="#fff" direction="column" align="center" justify="center" position="fixed" zIndex="10" top="0">
      <Row/>
      <Flex width="70%" >
       <Middle/>
      </Flex>
      <Bottom/>
    </Flex>  
  )
}

export default header;