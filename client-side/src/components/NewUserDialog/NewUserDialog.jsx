import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function NewUserDialog(props) {
  const { open, onHandlerClose, onHandlerSubmit, onhandleChange } = props;

  return (
    <div>
      <Dialog
        open={open}
        onClose={onHandlerClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New User</DialogTitle>
        <DialogContent>
          <TextField
            id="outlined-full-width"
            label="First Name"
            style={{ margin: 8 }}
            placeholder="First Name"
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
            onChange={onhandleChange}
            name="firstName"
          />
          <TextField
            id="outlined-full-width"
            label="Last Name"
            style={{ margin: 8 }}
            placeholder="Last Name"
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
            onChange={onhandleChange}
            name="lastName"
          />
          <TextField
            id="outlined-full-width"
            label="Discription"
            style={{ margin: 8 }}
            placeholder="Discription"
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
            onChange={onhandleChange}
            name="discription"
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={onHandlerClose}
            color="secondary"
            variant="contained"
          >
            Cancel
          </Button>
          <Button onClick={onHandlerSubmit} color="primary" variant="contained">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
