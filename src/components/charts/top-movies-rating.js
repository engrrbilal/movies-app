import React from "react";
import { Bar } from "react-chartjs-2";
import { CHARTS_CONFIG, CHARTS_OPTIONS_RATING } from "../../constants/charts";

export const TopMoviesRatingChart = ({ data, datasetLabel = 'Rating' }) => {

  const chartData = {
    labels: data?.map((d) => d?.title),
    datasets: [
      {
        label: datasetLabel,
        data: data?.map((d) => d?.vote_average),
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <Bar
      data={chartData}
      options={CHARTS_OPTIONS_RATING}
      width={CHARTS_CONFIG.LAYOUT.WIDTH}
      height={CHARTS_CONFIG.LAYOUT.HEIGHT}
    />
  );
};
