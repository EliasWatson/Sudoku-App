import { ReactNode, useCallback, useContext } from "react";
import { CellData } from "./types";
import { CellBackground } from "./CellBackground";
import { CellValue } from "./CellValue";
import { CellNotes } from "./CellNotes";
import { GameDataContext } from "../game/context";

export type CellProps = {
  x: number;
  y: number;
  cell: CellData;
};

export const Cell = ({
  x,
  y,
  cell: { value, notes, selected, highlighted },
}: CellProps): ReactNode => {
  const { onCellClicked } = useContext(GameDataContext);

  const onClick = useCallback(() => onCellClicked(x, y), [x, y, onCellClicked]);

  return (
    <div onClick={onClick}>
      <CellBackground selected={selected} highlighted={highlighted}>
        {value !== undefined ? (
          <CellValue value={value} />
        ) : (
          <CellNotes notes={notes} />
        )}
      </CellBackground>
    </div>
  );
};
