import React, { useContext } from "react";
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
  root: {
    margin: theme.spacing(0, 6),
    justifyContent: "space-between",
  },
  listTitle: {
    justifyContent: "center",
  },
  listHeader: {
    padding: 0,
  },
  list: {
    padding: 0,
  },
  listnum: {
    marginRight: theme.spacing(3),
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
  //console.log(todoList);

  return (
    <div className={classes.root}>
      <section className={classes.listTitle} id={title}>
        <List
          className={classes.list}
          component="nav"
          aria-label="main mailbox folders"
        >
          <ListItem className={classes.listHeader} button>
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
          <section className={title}>
            {todoList
              .filter((item) => {
                return item.status === status;
              })
              .map((item) => {
                return <TaskItem />;
              })}
          </section>
          <Divider />
        </List>
    </div>
  );
};

export default TaskList;
