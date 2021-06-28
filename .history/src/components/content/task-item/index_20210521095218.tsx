import React, { useContext } from "react";
import { MyContext } from "../../../context";
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
  itemRoot: {
    margin: theme.spacing(0, 6),
    justifyContent: "space-between",
    backgroundColor: theme.palette.background.paper,
  },
}));

const TaskItem = () => {
  const classes = useStyles();

  const context = useContext(MyContext);

  return (
    <ListItem className={classes.itemRoot}>
      <ListItemIcon>
        <Checkbox
          edge="start"
          //checked={}
          tabIndex={-1}
          disableRipple
        />
      </ListItemIcon>
      <ListItemText primary={12345} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="comments">
          <CommentIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TaskItem;
