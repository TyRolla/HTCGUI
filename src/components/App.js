import React from "react";
import NavBar from "./NavBar";
import SelectCounty from "./SelectCounty";
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
        <SelectCounty />
        <CAFSearch addQuery={this.addQuery} />
      </div>
    );
  }
}

export default App;
