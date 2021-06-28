import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles, fade } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  header: {
    margin: theme.spacing(1),
    justifyContent: "space-between",
  },
  listButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
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

export default function SearchAppBar() {
  const classes = useStyles();

  const enterPress = (evt: React.SyntheticEvent) => {
    if (
      (evt as KeyboardEventInit).code === "Enter" &&
      (evt.target as HTMLInputElement).value !== ""
    ) {
      console.log((evt.target as HTMLInputElement).value);
      (evt.target as HTMLInputElement).value = "";
    }
  };

  return (
    <div className={classes.header}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.listButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            TodoList
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <AddIcon />
            </div>
            <InputBase
              placeholder="Add Todo…"
              required
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onKeyPress={enterPress}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
