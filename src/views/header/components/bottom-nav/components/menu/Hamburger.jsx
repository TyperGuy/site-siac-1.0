import React from 'react';
import menu from '../menu-files/menu.json';
import {Flex} from '@chakra-ui/react';
import {HamburgerIcon,ChevronDownIcon} from '@chakra-ui/icons';
import Link from 'next/link';
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
  IconButton
} from "@chakra-ui/react"
import Styles from './Menu.module.css';



const Hamburger = ()=>{
  return(
    <div className={Styles.burgerMenuContainer}>
      <Menu >
        <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
        color="#fff"
        _hover={{ bg: "transparent" }}
        />
        <MenuList borderRadius="0">
          {
           menu.map((menus)=>{
            return(
              <Link href={menus.to} key={menus.menuName}>
                <MenuItem>{menus.menuName}</MenuItem>
              </Link>
              
            )          
           })
          }
       </MenuList>
      </Menu>
    </div>
    
  )
}

export default Hamburger;


