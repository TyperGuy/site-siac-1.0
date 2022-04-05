import {Flex,Heading,Text} from '@chakra-ui/react'
import inf from './assets/informations.json'
import img from '../../../public/assets/siac-team/manager/amelia-varela.jpg'
export default function Messager (){
  return(
    <Flex align="center" gridGap={12}>
      <div style={{maxWidth:250}}>
        <img  src={img} alt="amelia varela" />
      </div>
      <Flex direction="column">
        <Heading size="md">{inf.msg.minister}</Heading>
        <Text fontSize="md">{inf.msg.Message}</Text>
      </Flex>
    </Flex>
  )
}