import React from 'react';
import img from '../../public/assets/help_banner.svg';
import {Flex,Input,InputGroup,InputLeftElement,Image} from '@chakra-ui/react';
import FAQComponent from '../views/fqa/FAQComponent';
import {BsSearch as Search} from 'react-icons/bs';

function FAQ () {
  return(
    <Flex width="vw" justify="center" align="center" direction="column">
      <Image src={img} marginTop="20px" width="40vw"  alt="Citizens Image"/>
      <Flex 
        width="50vw" 
        direction="column" 
        style={{
          padding:'2rem',
          margin:'2rem 0',
          boxShadow:' rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
          borderRadius:'.5rem'
        }} >
        <Flex flexWrap="wrap" gap="4" justify="space-between"  direction="column">
          <p style={{marginTop:25, marginBottom:10,fontWeight:500,fontSize:"1.5rem", color:"#abaeb0"}}>Perguntas mais Frequêntes</p>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<Search color='#abaeb0' />}
            />
            <Input type='text' placeholder='Pesquise aqui' />
            </InputGroup>
          </Flex>
        <FAQComponent/>
      </Flex>
     
    </Flex>
  )
}

export default FAQ;