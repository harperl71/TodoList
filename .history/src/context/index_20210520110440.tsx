import React, { createContext, useState } from "react";

export interface TodoProps {
  id: number;
  text: string;
  status: string;
}

export interface ContextProps {
  todoList: TodoProps[];
  Add: (item: string) => void;
  Delete: (id: number) => void;
  Remove: (index: number, status: string) => void;
  Clear: () => void;
}

export const MyContext = createContext({} as ContextProps);

const Myprovider = (props: React.PropsWithChildren<{}>) => {
  const [todoList, setList] = useState<TodoProps[]>([]);

  const Add = (item: string) => {
    const listItem = {
      id: new Date().getTime(),
      text: item,
      status: "todo",
    };
    setList([...todoList, listItem]);
  };
  //console.log(...todoList);

  const Delete = (id: number) => {
    setList(todoList.filter((item) => item.id !== id));
  };

  const Remove = (index: number, status: string) => {
    if (status === "todo") {
      const listItem = Object.assign({}, todoList[index], {
        status: "doing",
      });
      const list = todoList.splice(index, 1);
      setList([...list, listItem]);
    }
    if (status === "doing") {
      const listItem = Object.assign({}, todoList[index], {
        status: "done",
      });
      const list = todoList.splice(index, 1);
      setList([...list, listItem]);
    }
  };

  const Clear = () => setList([]);

  return (
    <MyContext.Provider value={{ todoList, Add, Delete, Remove, Clear }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default Myprovider;
