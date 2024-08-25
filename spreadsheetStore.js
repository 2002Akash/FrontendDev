import create from 'zustand';

const useSpreadsheetStore = create((set) => ({
  cells: Array(1000).fill(''),
  history: [],
  redoStack: [],
  maxHistorySize: 50,
  updateCell: (index, value) =>
    set((state) => {
      const newCells = [...state.cells];
      newCells[index] = value;
      return { cells: newCells };
    }),
  pushUndo: (cells) => set((state) => {
    const newHistory = [...state.history, cells];
    if (newHistory.length > state.maxHistorySize) newHistory.shift();
    return { history: newHistory, redoStack: [] };
  }),
  undo: () => set((state) => {
    if (state.history.length === 0) return;
    const previousState = state.history.pop();
    return { cells: previousState, redoStack: [...state.redoStack, state.cells] };
  }),
  redo: () => set((state) => {
    if (state.redoStack.length === 0) return;
    const nextState = state.redoStack.pop();
    return { cells: nextState, history: [...state.history, state.cells] };
  }),
}));

export default useSpreadsheetStore;
