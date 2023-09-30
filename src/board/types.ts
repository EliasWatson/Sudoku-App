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
