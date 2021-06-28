import React from "react";
import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";
import Myprovider from "./context";

function App() {
  return (
    <React.Fragment>
      <Myprovider>
        <Header />
        <Content />
        <Footer />
      </Myprovider>
    </React.Fragment>
  );
}

export default App;
