import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  // Transform datapoints to value. So we now have a new array containing only values.
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  // Find the max value in this array
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label} // Assumes all chartbars have unique labels
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
