import React from 'react';
import {Flex} from '@chakra-ui/react';
import { FaHome } from 'react-icons/fa';
import styles from './Bottom.module.css';
import Menus from './components/menu/Menu.jsx';
import Hamburger from './components/menu/Hamburger.jsx';
import Link from 'next/link';
import NavBar from '../../../../components/navbar/Navbar'


const Bottom = ()=>{
  return (
    <Flex width="100vw" height="70px" background="#0d7abd" justify="center" >
      <Flex width="70%" height="100%" align="center" justify="space-between">
        <Flex align="center">
          <Link href="/">
            <Flex  width="80px" height="80px" background="#FDC900" color="#FFFFFF" shadow="0 4px 10px 0 #0000002f"
              align="center" justify="center">
              <span className={styles.FaHome}><FaHome  fontSize="1.5rem" /></span>
            </Flex>    
          </Link>
          
          <NavBar/>
        </Flex>
        
        <Hamburger/>
       
      
      </Flex>
    </Flex>
  )
}

export default Bottom;