import { useState } from "react";
import { DogDialog } from "./DogDialog";

export function Card({ src }) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleClose = () => {
    setDialogOpen(false);
  };
  const name = src.match(/\/breeds\/([^/]+)\//);

  return (
    <section>
      <h2 className="breed">{name && name[1]}</h2>
      <img
        src={src}
        alt={name && name[1]}
        onClick={() => setDialogOpen(true)}
        style={{ cursor: "pointer" }}
      />
      <DogDialog
        src={src}
        name={name && name[1]}
        dialogOpen={dialogOpen}
        handleClose={handleClose}
      />
    </section>
  );
}
