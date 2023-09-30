import { createContext } from "react";

export type GameData = {
  onCellClicked: (x: number, y: number) => void;
};

export const GameDataContext = createContext<GameData>({
  onCellClicked: () => {
    /* Do nothing. */
  },
});
