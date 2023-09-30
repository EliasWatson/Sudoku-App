import "./Grid.css";
import { ReactNode } from "react";
import { classes } from "../util";

export type GridProps = {
  children: ReactNode;
  className?: string;
};

export const Grid = ({ children, className = "" }: GridProps): ReactNode => {
  const fullClassName = classes(["grid", [className !== "", className]]);

  return <div className={fullClassName}>{children}</div>;
};
