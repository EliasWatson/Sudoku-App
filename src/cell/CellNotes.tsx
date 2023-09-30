import { Grid, GridRow } from "../grid";
import { CellNote } from "./CellNote";
import { ReactNode } from "react";

export type CellNotesProps = {
  notes: number[];
};

export const CellNotes = ({ notes }: CellNotesProps): ReactNode => {
  return (
    <Grid>
      <GridRow>
        <CellNote value={1} notes={notes} />
        <CellNote value={2} notes={notes} />
        <CellNote value={3} notes={notes} />
      </GridRow>
      <GridRow>
        <CellNote value={4} notes={notes} />
        <CellNote value={5} notes={notes} />
        <CellNote value={6} notes={notes} />
      </GridRow>
      <GridRow>
        <CellNote value={7} notes={notes} />
        <CellNote value={8} notes={notes} />
        <CellNote value={9} notes={notes} />
      </GridRow>
    </Grid>
  );
};
