import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export function DogDialog({ src, name, dialogOpen, handleClose }) {
  return (
    <Dialog open={dialogOpen} onClose={handleClose}>
      <DialogTitle>{name}</DialogTitle>
      <DialogContent>
        <img src={src} alt="Selected Dog" style={{ maxWidth: "100%" }} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>閉じる</Button>
      </DialogActions>
    </Dialog>
  );
}
