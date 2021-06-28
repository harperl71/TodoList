import React, { Fragment } from "react";
import TaskList from "./tasklist";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  content: {
    margin: theme.spacing(0, 6),
    justifyContent: "center",
  },
}));

const Content = () => {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <Fragment>
        <TaskList title="待办任务" status="todo" />
        <TaskList title="进行中任务" status="doing" />
        <TaskList title="已完成任务" status="done" />
      </Fragment>
    </div>
  );
};

export default Content;
