import { ReactNode } from "react";
import { CellData } from "./types";
import { CellBackground } from "./CellBackground";
import { CellValue } from "./CellValue";
import { CellNotes } from "./CellNotes";

export type CellProps = {
  cell: CellData;
  highlighted: boolean;
};

export const Cell = ({
  cell: { value, notes },
  highlighted,
}: CellProps): ReactNode => {
  return (
    <CellBackground highlighted={highlighted}>
      {value !== undefined ? (
        <CellValue value={value} />
      ) : (
        <CellNotes notes={notes} />
      )}
    </CellBackground>
  );
};
