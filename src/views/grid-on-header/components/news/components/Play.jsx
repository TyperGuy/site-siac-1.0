import Style from './Play.module.css';
import styled from 'styled-components';
import {BsPlayCircleFill as PlayButton} from 'react-icons/bs';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  AspectRatio
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';

export default function Play(){
  const Circle = styled.div `
    border-radius:50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width:100px;
    height:100px;
    background-color: #fff;
    cursor: pointer;
  `
    
  const { isOpen, onOpen, onClose } = useDisclosure()
  const naruto ='https://www.youtube.com/embed/QhBnZ6NPOY0'
  return(
    
    <>
         <Circle className={Style.insideCircle}>
            <PlayButton onClick={onOpen} size={90} color="#3778b7"/>
         </Circle> 
         <Modal  isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent maxW="56rem">
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <iframe style={{width:'100%', height:'50vh', borderRadius:12, border:'4px solid #3778b7'}}
                src={naruto}>
              </iframe> 
            </ModalBody>
        </ModalContent>
      </Modal>
    </>     
  )
}