import Home from "./components/home/Home";
import { ThemeProvider } from "./context/ThemeContext";
import { ContextStore } from "./context/ContextStore";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <>
      <div>
      <ChakraProvider>
        <ThemeProvider>
          <ContextStore>
            <Home />
          </ContextStore>
        </ThemeProvider>
        </ChakraProvider>
      </div>
    </>
  );
}

export default App;
