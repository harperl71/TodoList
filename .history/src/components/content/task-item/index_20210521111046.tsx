import React, { useContext } from "react";
import { MyContext, TodoProps } from "../../../context";
import {
  makeStyles,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Checkbox,
  IconButton,
} from "@material-ui/core";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";

const useStyles = makeStyles((theme) => ({
  itemRoot: {
    margin: theme.spacing(0, 10),
    justifyContent: "space-between",
    backgroundColor: theme.palette.background.paper,
  },
}));

const TaskItem = ({item}:{item:TodoProps}) => {
  const classes = useStyles();

  const { todoList, Delete, Remove } = useContext(MyContext);

  const clickDelete = () => {};

  return (
    <section className="task-item">
      <ListItem className={classes.itemRoot}>
        <ListItemIcon>
          <Checkbox
            edge="start"
            //checked={}
            // tabIndex={-1}
            // disableRipple
          />
        </ListItemIcon>
        <ListItemText id={todoList.} primary={12345} />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="comments"
            onClick={(id:number) => {
              Delete();
            }}
          >
            <DeleteForeverOutlinedIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </section>
  );
};

export default TaskItem;
