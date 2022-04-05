import React from 'react';
import styled from 'styled-components';
import Button from '../../../../../../../../components/my-button/Button.jsx';
import {Heading} from '@chakra-ui/react';
import Style from './Standard.module.css';
import Link from 'next/link'





function StandardContainer(props){
  const Container = styled.div `
    width: 230px;
    height: 280px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius:5px;
    transition: all .5s ease-in-out;
    &:hover {
      transform: translate3d(4px, -4px, 0px) scale3d(1.03, 1.03, 1) rotateX(0deg) rotateY(0deg) rotateZ(.5deg) skew(0deg);
      transform-style: preserve-3d;
      box-shadow: 0 12px 40px 0 rgba(0,0,0,.16);
    }
  `

  const Child = styled.div `
    width: 100%;
    height: 100%; 
    background: -moz-linear-gradient(45deg,  #3377bb 30% ,#3778b7 70%);
    background: -webkit-linear-gradient(45deg,  #3377bb 30%,#3778b7 70% ); 
    background: linear-gradient(45deg,  #3377bb 30%,#3778b7 70%);
    border-radius:5px;
    display: flex;
    transition: all .5s ease-in-out;  
  `
  return(
    <Container>
      <Child>

        <div className={Style.contentContainer}>
          <Heading size="md" >{props.titulo}</Heading>
          <p>{props.conteudo}</p>
          { 
            (props.isLink)?<a href={props.to} target="_blank"><Button text={props.callToAction} color="#fff" bg="transparent" hbg=" rgb(0, 127, 255)"/></a> :
            <Link href={props.to} target="_blank"><a><Button text={props.callToAction} color="#fff" bg="transparent" hbg=" rgb(0, 127, 255)"/></a></Link>
          }
          
        </div>
        
      </Child>
    </Container>
  )
}

export default StandardContainer;