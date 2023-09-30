import "./Board.css";
import { ReactNode } from "react";
import { BoardData } from "../board";
import { Grid, GridRow } from "../grid";
import { BoardSquare } from "./BoardSquare";

export type BoardProps = {
  board: BoardData;
};

export const Board = ({ board }: BoardProps): ReactNode => {
  return (
    <Grid className="board">
      <GridRow>
        <BoardSquare board={board} x={0} y={0} />
        <BoardSquare board={board} x={1} y={0} />
        <BoardSquare board={board} x={2} y={0} />
      </GridRow>
      <GridRow>
        <BoardSquare board={board} x={0} y={1} />
        <BoardSquare board={board} x={1} y={1} />
        <BoardSquare board={board} x={2} y={1} />
      </GridRow>
      <GridRow>
        <BoardSquare board={board} x={0} y={2} />
        <BoardSquare board={board} x={1} y={2} />
        <BoardSquare board={board} x={2} y={2} />
      </GridRow>
    </Grid>
  );
};
