import Home from "./components/home/Home";
import { ThemeProvider } from "./context/ThemeContext";
import { ContextStore } from "./context/ContextStore";
import { ChakraProvider } from "@chakra-ui/react";
import { ProjectContextStore } from "./context/ProjectContextStore";

function App() {
  return (
    <>
      <div>
        <ChakraProvider>
          <ThemeProvider>
            <ContextStore>
              <ProjectContextStore>
                <Home />
              </ProjectContextStore>
            </ContextStore>
          </ThemeProvider>
        </ChakraProvider>
      </div>
    </>
  );
}

export default App;
