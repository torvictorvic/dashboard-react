import { useState, useEffect, useMemo, useDeferredValue, useDebugValue } from 'react';
import raw from '../data/sales_2024.json';

export function useSalesData(country) {
  const [data, setData] = useState([]);
  useEffect(() => { setData(raw); }, []);

  const filtered = useMemo(
    () => (country === 'All' ? data : data.filter(r => r.country === country)),
    [country, data]
  );

  const deferred = useDeferredValue(filtered);   // smooth filtering UI
  useDebugValue(`rows: ${deferred.length}`);

  return deferred;
}
