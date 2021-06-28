import React from "react";
import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";
import Myprovider from "./context";
import SimpleList from "./components/test";

function App() {
  return (
    <div className="APP">
      <Myprovider>
        <Header />
        <SimpleList />
        <Content />
        <Footer />
      </Myprovider>
    </div>
  );
}

export default App;
