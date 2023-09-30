import { BoardData, getColumn, getRow, getSquare } from "./board";
import { range } from "./util";

export function addAutoNotes(board: BoardData): BoardData {
  const b = structuredClone(board);

  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      const cell = b.cells[y][x];
      if (cell.value !== undefined) continue;

      const notes = new Set<number>(range(9, 1));

      const visibleCells = [
        ...getRow(b, y),
        ...getColumn(b, x),
        ...getSquare(b, Math.floor(x / 3), Math.floor(y / 3)),
      ];
      for (const other of visibleCells) {
        if (other.value !== undefined) {
          notes.delete(other.value);
        }
      }

      cell.notes = [...notes];
    }
  }

  return b;
}
