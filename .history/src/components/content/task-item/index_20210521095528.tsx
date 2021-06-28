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
  List,
} from "@material-ui/core";
import CommentIcon from "@material-ui/icons/Comment";

const useStyles = makeStyles((theme) => ({
  itemRoot: {
    margin: theme.spacing(0, 10),
    justifyContent: "space-between",
    backgroundColor: theme.palette.background.paper,
  },
}));

const TaskItem = () => {
  const classes = useStyles();

  const context = useContext(MyContext);

  return (
    <List className={classes.itemRoot}>
      <ListItem>
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
    </List>
  );
};

export default TaskItem;
