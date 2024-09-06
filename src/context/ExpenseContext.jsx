import React, { createContext, useReducer, useContext } from 'react';

const ExpenseStateContext = createContext();
const ExpenseDispatchContext = createContext();

const initialState = {
  expenses: [],
  budget: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return { ...state, expenses: [...state.expenses, action.payload] };
    case 'SET_BUDGET':
      return { ...state, budget: action.payload };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

export function ExpenseProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ExpenseStateContext.Provider value={state}>
      <ExpenseDispatchContext.Provider value={dispatch}>
        {children}
      </ExpenseDispatchContext.Provider>
    </ExpenseStateContext.Provider>
  );
}

export function useExpenseState() {
  return useContext(ExpenseStateContext);
}

export function useExpenseDispatch() {
  return useContext(ExpenseDispatchContext);
}
