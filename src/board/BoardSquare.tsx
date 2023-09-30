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
        <Cell x={xOffset + 0} y={yOffset + 0} cell={cells[yOffset][xOffset]} />
        <Cell
          x={xOffset + 1}
          y={yOffset + 0}
          cell={cells[yOffset][xOffset + 1]}
        />
        <Cell
          x={xOffset + 2}
          y={yOffset + 0}
          cell={cells[yOffset][xOffset + 2]}
        />
      </GridRow>
      <GridRow>
        <Cell
          x={xOffset + 0}
          y={yOffset + 1}
          cell={cells[yOffset + 1][xOffset]}
        />
        <Cell
          x={xOffset + 1}
          y={yOffset + 1}
          cell={cells[yOffset + 1][xOffset + 1]}
        />
        <Cell
          x={xOffset + 2}
          y={yOffset + 1}
          cell={cells[yOffset + 1][xOffset + 2]}
        />
      </GridRow>
      <GridRow>
        <Cell
          x={xOffset + 0}
          y={yOffset + 2}
          cell={cells[yOffset + 2][xOffset]}
        />
        <Cell
          x={xOffset + 1}
          y={yOffset + 2}
          cell={cells[yOffset + 2][xOffset + 1]}
        />
        <Cell
          x={xOffset + 2}
          y={yOffset + 2}
          cell={cells[yOffset + 2][xOffset + 2]}
        />
      </GridRow>
    </Grid>
  );
};
