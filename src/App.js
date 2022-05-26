
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
  
         h="200"
         w="100%"
        templateRows="repeat(6, 1fr)"
        templateColumns="repeat(3, 1fr)"
     
        direction={["column","row"]}
      >
        <GridItem rowSpan={[3]} colSpan={[1]} bg="mediumorchid" />
        <GridItem rowSpan={[6]} colSpan={[2]} bg="tomato" />
        <GridItem rowSpan={[3]} colSpan={[1]} bg="lightskyblue" />
      </Grid>
     

     
    </div>
  );
}

export default App;
