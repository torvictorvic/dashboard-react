import { createContext, useContext, useReducer, useSyncExternalStore } from 'react';
import { salesReducer, initialState } from './salesReducer';

const SalesContext = createContext();
export function useSales() { return useContext(SalesContext); }

export function SalesProvider({ children }) {
  const [state, dispatch] = useReducer(salesReducer, initialState);

  // Minimal demo
  const subscribe = (cb) => { const id = setInterval(cb, 60_000); return () => clearInterval(id); };
  const getSnapshot = () => state;
  useSyncExternalStore(subscribe, getSnapshot);   // no-op snapshot listener

  return <SalesContext.Provider value={{ state, dispatch }}>{children}</SalesContext.Provider>;
}
