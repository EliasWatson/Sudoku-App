import "./App.css";
import { ReactNode, useState } from "react";
import { Board, loadBoard } from "./board";
import { Options, OptionsContext } from "./options";
import { addAutoNotes } from "./game";

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

  return (
    <OptionsContext.Provider value={options}>
      <div>
        <Board board={board} />
      </div>
    </OptionsContext.Provider>
  );
};
