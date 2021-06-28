import React from "react";
import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";
import Myprovider from "./context";
import TaskItem from "./components/content/task-item";

function App() {
  return (
    <div className="APP">
      <Myprovider>
        <Header />
        <Content />
        <Footer />
        <TaskItem />
      </Myprovider>
    </div>
  );
}

export default App;
