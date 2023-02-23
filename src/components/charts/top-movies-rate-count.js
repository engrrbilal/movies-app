import React from "react";
import { Bar } from "react-chartjs-2";
import { CHARTS_CONFIG, CHARTS_OPTIONS_RATED_COUNTS } from "../../constants/charts";

export const TopMoviesRatedCountChart = ({ data, datasetLabel = 'Rating' }) => {

  const chartData = {
    labels: data?.map((d) => d?.title),
    datasets: [
      {
        label: datasetLabel,
        data: data?.map((d) => d?.vote_count),
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <Bar
      data={chartData}
      options={CHARTS_OPTIONS_RATED_COUNTS}
      width={CHARTS_CONFIG.LAYOUT.WIDTH}
      height={CHARTS_CONFIG.LAYOUT.HEIGHT}
    />
  );
};
