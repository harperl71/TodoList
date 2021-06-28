import React, { useContext } from "react";
import MyContext from "../../../context";
import {
  makeStyles,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Checkbox,
  IconButton,
} from "@material-ui/core";
import CommentIcon from "@material-ui/icons/Comment";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const { todoList } = useContext(MyContext);

const TaskItem = () => {
  return <div className="item"></div>;
};

export default TaskItem;
