import React, { useContext, useState } from "react";
import { MyContext, TodoProps } from "../../../context";
import {
  makeStyles,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Checkbox,
  IconButton,
  fade,
} from "@material-ui/core";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";

const useStyles = makeStyles((theme) => ({
  itemRoot: {
    justifyContent: "space-between",
    "&:hover": {
      backgroundColor: "#90caf9",
      // fade(theme.palette.common.white, 0.5)
    },
  },
  checkbox: {
    margin: theme.spacing(0, 4, 0, 6),
  },
  deleteButton: {
    marginRight: theme.spacing(6),
  },
}));

const TaskItem = ({ Item }: { Item: TodoProps }) => {
  //console.log(Item);
  const classes = useStyles();

  const { Delete, Remove } = useContext(MyContext);

  return (
    <section className="task-item">
      <ListItem className={classes.itemRoot} button dense>
        <ListItemIcon>
          <Checkbox
            className={classes.checkbox}
            color="primary"
            edge="start"
            onChange={() => {
              Remove(Item.id, Item.status);
            }}
            checked={Item.status === "done"}
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
