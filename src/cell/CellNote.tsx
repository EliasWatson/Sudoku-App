import { OptionsContext } from "../options";
import "./CellNote.css";
import { ReactNode, useContext, useMemo } from "react";

export type CellNoteProps = { value: number; notes: number[] };

export const CellNote = ({ value, notes }: CellNoteProps): ReactNode => {
  const {
    theme: { cellSize, noteFontSize },
  } = useContext(OptionsContext);
  const noteCellSize = cellSize / 3;

  const text = useMemo(
    () => (notes.indexOf(value) >= 0 ? `${value}` : " "),
    [value, notes],
  );

  return (
    <div
      className="cell--notes__note"
      style={{
        width: `${noteCellSize}px`,
        height: `${noteCellSize}px`,
        fontSize: `${noteFontSize}px`,
      }}
    >
      {text}
    </div>
  );
};
