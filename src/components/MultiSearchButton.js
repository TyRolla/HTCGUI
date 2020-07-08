import React from "react";
import { globalAgent } from "http";
import axios from "axios";

class MultiSearchButton extends React.Component {
  endpoints = [];
  data = this.props.data;
  apidata = [];
  isLoading = false;
  promiseConfirm = () => {
    return new Promise(resolve => {
      console.log("endpoints created");
    });
  };

  async componentDidMount() {
    for (let i = 0; i < this.endpoints.length; i++) {
      axios.get(`${this.endpoints[i]}`).then(api => {
        this.apidata.push(api.data);
        this.isLoading = true;
      });
    }
    await this.promiseConfirm();
  }

  render() {
    const endPointCreator = array => {
      let TMK = "";
      let county = "";
      let endpoint = "";
      let endpointArr = [];
      for (var i = 0; i < array.length; i++) {
        TMK = array[i][0];
        county = array[i][1];
        endpoint = "http://10.100.98.144/node/caf/" + county + "/" + TMK;
        endpointArr.push(endpoint);
      }
      this.endpoints = endpointArr;
    };

    endPointCreator(this.data);
    console.log(this.endpoints);
    console.log(this.apidata);
    return (
      <div className="books">
        {this.isLoading ? (
          this.apidata &&
          this.apidata.map((parcel, index) => {
            return (
              <div className="book" key={index}>
                <h2>Parcel ID: {parcel.parcels.recordset[0].TMK}</h2>
                <div className="details">
                  <p>
                    <b>ID:</b> {parcel.parcels.recordset[0].ID}
                  </p>
                  <p>
                    <b>TMK:</b> {parcel.parcels.recordset[0].TMK}
                  </p>
                  <p>
                    <b>Property Class:</b>{" "}
                    {parcel.parcels.recordset[0].PropertyClass}
                  </p>
                  <p>
                    <b>Address:</b> {parcel.parcels.recordset[0].ParcelAddress}
                  </p>
                  <p>
                    <b>County:</b> {parcel.parcels.recordset[0].County}
                  </p>
                  <p>
                    <b>Geo ID:</b> {parcel.parcels.recordset[0].GeoID}
                  </p>
                  <p>
                    <b>Latitude:</b> {parcel.parcels.recordset[0].Latitude}
                  </p>
                  <p>
                    <b>Longitude:</b> {parcel.parcels.recordset[0].Longitude}
                  </p>
                  <p>
                    <b>Residential Building Count:</b>{" "}
                    {parcel.parcels.recordset[0].ResidentialBuildingCount}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    );
  }
}

export default MultiSearchButton;
