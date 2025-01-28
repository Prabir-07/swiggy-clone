import React from "react";
import "./Shimmer.css";

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(8).fill("").map((_, index) => (
        <div className="shimmer-card" key={index}>
          <div className="shimmer-image"></div>
          <div className="shimmer-text shimmer-title"></div>
          <div className="shimmer-text shimmer-subtitle"></div>
          <div className="shimmer-text shimmer-location"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
