import { useEffect, useState } from "react";

export const CircularProgress = ({ value }) => {
  
    return (
        <div className="single-chart">
        <svg viewBox="0 0 36 36" className="circular-chart green">
          <path className="circle-bg"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path className="circle"
            strokeDasharray={`${value}, 100`}
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <text x="18" y="20.35" className="circle-percentage">{value}%</text>
        </svg>
      </div>
    );
  }