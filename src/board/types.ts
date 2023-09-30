import { CellData } from "../cell";
import { range } from "../util";

export type BoardData = {
  cells: CellData[][];
};

export function createBoard(): BoardData {
  return {
    cells: range(9).map(() =>
      range(9).map(
        (): CellData => ({
          value: undefined,
          locked: false,
          notes: [],
        }),
      ),
    ),
  };
}

export function loadBoard(boardString: string): BoardData {
  if (boardString.length !== 9 * 9) {
    throw new Error("Invalid board string: incorrect length");
  }

  const board = createBoard();

  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      const i = y * 9 + x;
      const rawValue = boardString[i];

      if (rawValue !== " ") {
        const cell = board.cells[y][x];
        cell.value = parseInt(rawValue);
        cell.locked = true;
      }
    }
  }

  return board;
}

export function getRow(board: BoardData, y: number): CellData[] {
  return board.cells[y];
}

export function getColumn(board: BoardData, x: number): CellData[] {
  return board.cells.map((row) => row[x]);
}

export function getSquare(
  board: BoardData,
  sx: number,
  sy: number,
): CellData[] {
  return range((sy + 1) * 3, sy * 3).flatMap((y) =>
    range((sx + 1) * 3, sx * 3).map((x) => board.cells[y][x]),
  );
}

export function cellsContain(cells: CellData[], value: number): boolean {
  return cells.some(({ value: cellValue }) => value === cellValue);
}
