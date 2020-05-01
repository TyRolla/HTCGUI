import React from "react";

class SelectCounty extends React.Component {
  render() {
    return (
      <div className="county-background">
        <div className="county-header">
          <h4>Select County</h4>
        </div>
        <div className="county-component">
          <button>Oahu</button>
          <button>Hawaii</button>
          <button>Maui</button>
          <button>Kauai</button>
        </div>
      </div>
    );
  }
}

export default SelectCounty;
