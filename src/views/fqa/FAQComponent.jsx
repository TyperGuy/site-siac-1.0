import React from 'react';
import styles from './FAQ.module.css'
import faqs from '../fqa/faqs.json'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from "@chakra-ui/react"

export default function FAQComponent () {
  return(
    <div className={styles.div}>
      <Accordion width="100%" allowMultiple allowToggle>
        { 
          faqs.map((faq)=>{
          return(
            <AccordionItem key={faq.id.toString()}>
            <h2>
              <AccordionButton >
                <Box flex="1" textAlign="left">{faq.question}</Box>
              <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} bg="#DAE3ED">{faq.answer} </AccordionPanel>
           </AccordionItem>
        
          )
          })
        }
      </Accordion>

     
    </div>
  )
}

