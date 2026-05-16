import React from 'react';

/**
 * LoadingSpinner Component
 * Shows a loading indicator while data is being fetched
 */
function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
      <p>Loading weather data...</p>
    </div>
  );
}

export default LoadingSpinner;
