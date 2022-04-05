import {Flex,Heading,Text} from '@chakra-ui/react'
import styled from 'styled-components'
import {CgFileDocument as Icon} from "react-icons/cg"



export default function FileBox (props) {

  const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 250px;
    height: 250px;
    border-radius:8px;
    border: 2px solid #dedede;
    color: #1f1f1f;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: #3778b7;
      border: 2px solid #3778b7;

    }
    
  `
  return(
    <Box>
      <Icon style={{width: '100%', height: '100px'}}/>
      <Text textAlign="center" fontSize="xl">{props.file.title}</Text>
    </Box>
  )
}