import React, { useContext } from "react";
import { MyContext } from "../../context";
import { makeStyles, Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  footer: {
    margin: theme.spacing(2),
  },
  button: {
    display: "flex",
  },
}));

const Footer = () => {
  const { Clear } = useContext(MyContext);

  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Button
        variant="text"
        color="primary"
        startIcon={<DeleteIcon />}
        onClick={() => {
          Clear();
        }}
        size="large"
        fullWidth
      >
        Clear
      </Button>
    </div>
  );
};

export default Footer;
