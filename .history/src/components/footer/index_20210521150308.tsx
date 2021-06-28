import React, { useContext } from "react";
import { MyContext } from "../../context";
import { makeStyles, Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Footer = () => {
  const context = useContext(MyContext);

  const classes = useStyles();

  return (
    <div className="footer">
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
        Clear
      </Button>
    </div>
  );
};

export default Footer;
