import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DeleteDialogSlide(props) {
  const { openDeleteDialog, onHandlerClose, onhandlerDelete } = props;

  return (
    <div>
      <Dialog
        open={openDeleteDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={onHandlerClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Delete"}
        </DialogTitle>
        <DialogContent fullWidth>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure want to delete ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onHandlerClose} color="primary" variant="contained">
            Cancel
          </Button>
          <Button onClick={onhandlerDelete} color="secondary" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
