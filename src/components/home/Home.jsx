import Header from "../header/Header";
import Footer from "../footer/Footer";
import CustomRoutes from "../../routes/CustomRoutes";
import { BrowserRouter } from "react-router-dom";
import "./Home.css";

import { Heading, Stack } from "@chakra-ui/react";

function Home() {
  return (
    <div>
      <BrowserRouter>
        <Stack spacing={6}>
          <div className="home-screen-parent-title">
            {" "}
            <Heading>DASHBOARD</Heading>
          </div>
        </Stack>
        <Header /> <CustomRoutes /> <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Home;
