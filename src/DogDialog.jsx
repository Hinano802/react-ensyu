import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export function DogDialog({ data, dialogOpen, handleClose }) {
  return (
    <Dialog open={dialogOpen} onClose={handleClose}>
      <DialogTitle>{data.breed}</DialogTitle>
      <DialogContent>
        <img src={data.image} alt="Selected Dog" style={{ maxWidth: "100%" }} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>閉じる</Button>
      </DialogActions>
    </Dialog>
  );
}
