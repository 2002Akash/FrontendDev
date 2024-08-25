import { FixedSizeGrid as Grid } from 'react-window';
import useSpreadsheetStore from '../store/spreadsheetStore';
import Cell from './Cell';

const CellGrid = () => {
  const { cells } = useSpreadsheetStore();

  return (
    <Grid
      columnCount={10}
      rowCount={100}
      columnWidth={100}
      rowHeight={50}
      width={1000}
      height={500}
    >
      {({ columnIndex, rowIndex, style }) => {
        const cellIndex = rowIndex * 10 + columnIndex;
        return (
          <div style={style}>
            <Cell key={cellIndex} index={cellIndex} value={cells[cellIndex]} />
          </div>
        );
      }}
    </Grid>
  );
};

export default CellGrid;
