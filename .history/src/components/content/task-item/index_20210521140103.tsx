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
    margin: theme.spacing(0, 5),
    justifyContent: "space-between",
    backgroundColor: "",
  },
  deleteButton: {
    marginRight: theme.spacing(6),
  },
}));

const TaskItem = ({ Item }: { Item: TodoProps }) => {
  //console.log(Item);
  const classes = useStyles();

  const { Delete, Remove } = useContext(MyContext);

  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <section className="task-item">
      <ListItem className={classes.itemRoot} button dense>
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
