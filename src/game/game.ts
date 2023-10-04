import { BoardData, getColumn, getRow, getSquare } from "../board";
import { range } from "../util";

export function getPossibleValues(
  board: BoardData,
  row: number,
  col: number,
): Set<number> {
  const cell = board.cells[row][col];

  const originalCellValue = cell.value;
  cell.value = undefined;

  const possibleValues = new Set<number>(range(10, 1));

  const visibleCells = [
    ...getRow(board, row),
    ...getColumn(board, col),
    ...getSquare(board, col, row),
  ];
  for (const other of visibleCells) {
    if (other.value !== undefined) {
      possibleValues.delete(other.value);
    }
  }

  cell.value = originalCellValue;

  return possibleValues;
}

export function addAutoNotes(board: BoardData): BoardData {
  const b: BoardData = { cells: [...board.cells] };

  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      const cell = b.cells[y][x];
      if (cell.value !== undefined) continue;

      const notes = getPossibleValues(b, y, x);
      b.cells[y][x] = { ...cell, notes: [...notes] };
    }
  }

  return b;
}

export function countUnknownCells(board: BoardData): number {
  let count = 0;

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board.cells[row][col].value === undefined) {
        count++;
      }
    }
  }

  return count;
}
