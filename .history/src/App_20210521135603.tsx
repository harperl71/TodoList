import React, { useContext } from "react";
import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";
import Myprovider from "./context";

function App() {
  return (
    <div className="APP">
      <Myprovider>
        <Header />
        <Content />
        <Footer />
      </Myprovider>
    </div>
  );
}

export default App;
