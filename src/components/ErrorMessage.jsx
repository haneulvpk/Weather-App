import React from 'react';

/**
 * ErrorMessage Component
 * Displays error notifications to the user
 */
function ErrorMessage({ message }) {
  if (!message) return null;

  return (
    <div className="error-message">
      <span className="error-icon">⚠️</span>
      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;
