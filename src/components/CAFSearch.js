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

class CAFSearch extends React.Component {
  countyRef = React.createRef();
  tmkRef = React.createRef();
  addressRef = React.createRef();
  zipRef = React.createRef();
  taxclassRef = React.createRef();
  censusRef = React.createRef();

  createQuery = event => {
    event.preventDefault();
    const query = {
      county: this.countyRef.current.value,
      tmk: parseInt(this.tmkRef.current.value),
      address: this.addressRef.current.value,
      zip: parseInt(this.zipRef.current.value),
      taxclass: this.taxclassRef.current.value,
      census: this.censusRef.current.value
    };
    this.props.addQuery(query);
    event.currentTarget.reset();
  };

  handleChange = event => {
    this.setState({ county: event.target.value });
  };

  render() {
    return (
      <div>
        <form
          className="caf-search-component"
          onSubmit={this.createQuery}
          style={{ marginTop: "4%" }}
        >
          <div>
            <FormControl variant="outlined" size="small" id="normal">
              <InputLabel>County</InputLabel>
              <Select inputRef={this.countyRef}>
                <MenuItem value="Oahu">Oahu</MenuItem>
                <MenuItem value="Maui">Maui</MenuItem>
                <MenuItem value="Hawaii">Hawaii</MenuItem>
                <MenuItem value="Kauai">Kauai</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div>
            <TextField
              name="tmk"
              inputRef={this.tmkRef}
              label="TMK"
              variant="outlined"
              size="small"
            />
          </div>
          <div>
            <TextField
              name="address"
              inputRef={this.addressRef}
              label="Address"
              variant="outlined"
              size="small"
            />
          </div>
          <div>
            <TextField
              name="zip"
              inputRef={this.zipRef}
              label="ZIP Code"
              variant="outlined"
              size="small"
            />
          </div>
          <div>
            <TextField
              name="taxclass"
              inputRef={this.taxclassRef}
              label="Tax Class"
              variant="outlined"
              size="small"
            />
          </div>
          <div>
            <TextField
              name="census"
              inputRef={this.censusRef}
              label="Census"
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
      </div>
    );
  }
}

export default CAFSearch;
