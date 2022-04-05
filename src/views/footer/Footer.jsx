import React from 'react';
import {Flex,Stack,Box,Heading, InputLeftElement,InputGroup,Input} from '@chakra-ui/react';
import {EmailIcon} from '@chakra-ui/icons';
import menu from './menu.json';
import Style from './Footer.module.css';
import Button from '../../components/my-button/Button.jsx';
import Logo from '../../components/logo/Logo';
import LangMenu  from './components/menu-language/LangMenu';



function Footer(){
  return(
    <Flex zIndex="2" width="100vw"  bg="linear-gradient(145deg, rgba(22,121,182,1) 0%, rgba(22,121,182,1) 35%, rgba(11,61,91,1) 100%)" direction="column" color="#fff" align="center">
      <Flex className={Style.inputContainer} width="70%" padding="20px 0" justify="center" align="center">
         <Stack direction={["column", "column","row"]} width="100%" justify="space-between">
          
            <Box direction={["column", "row"]}>  <Logo/></Box>
            <Box direction={["column", "row"]}> <Heading as="h5" size="md" pb="10px">{menu.social.tag}</Heading> <p>{menu.social.facebook}</p><p>{menu.social.instagram}</p><p>{menu.social.youtube}</p></Box>
            <Box direction="row"> <Heading as="h5" size="md" pb="10px">{menu.linksUteis.tag}</Heading> <p>{menu.linksUteis.maptss}</p><p>{menu.linksUteis.inss}</p><p>{menu.linksUteis.enap}</p></Box>
            <Box direction="column"> 
              <Heading as="h5" size="md" pb="10px">{menu.newsLatter.tag}</Heading> 
              <p>{menu.newsLatter.text}</p>
              <Stack direction={["column", "column","row"]} width="370px" pt="10px">
                <InputGroup >
                  <InputLeftElement
                  pointerEvents="none"
                  children={<EmailIcon color="#fff" />} />
                  <Input width="260px" type="email" color="#fff" placeholder={menu.newsLatter.placeholder} />
                </InputGroup>
                <Button size="10rem" text="Subscrever" color="rgba(22,121,182,1)" bg="#fff" hbg="#fff"/>
              </Stack>
              
            </Box>
         </Stack> 
      </Flex>
      <Flex width="100vw" padding="10px" bg="rgba(0,0,0,.3)" justify="center">
        <Flex direction={["column", "column","row"]} width="70vw" justify="space-between"  color="#fff">
          <p>Copyrigth &copy; 2017 SIAC - Serviço Integrado de Atendimento ao Cidadão</p>
          <Stack direction="row" spacing="24px">
            <Box>Termos de uso</Box>
            <Box>Politica de privacidade</Box>
            <Box><LangMenu/></Box>
         </Stack> 
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Footer;