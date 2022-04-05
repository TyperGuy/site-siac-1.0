import React from "react";
import Styles from './News.module.css';
import styled from 'styled-components';
import img from '../../assets/african.jpg';
import arq from './information.json';
import {Heading,Flex} from '@chakra-ui/react';
import Play from './components/Play.jsx';

function News(){
  const Container = styled.div `
    background-image: url(${img});
    background-position: center;
    background-size: cover;
  `
  return(
    <Container className={Styles.newsConntainer}>

      <div className={Styles.childContainer}>

       <Play/>

      </div>
      
    </Container>
  )
}

export default News;