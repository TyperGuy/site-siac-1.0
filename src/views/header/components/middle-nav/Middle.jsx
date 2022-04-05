import React from 'react';
import Logo from '../../../../components/logo/Logo';
import {Flex} from '@chakra-ui/react';
import DataTime from './components/date-time/DateTime';

function Middle() {
   return(
    <Flex width="100vw" align="center" height="95px" justify="space-between">
      <Logo isTrigger={true}/>
      <DataTime/>
    </Flex>
   );
}

export default Middle;