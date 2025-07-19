import { Suspense, useId, useTransition } from 'react';
import Dashboard from './components/Dashboard';

export default function App() {
  const [isPending, startTransition] = useTransition();
  const instanceId = useId();                              // Demonstrates useId

  return (
    <div className="app">
      <header>
        <h1>South-America 3-D Sales Dashboard</h1>
        {isPending && <span>Loading component…</span>}
      </header>

      {/* Transition API to defer heavy chart load */}
      <button onClick={() => startTransition(() => {})}>
        Dummy transition button #{instanceId}
      </button>

      <Suspense fallback={<p>Loading data…</p>}>
        <Dashboard />
      </Suspense>
    </div>
  );
}
