import ReactApexChart from "react-apexcharts";
import { useState } from "react";

const ApexChart = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "Investment Strategy",
        data: [3, 2, 1], // Assigning numerical values
      },
    ],
    options: {
      chart: {
        type: "bar" as "bar",
        height: 350,
        toolbar: {
          show: true, // Ensures the dropdown is visible
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 0,
          horizontal: true,
          barHeight: "80%",
          isFunnel: true,
        },
      },
      dataLabels: {
        enabled: true,
        formatter: (val: number, opt: any) => {
          const labels = [
            "Core Focus Area",
            "Capital Deployment",
            "Hands-On Approach",
          ];
          return labels[opt.dataPointIndex]; // Display the corresponding text label
        },
        style: {
          colors: ["#fff"],
          fontSize: "12px",
          whiteSpace: "break-spaces",
        },
        dropShadow: {
          enabled: true,
        },
      },
      title: { text: "Investment Strategy", align: "center" as "center" },
      xaxis: {
        categories: ["Step 1", "Step 2", "Step 3"], // Simple labels for x-axis
      },
      legend: { show: false },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "vertical",
          gradientToColors: ["#008000"], // Green blur effect
          stops: [0, 100],
        },
      },
      colors: ["rgba(44, 124, 65, 1)"], // Transparent green base color
    },
  });

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold text-center mb-4">
        Investment Strategy
      </h2>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={350}
      />

      {/* Add CSS to style the dropdown */}
      <style>{`
        .apexcharts-menu {
          background: green !important; /* Background color of dropdown */
          color: white !important; /* Text color */
          border-radius: 5px !important;
          box-shadow: 0px 4px 10px rgba(0, 128, 0, 0.4) !important;
        }

        .apexcharts-menu-item {
          color: white !important; /* Menu item text color */
        }

        .apexcharts-menu-item:hover {
          background: darkgreen !important; /* Hover effect */
        }
      `}</style>
    </div>
  );
};

export default ApexChart;
