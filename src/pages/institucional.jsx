
import { Flex} from '@chakra-ui/react'
import Divider from '../components/divider/Divider'
import DG from '../components/dg-message/View'
import FileBox from '../components/file-box/FileBox'
import inf from '../components/dg-message/assets/informations.json'
import Error from '../components/error/Error'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from "@chakra-ui/react"


export default function Institucional(){
  return(
    <Flex margin="40px 15%" direction="column" gridGap={5}>
      <Divider title="Mensagem da Directora"/>
      <DG/>
      <Divider title="Legislação"/>
      <Flex >
        <Accordion width="100%" allowMultiple allowToggle>
         <AccordionItem >
            <h2>
              <AccordionButton >
                <Box flex="1" textAlign="left">Estatudo orgânico do SIAC e MAPTSS</Box>
              <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} bg="#f7f8f9">
              <Flex gridGap={10} wrap="wrap">
                { inf.files.map((item)=>{
                    return(
                      <FileBox file={item}/>
                    )
                  })
                }
              </Flex>
            </AccordionPanel>
           </AccordionItem>
           <AccordionItem >
            <h2>
              <AccordionButton >
                <Box flex="1" textAlign="left">Lesgislação da asociação mutualista</Box>
              <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} bg="#f7f8f9">
              <Flex gridGap={10} wrap="wrap">
                { inf.files.map((item)=>{
                    return(
                      <FileBox file={item}/>
                    )
                  })
                }
              </Flex>
            </AccordionPanel>
           </AccordionItem>
        </Accordion> 
      </Flex>
      <Divider title="Quem é quem"/>
      
      <Error message="Oops!!! Parece que esta secção está em construção ainda..."/>
    </Flex>
  )
}