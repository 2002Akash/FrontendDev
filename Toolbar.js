import useSpreadsheetStore from '../store/spreadsheetStore';

const Toolbar = () => {
  const { undo, redo } = useSpreadsheetStore();

  return (
    <div className="flex space-x-2 p-4">
      <button
        className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded"
        onClick={undo}
      >
        Undo
      </button>
      <button
        className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded"
        onClick={redo}
      >
        Redo
      </button>
    </div>
  );
};

export default Toolbar;
