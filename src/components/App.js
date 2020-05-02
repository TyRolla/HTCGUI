import React from "react";
import NavBar from "./NavBar";
import CAFSearch from "./CAFSearch";

class App extends React.Component {
  state = {
    queries: {}
  };

  addQuery = query => {
    const queries = { ...this.state.queries };
    queries[`query${Date.now()}`] = query;
    this.setState({ queries: queries });
  };
  render() {
    return (
      <div>
        <NavBar />
        <CAFSearch addQuery={this.addQuery} />
      </div>
    );
  }
}

export default App;
