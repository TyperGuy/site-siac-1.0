import { Tabs, Tab, TabList, TabPanel, TabPanels, Heading} from '@chakra-ui/react';
import Services from './services.json';
import Styles from './Usp.module.css';
import Information from './components/informations/Information';
import Advertising from '../../components/advertising/vertical/Vertical';

export default function USP(){
  return(
    <div className={Styles.container} >
      <Tabs isManual width="70%" >
        <TabList>
        {
        Services.map((service)=>{
          return(
            <Tab>{service.name}</Tab>
          )
        })
        }
        </TabList>
        <TabPanels>
        {
        Services.map((service)=>{
          return(
            <TabPanel>
              <Heading m=" 20px 10px" size="md">{service.acronym}</Heading>
              <Information services = {service.services}/>
          </TabPanel>
          )
        })
        }
        </TabPanels>
      </Tabs> 
    </div>
  )
}