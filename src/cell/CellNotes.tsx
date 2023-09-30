import { CellNote } from "./CellNote";
import "./CellNotes.css";
import { ReactNode } from "react";

export type CellNotesProps = {
  notes: number[];
};

export const CellNotes = ({ notes }: CellNotesProps): ReactNode => {
  return (
    <div className="cell--notes">
      <div className="cell--notes__row">
        <CellNote value={1} notes={notes} />
        <CellNote value={2} notes={notes} />
        <CellNote value={3} notes={notes} />
      </div>
      <div className="cell--notes__row">
        <CellNote value={4} notes={notes} />
        <CellNote value={5} notes={notes} />
        <CellNote value={6} notes={notes} />
      </div>
      <div className="cell--notes__row">
        <CellNote value={7} notes={notes} />
        <CellNote value={8} notes={notes} />
        <CellNote value={9} notes={notes} />
      </div>
    </div>
  );
};
