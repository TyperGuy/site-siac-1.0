import Item from './components/nav-item/Item'
import styled from 'styled-components'
import menu from './menu.json'

export default function Navbar(){
  const Flex = styled.div`
  color: #1c1c1c;
  display: flex;
  flex-direction: row;
  margin-left:1em;
  height: 100%;
  
  `
  return(
    <Flex>
      {
        menu.map((item)=>{
          return(
            <Item {...item} key={item.title}/>
          )
        })
      }   
    </Flex>
  )
}