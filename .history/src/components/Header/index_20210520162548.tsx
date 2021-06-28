import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  makeStyles,
  Theme,
  createStyles
  fade,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { MyContext } from "../../context";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
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
  })
);

const Header = () => {
  const classes = useStyles();

  const { Add } = useContext(MyContext);

  const enterPress = (evt: React.SyntheticEvent) => {
    if (
      (evt as KeyboardEventInit).code === "Enter" &&
      (evt.target as HTMLInputElement).value !== ""
    ) {
      Add((evt.target as HTMLInputElement).value);
      (evt.target as HTMLInputElement).value = "";
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
