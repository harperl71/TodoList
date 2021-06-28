import React, { Fragment } from "react";
import TaskList from "./task-list";
import {
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/Inbox";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "2ch",
    justifyContent: "space-between",
  },
}));

const Content = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
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
