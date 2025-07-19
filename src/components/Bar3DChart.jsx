import Plot from 'react-plotly.js';
import { forwardRef, useRef, useImperativeHandle, useCallback, useLayoutEffect } from 'react';

const Bar3DChart = forwardRef(({ rows }, ref) => {
  const chartRef = useRef();

  // Imperative API demo
  useImperativeHandle(ref, () => ({
    toImage: () => chartRef.current?.getPlotly().then(p => Plotly.toImage(p))
  }));

  // Resize handler with useCallback
  const handleResize = useCallback(() => chartRef.current?.resizeHandler(), []);

  useLayoutEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  const x = rows.map(r => r.date);
  const y = rows.map(r => r.country);
  const z = rows.map(r => r.sales);

  return (
    <Plot
      ref={chartRef}
      data={[{ type: 'bar3d', x, y, z }]}
      layout={{
        title: '2024 Daily Sales',
        scene: { xaxis: { title: 'Date' }, yaxis: { title: 'Country' }, zaxis: { title: 'Sales (USD)' } },
        autosize: true
      }}
      useResizeHandler
      style={{ width: '100%', height: '600px' }}
    />
  );
});
export default Bar3DChart;
