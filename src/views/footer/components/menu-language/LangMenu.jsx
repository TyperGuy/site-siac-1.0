import React from 'react';
import ao from './assets/countries_flags/ao.svg';
import cn from './assets/countries_flags/cn.svg';
import fr from './assets/countries_flags/fr.svg'
import gb from './assets/countries_flags/gb.svg'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  Flex,
  Heading
} from "@chakra-ui/react";


export default function LangMenu(){
  const targetLang = 'Português';
  
  return(
    <>
    <Menu>
      <MenuButton>
       <Flex > 
        <Heading size="sm" >{targetLang}</Heading>
        <Flex width="10px"></Flex>
        <Image
        boxSize="1.5rem"
        src={ao}
        alt="Fluffybuns the destroyer"/>
        </Flex>
      </MenuButton>

      <MenuList  borderRadius="8px"color="#1a202c" boxShadow="#e5e9f7 0px 2px 8px 0px">
        <MenuItem> 
          <Image
            margin-left="2px"
            boxSize="1.5rem"
            src={ao}
            alt="Fluffybuns the destroyer"
            mr="12px"/>
            <span>Português PT</span>
        </MenuItem>
        <MenuItem> 
          <Image
            margin-left="2px"
            boxSize="1.5rem"
            src={cn}
            alt="Chinês Mandarim"
            mr="12px"/>
            <span>Chinês Mandarim</span>
        </MenuItem>
        <MenuItem> 
          <Image
            margin-left="2px"
            boxSize="1.5rem"
            src={fr}
            alt="Chinês Mandarim"
            mr="12px"/>
            <span>Francês</span>
        </MenuItem>
        <MenuItem> 
          <Image
            margin-left="2px"
            boxSize="1.5rem"
            src={gb}
            alt="Chinês Mandarim"
            mr="12px"/>
            <span>Inglês</span>
        </MenuItem>
     </MenuList>
    </Menu>
    
    </>
  )
}
