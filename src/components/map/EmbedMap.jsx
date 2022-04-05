
import { Flex} from '@chakra-ui/react'
const EmbedMap = () =>{
  return(
    <Flex backgroundColor="#ffffffaa">
    <iframe style={{width: '100%', height:'300px', margin:'30px 15%'}} 
      src="https://maps.google.com/maps?q=SIAC&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
      scrolling="no"  
      frameborder="0">
    </iframe>
    </Flex>
  )
}

export default EmbedMap
