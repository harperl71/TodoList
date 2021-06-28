import React, { Fragment } from "react";
import TaskList from "./task-list";
import { Typography, AppBar, Toolbar } from "@material-ui/core";

const Content = () => {
  return (
    <div className="content">
      <Fragment>
        <Typography className="todo" variant="h5">
          任务待办：
        </Typography>
        <TaskList title="待办" status="todo" />
        <Typography className="todo" variant="h5">
          任务进行中：
        </Typography>
        <TaskList title="进行中" status="doing" />
        <Typography className="todo" variant="h5">
          任务已完成：
        </Typography>
        <TaskList title="已完成" status="done" />
      </Fragment>
    </div>
  );
};

export default Content;
