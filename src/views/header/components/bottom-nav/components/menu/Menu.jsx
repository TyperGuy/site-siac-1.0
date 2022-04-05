import React from 'react';
import Link from 'next/link';
import menu from '../menu-files/menu.json';
import {Flex} from '@chakra-ui/react';
import {ChevronDownIcon } from '@chakra-ui/icons';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
} from "@chakra-ui/react";
import Styles from './Menu.module.css';




const Menus =()=> {
  
  return(
    <div className={Styles.mainMenuContainer} >
        {
          menu.map((menus)=>{
            return(
              <Menu height="100%">
               { menus.hasSubMenu &&(
                <MenuButton height="55px" color="#fff" >
                  <Flex align="center"> 
                    <Flex width="10px"></Flex>
                    <span >{menus.menuName}</span>
                    <ChevronDownIcon/>        
                  </Flex>
                </MenuButton>
                 )}
                 { !menus.hasSubMenu&&(
                    <Link href={menus.to}>
                    <MenuButton height="55px" color="#fff" >
                      <Flex align="center"> 
                        <Flex width="10px"></Flex>
                        <span >{menus.menuName}</span>
                      </Flex>
                    </MenuButton>
                      
                    </Link>
                 )}
                { menus.hasSubMenu && (
                    <MenuList borderRadius="0">
                    {
                     menus.subMenu.map((subMenus)=>{
                     return(
                          <Link href={menus.to}>
                           <MenuItem>{subMenus} </MenuItem>
                          </Link> 
                       )
                     })
                    }
                  </MenuList>
                 )  
                }                    
             </Menu>
            )          
         })
       } 
    </div>
    
  )
}

export default Menus;