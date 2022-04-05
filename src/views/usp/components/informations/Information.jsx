import { Tabs, Tab, TabList, TabPanel, TabPanels, Heading,Box} from '@chakra-ui/react';
import Services from '../../services.json';
import Styles from './Informations.module.css';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';

export default function Information(props){
  return(
    <div className={Styles.container} >
      <Accordion allowToggle>
        {
          props.services.map((service, i) =>{
            return (
                <AccordionItem key={i}>
                   <AccordionButton>
                      <Box flex='1' textAlign='left'>
                        <p className={Styles.serviceTitle}>{service.serviceName}</p>
                      </Box>
                      <AccordionIcon />
                  </AccordionButton>
                <AccordionPanel className={Styles.panel}  pb={4}>
                   <div className={Styles.reqContainer} >
                      <Heading size="sm">Documentos Necessários :</Heading>
                      <ul className={Styles.myLis}>
                        {
                          service.documents.map((document,i)=>{
                            return(
                              <li key={i}>{document}</li>
                            )
                        })}
                      </ul>
                   </div>
                   <div className={Styles.reqContainer} >
                      <Heading size="sm">Requesitos :</Heading>
                      <ul className={Styles.myLis}>
                      {
                          service.requirements.map((document,i)=>{
                            return(
                              <li key={i}>{document}</li>
                            )
                        })}
                      </ul>
                   </div>
                   <div className={Styles.reqContainer} >
                      <Heading size="sm">Avisos, Atenção!! :</Heading>
                      <ul className={Styles.myLis}>
                      {
                          service.warnings.map((document,i)=>{
                            return(
                              <div style={{marginTop:10}} key={i}>
                                <Alert status={document.variant} variant='top-accent'>
                                  <AlertIcon />
                                  <Box flex='1'>
                                    <AlertTitle mr={2}>{document.title}</AlertTitle>
                                    <AlertDescription>
                                      {document.content}
                                    </AlertDescription>
                                  </Box>
                                </Alert>
                              </div>
                            )
                        })}
                      </ul>
                   </div>
                </AccordionPanel>

             </AccordionItem>
            )
          })
        }
      </Accordion>   
    </div>
  )
}