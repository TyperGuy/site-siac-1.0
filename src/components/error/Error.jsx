
import Lottie from 'react-lottie'
import animationData from '../../animation/building.json'
import { Flex, Text} from '@chakra-ui/react'

export default function ErrorComponent (props){
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return(
    <Flex direction='column' align='center' backgroundColor="#e0e3ed">

      <Lottie 
	      options={defaultOptions}
        height={300}
        width={300}
      />

      <Text fontSize="2xl">{props.message}</Text>

    </Flex>
  )
}