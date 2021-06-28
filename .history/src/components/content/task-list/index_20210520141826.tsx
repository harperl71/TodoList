import React, { ReactNode, useContext } from "react";
import { MyContext } from "../../../context";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
  },
  list: {
    width: 200,
    height: 230,
    backgroundColor: theme.palette.background.paper,
    overflow: "auto",
  },
  button: {
    margin: theme.spacing(0.5, 0),
  },
}));

interface Iprops {
  title: string;
  status: string;
}

const TaskList = ({ title, status }: Iprops) => {
  const classes = useStyles();

  const { todoList } = useContext(MyContext);

  //console.log(todoList);
  return <div className={classes.root}></div>;
};

export default TaskList;
