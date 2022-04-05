import Usp from '../views/usp/Usp';
import {Flex} from '@chakra-ui/react';

export default function Services(){
  return(
    <Flex width="100%" direction="column"  align="center" margin="20px 0">
      <Usp/>
    </Flex>
  )
}