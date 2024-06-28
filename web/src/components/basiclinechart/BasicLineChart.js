import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart } from '@mui/x-charts/LineChart';

export default function BasicLineChart() {
  const [data, setData] = useState({ labels: [], values: [] });
  const maxDataPoints = 10;

  useEffect(() => {
    let timeCounter = 0;

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/consumo');
        const { consumoAtual } = response.data;

        if (typeof consumoAtual === 'number' && !isNaN(consumoAtual)) {
          timeCounter += 1;

          setData(prevData => {
            const newLabels = [...prevData.labels, timeCounter];
            const newValues = [...prevData.values, consumoAtual];

            if (newLabels.length > maxDataPoints) {
              newLabels.shift();
              newValues.shift();
            }

            return {
              labels: newLabels,
              values: newValues
            };
          });
        } else {
          console.error('Dados inválidos recebidos:', response.data);
        }
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    const intervalId = setInterval(fetchData, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <LineChart
      xAxis={[{ data: data.labels }]}
      series={[
        {
          data: data.values,
          color: '#4caf50'
        },
      ]}
      width={800}
      height={300}
    />
  );
}