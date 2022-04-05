
import { Flex,Heading} from '@chakra-ui/react'

export default function Divider(props){
  return(
    <Flex width="100%" margin="10px 0" borderBottom="1px solid #e0e2eb">
    <Heading size="md" borderBottom="4px solid #e0e2eb" height="100%">{props.title}</Heading>
    </Flex>
  )
}