import React from "react";
import HTLogo from "../images/htlogo.png";
import { GoPerson } from "react-icons/go";

class NavBar extends React.Component {
  render() {
    return (
      <header className="header-flex">
        <img className="htlogo" src={HTLogo} alt="Company Logo"></img>
        <h3 style={{ paddingRight: "160px" }}>Connect America Fund Database</h3>
        <p>
          <GoPerson className="usericon" />
        </p>
      </header>
    );
  }
}

export default NavBar;
