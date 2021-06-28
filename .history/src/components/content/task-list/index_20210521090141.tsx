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
  list: {
    //margin: theme.spacing(0, 6),
    justifyContent: "space-between",
  },
  listTitle: {
    justifyContent: "center",
  },
  listHeader: {
    padding: 0,
  },
  listnum: {
    marginRight: theme.spacing(2),
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
    <div className={classes.list}>
      <section className={classes.listTitle} id={title}>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <ListItemIcon>
              <DirectionsRunIcon />
            </ListItemIcon>
            <ListItemText secondary={title} />
            <IconButton className={classes.listnum} aria-label="list-num">
              {
                todoList.filter((item) => {
                  return item.status === status;
                }).length
              }
            </IconButton>
          </ListItem>
          <Divider />
        </List>
      </section>
      <section className={title}>
        {todoList
          .filter((item) => {
            return item.status === status;
          })
          .map((item) => {
            return <TaskItem />;
          })}
      </section>
    </div>
  );
};

export default TaskList;
