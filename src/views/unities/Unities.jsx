import React,{useRef} from 'react';
import Unity from './components/unity/Unity';
import styled from 'styled-components';
import Styles from './Unities.module.css';
import file from './Unities.json';
import schedulerTheme from './schedulerTheme.json';
import {Heading} from '@chakra-ui/react';
import {MdChevronLeft as Mdleft,MdChevronRight as Mdright} from 'react-icons/md';


  const Container = styled.div` 
    width:100vw;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin:40px 0;
    `
  const Circle = styled.div`
  margin:10px;
  display: flex;
  align-items: center;
  align-content: center;
  box-shadow: 0 5px 15px rgba(109, 121, 145, 0.9);
  border-radius: 50%;
  background-color: transparent;
  width: 30px;
  height: 30px;
  transition: transform 0.3s ease-in-out;
  font-size:2.2rem;
  color: #fff;
  background-color: #242424;
  z-index:1;
  &:hover{
    transform:scale(1.2);
    color: #F52724;
  }
  `  

export default function Unities(){
  var scrollQuociente = 331;
  const refContainer = useRef(null);
  return(
     <Container >
       <div className={Styles.containerChild}>
          <Heading className={Styles.heading}>Encontre o SIAC mais perto de si</Heading>
          <div ref={refContainer} className={Styles.slideContainer}>
            { 
              file.map( (unity,id) =>{
                return(
                    isOpen(unity) ? <Unity status={schedulerTheme.opened}unity={unity} key={unity.name} />
                    :<Unity status={schedulerTheme.closed}unity={unity} key={unity.name} />
                )
              })
            }
          </div>
          <div className={Styles.arrowContainer}>
            <Circle onClick={rollBack}><Mdleft/></Circle> 
            <Circle onClick={rollForward}><Mdright/></Circle> 
          </div>
       </div> 
     </Container>
   )


  function rollBack(){
     refContainer.current.scrollLeft -=scrollQuociente;
  }
   function rollForward(){
      refContainer.current.scrollLeft += scrollQuociente;
     console.log(refContainer.current.scrollLeft);
  }

  function isOpen(unity){
    return((new Date()).getHours()>=unity.abertura && (new Date()).getHours() <unity.encerramento);
  }

    
}