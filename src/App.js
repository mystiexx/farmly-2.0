import { ChakraProvider } from "@chakra-ui/react"
import Home from './pages/Home'

function App() {
  return (
    <ChakraProvider>
      <div style={{backgroundColor:'rgb(238, 238, 238)'}}>
      <Home/>
      </div>
 
    </ChakraProvider>

  );
}

export default App;
