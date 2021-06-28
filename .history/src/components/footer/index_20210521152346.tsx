import React, { useContext } from "react";
import { MyContext } from "../../context";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

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
