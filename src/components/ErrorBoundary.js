import React, { Component } from "react";
import MessageBox from "./MessageBox";

class ErrorBoundary extends Component {
  state = {
    error: null
  };
  componentDidCatch(error) {
    this.setState({ error });
  }
  render() {
    return this.state.error ? (
      <MessageBox icon="alert-triangle">
        Sorry, Something Went Wrong! Try Again.
      </MessageBox>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
