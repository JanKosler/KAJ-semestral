import React, { Component } from 'react';
import ErrorPage from '.';

/**
 * Defines an ErrorBoundary component that extends the base React Component class.
 * This component is used to catch JavaScript errors anywhere in the child component tree,
 * log those errors, and display a fallback UI instead of the component tree that crashed.
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  /**
   * This static lifecycle method gets invoked after an error has been thrown by a descendant component.
   * It updates the state so the next render will show the fallback UI.
   * @param {Error} error - The error that was thrown.
   * @returns {Object} New state with `hasError` set to true.
   */
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  /**
   * This lifecycle method is called after an error has been caught in a descendant component.
   * Here, the error details are logged to the console.
   * @param {Error} error - The error that was caught.
   * @param {Object} errorInfo - An object with information about the error.
   */
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by Error Boundary:', error, errorInfo);
  }

  render() {
    // Check if an error was caught and the state was updated.
    if (this.state.hasError) {
      // Render fallback UI if an error occurred.
      return <ErrorPage />;
    }

    // If there's no error, render children components normally.
    return this.props.children;
  }
}

// Export the ErrorBoundary component for use in other parts of the app.
export default ErrorBoundary;
