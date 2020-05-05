import React from "react";
import HTLogo from "../images/htlogo.png";
import CAFLogo from "../images/CAF.png";

class NavBar extends React.Component {
  render() {
    return (
      <header className="header-flex">
        <img className="htlogo" src={HTLogo} alt="Company Logo" />
        <h3 style={{ paddingRight: "100px", fontSize: "30px" }}>
          Connect America Fund Database
        </h3>
        <img className="caflogo" src={CAFLogo} alt="Caf Logo" />
      </header>
    );
  }
}

export default NavBar;
