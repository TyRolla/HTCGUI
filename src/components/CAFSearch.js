import React from "react";

class CAFSearch extends React.Component {
  tmkRef = React.createRef();
  addressRef = React.createRef();
  zipRef = React.createRef();
  taxclassRef = React.createRef();
  censusRef = React.createRef();

  createQuery = event => {
    event.preventDefault();
    const query = {
      tmk: parseInt(this.tmkRef.current.value),
      address: this.addressRef.current.value,
      zip: parseInt(this.zipRef.current.value),
      taxclass: this.taxclassRef.current.value,
      census: this.censusRef.current.value
    };
    this.props.addQuery(query);
    event.currentTarget.reset();
  };

  render() {
    return (
      <div>
        <form className="caf-search-component" onSubmit={this.createQuery}>
          <div>
            <input name="tmk" ref={this.tmkRef} type="text" placeholder="TMK" />
          </div>
          <div>
            <input
              name="address"
              ref={this.addressRef}
              type="text"
              placeholder="Address"
            />
          </div>
          <div>
            <input name="zip" ref={this.zipRef} type="text" placeholder="ZIP" />
          </div>
          <div>
            <input
              name="taxclass"
              ref={this.taxclassRef}
              type="text"
              placeholder="Tax Class"
            />
          </div>
          <div>
            <input
              name="census"
              ref={this.censusRef}
              type="text"
              placeholder="Census Block"
            />
          </div>
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <button type="submit">Search!</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CAFSearch;
