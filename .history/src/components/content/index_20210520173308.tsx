import React, { Fragment } from "react";
import TaskList from "./task-list";
import {
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import AssignmentIcon from "@material-ui/icons/Assignment";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";

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
          <ListItemText secondary="待办任务" />
        </ListItem>
        <TaskList title="已完成" status="done" />
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <DirectionsRunIcon />
          </ListItemIcon>
          <ListItemText secondary="进行中任务" />
        </ListItem>
        <TaskList title="已完成" status="done" />
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <ThumbUpAltIcon />
          </ListItemIcon>
          <ListItemText secondary="进行中任务" />
        </ListItem>
        <TaskList title="已完成" status="done" />
        <Divider />
      </List>
    </div>
  );
};

export default Content;
