import { Flex,Heading } from '@chakra-ui/react'
import Item from './components/Item'
import files from './assets/files/siac.json'
import EmbedMap from '../../components/map/EmbedMap'
import Unities from '../unities/Unities.jsx'

const SIAC = () =>{
  return(
    <Flex direction="column">
      <EmbedMap/>
      <Flex direction='column' margin='0 13%'>
         {
           files.map(file =>{
             return(<Item {...file} key={file.index} />)
           })
         }
      </Flex>
      <Unities/>
    </Flex>
  )
}

export default SIAC