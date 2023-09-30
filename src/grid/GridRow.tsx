import "./GridRow.css";
import { ReactNode } from "react";
import { classes } from "../util";

export type GridRowProps = {
  children: ReactNode;
  className?: string;
};

export const GridRow = ({
  children,
  className = "",
}: GridRowProps): ReactNode => {
  const fullClassName = classes(["grid--row", [className !== "", className]]);

  return <div className={fullClassName}>{children}</div>;
};
