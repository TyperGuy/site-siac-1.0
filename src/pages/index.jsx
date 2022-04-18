import Grid from '../views/grid-on-header/Grid.jsx';
import Fam from '../views/family/Fam.jsx';
import Partners from '../views/partners/Partners.jsx'; 
import Floating from '../components/floating-button/Floating.jsx'
import Benefic from '../views/benefic/Benefic.jsx';
import Stats from '../views/stats/Stats.jsx';
import {Flex} from '@chakra-ui/react';
import MessengerCustomerChat from 'react-messenger-customer-chat';

export default function Home() {
  return (
    <Flex width="100%" direction="column"  align="center">
      <Grid/>
      <Benefic/>
      <Fam/>
      <Stats/>
      <Partners/>
      <Floating/>
      <MessengerCustomerChat
        pageId="108266877196447"
        appId="631180188161263"
      />
    </Flex>
  )
}




