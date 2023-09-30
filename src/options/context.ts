import { createContext } from "react";
import { Options } from "./types";

export const OptionsContext = createContext<Options>({
  theme: {
    cellSize: 64,
  },
});
