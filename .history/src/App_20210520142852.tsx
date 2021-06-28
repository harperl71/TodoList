import React from "react";
import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";
import Myprovider from "./context";
import { Container } from "@material-ui/core";

function App() {
  return (
    <React.Fragment>
      <Container maxWidth="md">
        <Myprovider>
          <Header />
          <Content />
          <Footer />
        </Myprovider>
      </Container>
    </React.Fragment>
  );
}

export default App;
