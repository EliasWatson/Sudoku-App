import { OptionsContext } from "../options";
import { classes } from "../util";
import "./CellBackground.css";
import { ReactNode, useContext } from "react";

export type CellBackgroundProps = {
  highlighted: boolean;
  children: ReactNode;
};

export const CellBackground = ({
  highlighted,
  children,
}: CellBackgroundProps): ReactNode => {
  const {
    theme: { cellSize },
  } = useContext(OptionsContext);

  return (
    <div
      className={classes(["cell-bg", [highlighted, "cell-bg--highlighted"]])}
      style={{ width: `${cellSize}px`, height: `${cellSize}px` }}
    >
      {children}
    </div>
  );
};
