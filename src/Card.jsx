import { useState } from "react";
import { DogDialog } from "./DogDialog";

export function Card({ data }) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleClose = () => {
    setDialogOpen(false);
  };

  return (
    <section className={data.size}>
      <h2 className="breed">{data.breed}</h2>
      <p>{data.size}</p>
      <img
        src={data.image}
        alt={data.breed}
        onClick={() => setDialogOpen(true)}
        style={{ cursor: "pointer" }}
      />
      <DogDialog
        data={data}
        dialogOpen={dialogOpen}
        handleClose={handleClose}
      />
    </section>
  );
}
