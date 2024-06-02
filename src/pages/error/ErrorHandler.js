import React, { Component } from 'react';
import ErrorPage from '.';

/**
 * Error handler component that catches errors in descendant components. App is not really handling this well yet.
 */
class ErrorHandler extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by Error Boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // fallback UI
      return <ErrorPage />;
    }
    // normal UI
    return this.props.children;
  }
}

export default ErrorHandler;
