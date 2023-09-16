import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
};

export default function AddConversation({ open, setOpen }) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h5" sx={{ mb: 3 }}>
            Add New Conversation
          </Typography>
          <TextField
            id="outlined-basic"
            label="Enter  Id"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            id="outlined-basic"
            label="Enter  Id"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
          />
          <Button variant="contained">Add</Button>
        </Box>
      </Modal>
    </div>
  );
}
