import "./CellValue.css";
import { ReactNode } from "react";

export type CellValueProps = {
  value: number;
};

export const CellValue = ({ value }: CellValueProps): ReactNode => {
  return <div className="cell--value">{value}</div>;
};
