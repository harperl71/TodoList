import React, { Fragment } from "react";
import TaskList from "./task-list";
import {
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import AssignmentIcon from "@material-ui/icons/Assignment";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0, 1),
    justifyContent: "center",
  },
}));

const Content = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="任务待办：" />
        </ListItem>
      </List>
      {/* <Fragment>
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
      </Fragment> */}
    </div>
  );
};

export default Content;
