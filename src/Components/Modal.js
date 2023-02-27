import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 220,
  bgcolor: "#000",
  border: "2px solid #fff",
  boxShadow: 24,
  p: 4,
  borderRadius: '5px',
  color: '#fff'
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={{color: 'black', fontWeight: '400'}} onClick={handleOpen}>Contato</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Contato
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Em caso de erro, mande email para o desenvolvedor: gustaalveess1302@gmail.com
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
