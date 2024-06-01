import React, { Component } from 'react';
import ErrorPage from '.';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // Update state so the next render will show the fallback UI.
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // log error to console
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by Error Boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
