import { useContext } from "react";
import { ThemeContext, ThemeContextUpdate } from "../../context/ThemeContext";
import { useUpdateStore, useStore } from "../../context/ContextStore";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import CustomRoutes from "../../routes/CustomRoutes";
import { BrowserRouter } from "react-router-dom";


import { Heading, Stack } from "@chakra-ui/react";

function Home() {
  const themeContext = useContext(ThemeContext);
  const themeUpdate = useContext(ThemeContextUpdate);
  const store = useStore();

  console.log(store);
  console.log(themeContext);
  const handleClick = () => {
    console.log("themeUpdate", themeUpdate.updateAge());
  };
  return (
    <div>
      <BrowserRouter>
      <Stack spacing={6}>
        <Heading>DASHBOARD</Heading>
      </Stack>
        <Header /> <CustomRoutes /> <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Home;
