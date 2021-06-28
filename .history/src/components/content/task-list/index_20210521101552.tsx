import React, { Fragment, useContext } from "react";
import TaskItem from "../task-item";
import { MyContext } from "../../../context";
import {
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
} from "@material-ui/core";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";

const useStyles = makeStyles((theme) => ({
  list: {
    margin: theme.spacing(0, 4),
    justifyContent: "space-between",
    padding: 0,
  },
  listTitle: {
    justifyContent: "center",
  },
  listnum: {
    marginRight: theme.spacing(3),
    padding: 0,
    color: "secondary",
  },
}));

interface Iprops {
  title: string;
  status: string;
}

const TaskList = ({ title, status }: Iprops) => {
  const classes = useStyles();

  const { todoList } = useContext(MyContext);
  console.log(todoList);

  return (
    <List
      className={classes.list}
      component="nav"
      aria-label="main mailbox folders"
    >
      <ListItem className="ListHeader" button>
        <ListItemIcon>
          <DirectionsRunIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary={title} />
        <IconButton
          className={classes.listnum}
          color="primary"
          aria-label="list-num"
        >
          {
            todoList.filter((item) => {
              return item.status === status;
            }).length
          }
        </IconButton>
      </ListItem>
      <ListItem className={title} style={{ padding: 0 }}>
        {todoList
          .filter((item) => {
            return item.status === status;
          })
          .map((item) => {
            return <TaskItem />;
          })}
      </ListItem>
      <Divider />
    </List>
  );
};

export default TaskList;
