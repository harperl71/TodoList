import React, { Fragment } from "react";
import TaskList from "./task-list";
import { Typography, AppBar, Toolbar } from "@material-ui/core";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  makeStyles,
  fade,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  },
  menuButton: {
    marginLeft: theme.spacing(6),
    marginRight: theme.spacing(3),
  },
  title: {
    width: "100%",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Content = () => {
  return (
    <div className="content">
      <Fragment>
        <Typography className="todo" variant="h5">
          任务待办：
        </Typography>
        <TaskList title="待办" status="todo" />
        <Typography className="todo" variant="h5">
          任务进行中：
        </Typography>
        <TaskList title="进行中" status="doing" />
        <Typography className="todo" variant="h5">
          任务已完成：
        </Typography>
        <TaskList title="已完成" status="done" />
      </Fragment>
    </div>
  );
};

export default Content;
