import React from "react";
import ReactApexChart from "react-apexcharts";

export const PieDonutChart = () => {
  const [state, setState] = React.useState({
    series: [68, 25, 14],
    options: {
      chart: {
        type: "donut",
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: 'gradient',
      },
      labels: ["Sales", "Product", "Income"],
      plotOptions: {
        pie: {
          donut: {
            size: "80%",
            labels: {
              show: false,
            },
          },

          stroke: {
            width: 1,
          },
        },
      },
      legend: {
        position: "bottom",
        formatter: function (seriesName, opts) {
          return `<span >${seriesName}</span> <span>${
            opts.w.globals.series[opts.seriesIndex]
          }%</span>`;
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 280,
            },
            legend: {
              position: "bottom",
            },
          },
        },
        {
          breakpoint: 1300,
          options: {
            chart: {
              width: 260,
            },
            legend: {
              position: "bottom",
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
        type="donut"
        width={350}
      />
    </div>
  );
};
