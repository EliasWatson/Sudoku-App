import "./BoardSquare.css";
import { ReactNode } from "react";
import { BoardData } from "../board";
import { Grid, GridRow } from "../grid";
import { Cell } from "../cell";

export type BoardSquareProps = {
  board: BoardData;
  x: number;
  y: number;
};

export const BoardSquare = ({
  board: { cells },
  x,
  y,
}: BoardSquareProps): ReactNode => {
  const xOffset = x * 3;
  const yOffset = y * 3;

  return (
    <Grid className="board--square">
      <GridRow>
        <Cell cell={cells[yOffset][xOffset]} highlighted={false} />
        <Cell cell={cells[yOffset][xOffset + 1]} highlighted={false} />
        <Cell cell={cells[yOffset][xOffset + 2]} highlighted={false} />
      </GridRow>
      <GridRow>
        <Cell cell={cells[yOffset + 1][xOffset]} highlighted={false} />
        <Cell cell={cells[yOffset + 1][xOffset + 1]} highlighted={false} />
        <Cell cell={cells[yOffset + 1][xOffset + 2]} highlighted={false} />
      </GridRow>
      <GridRow>
        <Cell cell={cells[yOffset + 2][xOffset]} highlighted={false} />
        <Cell cell={cells[yOffset + 2][xOffset + 1]} highlighted={false} />
        <Cell cell={cells[yOffset + 2][xOffset + 2]} highlighted={false} />
      </GridRow>
    </Grid>
  );
};
