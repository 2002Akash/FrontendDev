import CellGrid from '../components/CellGrid';
import Toolbar from '../components/Toolbar';

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl text-center my-4">Spreadsheet App</h1>
      <Toolbar />
      <CellGrid />
    </div>
  );
}
