import React from "react";
import NavBar from "./NavBar";
import history from "./../history";
import Button from "@material-ui/core/Button";
import GridOnIcon from "@material-ui/icons/GridOn";

class Option extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <h2 style={{ textAlign: "center" }}>Please Select an Option</h2>
        <div className="option-selection">
          <Button
            style={{ marginRight: "20px" }}
            size="large"
            color="primary"
            onClick={() => history.push(`/PolygonTool`)}
            type="button"
            variant="contained"
            startIcon={<GridOnIcon />}
          >
            Polygon Tool
          </Button>
          <Button
            size="large"
            color="primary"
            onClick={() => history.push(`/Multisearch`)}
            type="button"
            variant="contained"
            startIcon={<GridOnIcon />}
          >
            Multi Search
          </Button>
          <Button
            id="divider"
            size="large"
            style={{ marginLeft: "20px" }}
            color="primary"
            onClick={() => history.push(`/Singlesearch`)}
            type="button"
            variant="contained"
            startIcon={<GridOnIcon />}
          >
            Single Search
          </Button>
        </div>
      </div>
    );
  }
}

export default Option;
