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
    marginLeft: theme.spacing(5),
    justifyContent: "space-between",
    backgroundColor: theme.palette.background.paper,
  },
  deleteButton: {
    marginRight: theme.spacing(6),
  },
}));

const TaskItem = ({ Item }: { Item: TodoProps }) => {
  console.log(Item);
  const classes = useStyles();

  const {  Delete, Remove } = useContext(MyContext);

  return (
    <section className="task-item">
      <ListItem className={classes.itemRoot}>
        <ListItemIcon>
          <Checkbox
            color="primary"
            edge="start"
            //checked={}
            onChange={() => {
              Remove(Item.id, Item.status);
            }}
          />
        </ListItemIcon>
        <ListItemText primary={Item.text} />
        <ListItemSecondaryAction>
          <IconButton
            className={classes.deleteButton}
            edge="end"
            aria-label="comments"
            onClick={() => {
              Delete(Item.id);
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
