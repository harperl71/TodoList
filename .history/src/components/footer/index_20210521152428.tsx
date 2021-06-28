import React, { useContext } from "react";
import { MyContext } from "../../context";
import { makeStyles, Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  footer: {
    margin: theme.spacing(2),
  },
  button: {
    //margin:0 auto
  },
}));

const Footer = () => {
  const { Clear } = useContext(MyContext);

  return (
    <div className={classes.footer}>
      <Button
        variant="text"
        color="primary"
        startIcon={<DeleteIcon />}
        onClick={() => {
          Clear();
        }}
        fullWidth
      >
        Clear
      </Button>
    </div>
  );
};

export default Footer;
