import React from 'react';
import ReactApexChart from 'react-apexcharts';

const PieImageGraph = ({ chartWidth = 380, legendPosition = 'bottom' }) => {
  const [state, setState] = React.useState({
    series: [44, 33, 54, 45],
    options: {
      chart: {
        width: chartWidth,
        type: 'pie',
      },
      legend: {
        position: "bottom",
      },
      colors: ['#93C3EE', '#E5C6A0', '#669DB5', '#94A74A'],
      fill: {
        type: 'image',
        opacity: 0.85,
        image: {
          src: [
            'https://preview.redd.it/8zvt7he5h7551.png?width=1080&crop=smart&auto=webp&s=47b4bed495aae5e26fdc230f626cdabd720dceb8',
            'https://asset.gecdesigns.com/img/background-templates/amber-aura-colorful-gradient-background-design-1681464219971-cover.webp',
            'https://asset.gecdesigns.com/img/background-templates/radiant-energy-dynamic-gradient-abstract-background-template-1685179126888-cover.webp',
            'https://pbs.twimg.com/media/EmEDD5IWoAEHM7m.jpg',
          ],
          width: 25,
          height: 25,
        },
      },
      stroke: {
        width: 4,
      },
      dataLabels: {
        enabled: true,
        style: {
          colors: ['#111'],
        },
        background: {
          enabled: true,
          foreColor: '#fff',
          borderWidth: 0,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: legendPosition,
            },
          },
        },
      ],
    },
  });

  return (
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="pie"
          width={state.options.chart.width}
        />
      </div>
  );
};

export default PieImageGraph;
