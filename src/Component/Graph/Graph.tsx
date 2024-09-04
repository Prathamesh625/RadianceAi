import style from './index.module.css';
import Chart from 'react-apexcharts';
import { useContext } from 'react';
import { Theme } from '../../Context/ThemeContext';

const Graph: React.FC = () => {
  const { darkMode } = useContext(Theme);

  // Get today's date
  const today = new Date();

  // Create an array to store the formatted dates for the last 13 days
  const datesList = Array.from({ length: 13 }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    return date.toLocaleDateString('en-US', { day: 'numeric', month: 'long' });
  }).reverse(); // Reverse to keep the dates in chronological order

  // ApexCharts configuration
  const options = {
    chart: {
      id: 'basic-bar',
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: datesList,
    },
    stroke: {
      width: [2, 3, 2],
      curve: 'smooth',
      dashArray: [0, 0, 0],
    },
  };

  const series = [
    {
      name: 'Session Duration',
      data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10, 12],
    },
    {
      name: 'Patients',
      data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35, 34],
    },
    {
      name: 'Appointments',
      data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47, 55],
    },
  ];

  return (
    <div className={darkMode ? style.graphDark : style.graph}>
      <Chart
        options={options as {}}
        series={series}
        type="line"
        width="100%"
        height="300px"
      />
    </div>
  );
};

export default Graph;
