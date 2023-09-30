import "./App.css";
import { ReactNode, useCallback, useState } from "react";
import {
  Board,
  BoardData,
  getColumn,
  getRow,
  getSquare,
  loadBoard,
} from "./board";
import { Options, OptionsContext } from "./options";
import { addAutoNotes } from "./game";
import { GameDataContext } from "./game/context";

const TEST_BOARD_STRING: string =
  "  916435 " +
  "5 7  36 1" +
  "3        " +
  "67 91  35" +
  "  3657 1 " +
  " 25 4   9" +
  "  849  2 " +
  "45  36  8" +
  "932    4 ";

export const App = (): ReactNode => {
  const [options, setOptions] = useState<Options>({
    theme: { cellSize: 64, valueFontSize: 32, noteFontSize: 18 },
  });
  const [board, setBoard] = useState(() =>
    addAutoNotes(loadBoard(TEST_BOARD_STRING)),
  );

  const onCellClicked = useCallback(
    (x: number, y: number): void =>
      setBoard((currentBoard): BoardData => {
        const b = { ...currentBoard };

        for (let y = 0; y < 9; y++) {
          for (let x = 0; x < 9; x++) {
            b.cells[y][x].highlighted = false;
            b.cells[y][x].selected = false;
          }
        }

        b.cells[y][x].selected = true;

        getRow(b, y).forEach((cell) => (cell.highlighted = true));
        getColumn(b, x).forEach((cell) => (cell.highlighted = true));
        getSquare(b, x, y).forEach((cell) => (cell.highlighted = true));

        return b;
      }),
    [],
  );

  return (
    <OptionsContext.Provider value={options}>
      <GameDataContext.Provider value={{ onCellClicked }}>
        <div>
          <Board board={board} />
        </div>
      </GameDataContext.Provider>
    </OptionsContext.Provider>
  );
};
