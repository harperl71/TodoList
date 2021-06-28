import React, { useContext } from "react";
import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";
import Myprovider from "./context";
import TaskItem from "./components/content/task-item";
import { MyContext } from "./context";

const item = function App() {
  const { todoList } = useContext(MyContext);

  const status = "todo";

  const view = todoList.map((item) => item.status === status);

  return (
    <div className="APP">
      <Myprovider>
        <Header />
        <Content />
        <Footer />
        {todoList.map((item) =>
          <TaskItem Item={item} />}
      </Myprovider>
    </div>
  );
};

export default App;
