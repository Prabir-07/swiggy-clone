import React from "react";
import "./resShimmer.css";

const resShimmer = () => {
  return (
    <div className="shimmer-restaurant-menu">
      {/* Header Skeleton */}
      <div className="shimmer-header">
        <div className="shimmer-title"></div>
        <div className="shimmer-info-line"></div>
      </div>

      {/* Deals Skeleton */}
      <div className="shimmer-deals-section">
        <div className="shimmer-deal"></div>
        <div className="shimmer-deal"></div>
      </div>

      {/* Menu & Search Skeleton */}
      <div className="shimmer-menu-section">
        <div className="shimmer-menu-title"></div>
        <div className="shimmer-search-bar"></div>
      </div>

      {/* Recommended Items Skeleton */}
      <div className="shimmer-recommended-section">
        <div className="shimmer-recommended-title"></div>

        {/* 5 skeleton items for recommended */}
        {[...Array(5)].map((_, i) => (
          <div className="shimmer-menu-item" key={i}>
            <div className="shimmer-line short"></div>
            <div className="shimmer-line xshort"></div>
            <div className="shimmer-line medium"></div>
            <div className="shimmer-line btn"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default resShimmer;
