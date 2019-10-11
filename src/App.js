import React, { Component } from "react";
import Header from "./components/Header";
import VideosContainer from "./components/VideosContainer";
import ErrorBoundary from "./components/ErrorBoundary";
class App extends Component {
  state = {
    searchQuery: ""
  };

  changeSearchQuery = searchQuery => {
    if (searchQuery.trim()) {
      this.setState({
        searchQuery
      });
    }
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <div className="App">
        <Header changeSearchQuery={this.changeSearchQuery} />
        <ErrorBoundary>
          <VideosContainer searchQuery={searchQuery} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
