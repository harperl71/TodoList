import React, { KeyboardEvent, ChangeEvent } from "react";
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
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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

interface Iprops {
  Add: (item: string) => void;
}

const Header = ({ Add }: Iprops) => {
  const classes = useStyles();

  const enterPress = (evt: React.SyntheticEvent) => {
    if ((evt as KeyboardEventInit).code === "Enter") {
      console.log((evt.target as HTMLInputElement).value);
      //debugger;
      //console.log((evt.target as HTMLInputElement).value);
      // }
    }
  };

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit">
            <MenuIcon fontSize="large" />
          </IconButton>
          <Typography className={classes.title} variant="h4">
            ToDoList
          </Typography>
          <div className={classes.search}>
            <section className={classes.searchIcon}>
              <SearchIcon fontSize="large" />
            </section>
            <InputBase
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
              id="title"
              placeholder="Add Todo"
              required
              autoComplete="off"
              onKeyPress={enterPress}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
