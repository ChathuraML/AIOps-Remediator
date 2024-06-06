import { Card } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import * as React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const RemediationConfirmation = ({
  open,
  problemId,
  remediationId,
  handleOpen,
}) => {
  return (
    <div>
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card>
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Confirm Your Request!
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              This action cannot undone. Are You sure to delete ?
            </Typography>
            <br />
              <Button
                variant="outlined"
                onClick={() => {
                  handleOpen(false);
                }}
              >
                Delete
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  handleOpen(false);
                }}
              >
                Cancel
              </Button>
          </Box>
        </Card>
      </Modal>
    </div>
  );
};

export default RemediationConfirmation;
