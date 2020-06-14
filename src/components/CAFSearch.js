import React from "react";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import Icon from "@material-ui/core/Icon";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import GridOnIcon from "@material-ui/icons/GridOn";
import history from "./../history";
import ParcelTable from "./ParcelTable";
import axios from "axios";

class CAFSearch extends React.Component {
  parcelData = React.createRef();
  cafID = React.createRef();
  countyRef = React.createRef();
  parcelRef = React.createRef();
  parcelArray = [];
  parcelNum = React.createRef();
  async getRequest() {
    const countyURL = this.countyRef.current.value;
    const parcelID = parseInt(this.cafID.current.value);
    await axios
      .get("http://10.100.98.144/node/caf/" + countyURL + "/" + parcelID)
      .then(api => {
        console.log("Fetched Data", api);
        this.parcelRef = api.data;
      });
    this.parcelNum = parcelID;
    //console.log(this.parcelRef);
  }
  async createQuery() {
    const parcelState = this.parcelRef;
    const query = {
      county: this.countyRef.current.value,
      ID: parseInt(this.cafID.current.value),
      parcels: [parcelState]
    };
    this.parcelArray.push(parcelState);
    this.props.addQuery(query);
  }

  handleChange = event => {
    this.setState({ county: event.target.value });
  };

  twoFunction = async event => {
    event.preventDefault();
    await this.getRequest();
    await this.createQuery();
  };

  render() {
    return (
      <div>
        <form
          className="caf-search-component"
          onSubmit={this.twoFunction}
          style={{ marginTop: "4%" }}
        >
          <div>
            <h3>Please Fill Both Search Fields Below</h3>
          </div>
          <div>
            <FormControl variant="outlined" size="small" id="normal">
              <InputLabel>County</InputLabel>
              <Select inputRef={this.countyRef}>
                <MenuItem value="Honolulu">Honolulu</MenuItem>
                <MenuItem value="Maui">Maui</MenuItem>
                <MenuItem value="Hawaii">Hawaii</MenuItem>
                <MenuItem value="Kauai">Kauai</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div>
            <TextField
              name="cafID"
              inputRef={this.cafID}
              label="Parcel ID"
              variant="outlined"
              size="small"
            />
          </div>

          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              endIcon={<SearchIcon />}
            >
              Search
            </Button>
          </div>
        </form>
        <ParcelTable
          parcelState={this.parcelArray}
        />
      </div>
    );
  }
}

export default CAFSearch;
