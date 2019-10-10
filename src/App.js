import React, { Component } from "react";
import Header from "./components/Header";
import Videos from "./components/Videos";
import ErrorBoundary from "./components/ErrorBoundary";
class App extends Component {
  state = {
    searchQuery: ""
  };

  changeSearchQuery = searchQuery => {
    this.setState({
      searchQuery
    });
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <div className="App">
        <Header changeSearchQuery={this.changeSearchQuery} />
        <ErrorBoundary>
          <Videos searchQuery={searchQuery} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
