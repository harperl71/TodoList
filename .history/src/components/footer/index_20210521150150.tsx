import React, { useContext } from "react";
import { MyContext } from "../../context";
import { makeStyles,Button,DeleteIcon,  } from '@material-ui/core';
import from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  }),
);

const Footer = () => {
  const context=useContext(MyContext)
  return <div className="footer">
    <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
        Clear
      </Button>
  </div>;
};

export default Footer;
