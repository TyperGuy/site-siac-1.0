import { Text ,Flex,Heading } from '@chakra-ui/react'
import Style from './Item.module.css'

const Item = (props) =>{
  return(
    <Flex className={Style.mainItem} margin='10px 0'  direction='column'>
      <Heading size='xl'>{props.heading}</Heading>
      <Flex direction='column' >
        {
          props.content.map(content=>{
            return <Text marginTop='15px'fontSize='lg' textAlign='justify'>{content}</Text>
          })
        }  
      </Flex >

    </Flex>
  )
}

export default Item