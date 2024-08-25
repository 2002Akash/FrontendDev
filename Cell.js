import { useState } from 'react';
import useSpreadsheetStore from '../store/spreadsheetStore';

const Cell = ({ index, value }) => {
  const { updateCell, pushUndo } = useSpreadsheetStore();
  const [editing, setEditing] = useState(false);

  const handleChange = (e) => {
    pushUndo(); // Push the current state to the undo stack before making a change
    updateCell(index, e.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      onFocus={() => setEditing(true)}
      onBlur={() => setEditing(false)}
      className={`border p-2 text-center ${
        editing ? 'bg-blue-100' : 'bg-white'
      } focus:outline-none`}
    />
  );
};

export default Cell;
