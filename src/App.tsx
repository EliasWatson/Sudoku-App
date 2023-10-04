import "./App.css";
import { ReactNode, useCallback, useState } from "react";
import { Board, BoardData, getColumn, getRow, getSquare } from "./board";
import { Options, OptionsContext } from "./options";
import { GameDataContext } from "./game/context";
import { generateSolvedBoard } from "./game/generator";

export const App = (): ReactNode => {
  const [options, setOptions] = useState<Options>({
    theme: { cellSize: 64, valueFontSize: 32, noteFontSize: 18 },
  });
  const [board, setBoard] = useState(
    () => generateSolvedBoard(),
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
