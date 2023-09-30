import { ReactNode, useState } from "react";
import "./App.css";
import { Board, createBoard } from "./board";
import { Options, OptionsContext } from "./options";

export const App = (): ReactNode => {
  const [options, setOptions] = useState<Options>({ theme: { cellSize: 64 } });
  const [board, setBoard] = useState(() => createBoard());

  return (
    <OptionsContext.Provider value={options}>
      <div>
        <Board board={board} />
      </div>
    </OptionsContext.Provider>
  );
};
