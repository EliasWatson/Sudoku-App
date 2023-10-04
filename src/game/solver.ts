import { getPossibleValues } from ".";
import { BoardData } from "../board";

export function solve(board: BoardData): void {
  let unsolvable = false;

  while (!unsolvable) {
    unsolvable = true;

    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        const cell = board.cells[row][col];
        if (cell.value !== undefined) continue;

        const possibleValues = getPossibleValues(board, row, col);
        if (possibleValues.size === 1) {
          cell.value = [...possibleValues][0];
          unsolvable = false;
        }
      }
    }
  }
}
