import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { Box, Typography } from '@mui/material';

export default function BasicPie() {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h6">
        Distribuição de Salas
      </Typography>
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
        width={280}
        height={200}
      />
    </Box>
  );
}