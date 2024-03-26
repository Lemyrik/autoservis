import { Component } from "react";
import ErrorComponent from "../../components/Error/Error";

class ErrorBoundary extends Component {
  state = {
    error: null,
  };
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    const { error } = this.state;

    if (error) {
      return <ErrorComponent error={error} />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
