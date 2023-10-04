import { countUnknownCells, getPossibleValues } from ".";
import { BoardData, createBoard } from "../board";
import { CELL_COORDS, range, shuffle } from "../util";
import { solve } from "./solver";

export function generateSolvedBoard(): BoardData {
  const startTime = performance.now();

  for (let i = 0; true; i++) {
    if (performance.now() - startTime > 1000) {
      throw new Error("Failed to generate a valid board within the time limit");
    }

    const board = tryToGenerateSolvedBoard();
    if (board !== undefined) {
      console.log(`Generated board after ${i + 1} attempts in ${Math.round(performance.now() - startTime)} ms.`);
      return board;
    }
  }
}

export function tryToGenerateSolvedBoard(): BoardData | undefined {
  let board = createBoard();

  for (let row = 0; row < 9; row++) {
    const values = shuffle(range(10, 1));

    for (let col = 0; col < 9; col++) {
      board.cells[row][col].value = values[col];
    }
  }

  const invalidCells: [number, number][] = [];
  for (const [row, col] of CELL_COORDS) {
    const cell = board.cells[row][col];
    const value = cell.value;
    if (value === undefined) {
      throw new Error("New board has an undefined cell");
    }

    const possibleValues = getPossibleValues(board, row, col);

    if (!possibleValues.has(value)) {
      invalidCells.push([row, col]);
    }
  }

  for (const [row, col] of invalidCells) {
    board.cells[row][col].value = undefined;
  }

  while (countUnknownCells(board) > 0) {
    solve(board);

    for (const [row, col] of CELL_COORDS) {
      const cell = board.cells[row][col];
      if (cell.value !== undefined) continue;

      const possibleValues = getPossibleValues(board, row, col);
      if (possibleValues.size === 0) {
        return undefined;
      }

      cell.value = shuffle([...possibleValues])[0];
      break;
    }
  }

  return board;
}
