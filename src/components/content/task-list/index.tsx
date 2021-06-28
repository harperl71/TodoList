import React, { useContext } from "react";
import TaskItem from "../task-item";
import { MyContext } from "../../../context";
import {
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@material-ui/core";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";

const useStyles = makeStyles((theme) => ({
  list: {
    margin: theme.spacing(0, 4),
    justifyContent: "space-between",
    padding: 0,
  },
  listHeader: {
    marginTop: theme.spacing(1),
    backgroundColor: "#e8f4fd",
  },
  listTitle: {
    justifyContent: "center",
  },
  listnum: {
    marginRight: theme.spacing(3),
    padding: 0,
    color: "secondary",
  },
  listContent: {
    padding: 0,
  },
}));

interface Iprops {
  title: string;
  status: string;
}

const TaskList = ({ title, status }: Iprops) => {
  const classes = useStyles();
  const { todoList } = useContext(MyContext);

  return (
    <div className="task-list">
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
        <List className={title}>
          {todoList
            .filter((item) => {
              return item.status === status;
            })
            .map((item) => {
              return <TaskItem Item={item} />;
            })}
        </List>
      </List>
    </div>
  );
};

export default TaskList;
