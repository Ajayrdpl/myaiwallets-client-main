/* eslint-disable react/prop-types */
import React from "react";
import ReactApexChart from "react-apexcharts";

export const ProgressGraph = ({ legend_pos }) => {
  const [state, setState] = React.useState({
    series: [70, 30],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["Work Done", "Pending"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: legend_pos ? legend_pos : "bottom",
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
        width={380}
      />
    </div>
  );
};
