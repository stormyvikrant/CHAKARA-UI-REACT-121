
import './App.css';
import { Flex,Heading,Box,Grid,GridItem } from '@chakra-ui/react'
function App() {
  return (
    <div className="App">
       <Heading size='md'  >MOBILE</Heading>
     
  <Flex direction={["column","row"]} >
    <Box flex="1" h='300px' bg='blue.500'>
    <Heading size='md' color="white" alignContent="center" marginTop="130">Nav</Heading>
    </Box>
    <Box flex='3' h='300' bg='orange.00'> 
    <Heading size='md' color="white" alignContent="center" marginTop="130">CONTENT</Heading></Box>
    <Box flex='1' h='300' bg='red.00'> 
      <Heading size='md' color="white" alignContent="center" marginTop="130">WIDGET</Heading></Box>
  </Flex>
  
  {/* grid */}
<br/>
<br/>
  <Grid 
  h="200px"
  templateRows="repeat(9,1fr)"
  templateColumns="repeat(5,1fr)"
  gap={4}
  >
    <GridItem rowSpan={[3,6]} colSpan={[5,3]} bg="tomato" w="100%">1</GridItem>
    <GridItem rowSpan={[3,12]} colSpan={[5,2]} bg="tomato" w="100%">2</GridItem>
    <GridItem rowSpan={[3,6]} colSpan={[5,3]} bg="tomato" w="100%">3</GridItem>
  </Grid>
 
     

     
    </div>
  );
}

export default App;
