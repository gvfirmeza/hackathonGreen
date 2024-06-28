import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'Sala A', color: '#4caf50' },
            { id: 1, value: 15, label: 'Sala B', color: '#81c784' },
            { id: 2, value: 20, label: 'Sala C', color: '#2e7d32' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
}
