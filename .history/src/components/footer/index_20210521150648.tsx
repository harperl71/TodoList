import React, { useContext } from "react";
import { MyContext } from "../../context";
import { makeStyles, Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  footer: {
    display: "flex",
  },
  button: {
    margin: theme.spacing(1),
    justifyContent: "center",
  },
}));

const Footer = () => {
  const { Clear } = useContext(MyContext);

  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<DeleteIcon />}
        onClick={() => {
          Clear();
        }}
      >
        Clear
      </Button>
    </div>
  );
};

export default Footer;
