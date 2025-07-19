import { useRef } from 'react';
import Bar3DChart from './Bar3DChart';
import { useSales } from '../state/SalesContext';
import { useSalesData } from '../hooks/useSalesData';

export default function Dashboard() {
  const { state, dispatch } = useSales();
  const rows = useSalesData(state.selectedCountry);
  const chartRef = useRef();

  /* useInsertionEffect ⬇: injects a quick CSS variable before painting */
  useInsertionEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--primary', '#0d9488');
  }, []);

  return (
    <section>
      <select
        value={state.selectedCountry}
        onChange={e => dispatch({ type: 'SET_COUNTRY', payload: e.target.value })}
      >
        <option value="All">All Countries</option>
        {Array.from(new Set(rows.map(r => r.country))).map(c => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      <Bar3DChart ref={chartRef} rows={rows} />
    </section>
  );
}
