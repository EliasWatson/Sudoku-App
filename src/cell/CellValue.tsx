import "./CellValue.css";
import { OptionsContext } from "../options";
import { ReactNode, useContext } from "react";

export type CellValueProps = {
  value: number;
};

export const CellValue = ({ value }: CellValueProps): ReactNode => {
  const {
    theme: { valueFontSize },
  } = useContext(OptionsContext);

  return (
    <div className="cell--value" style={{ fontSize: `${valueFontSize}px` }}>
      {value}
    </div>
  );
};
