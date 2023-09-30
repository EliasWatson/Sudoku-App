import "./CellNote.css";
import { ReactNode, useMemo } from "react";

export type CellNoteProps = { value: number; notes: number[] };

export const CellNote = ({ value, notes }: CellNoteProps): ReactNode => {
  const text = useMemo(
    () => (notes.indexOf(value) >= 0 ? `${value}` : " "),
    [value, notes],
  );

  return <div className="cell--notes__note">{text}</div>;
};
