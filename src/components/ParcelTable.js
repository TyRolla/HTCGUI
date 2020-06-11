import React from "react";

class ParcelTable extends React.Component {
  currentID = React.createRef();
  render() {
    console.log(this.props.parcelState[1]);
    console.log(this.props.parcelID);
    return (
      <div className="books">
        {this.props.parcelState &&
          this.props.parcelState.map((parcel, index) => {
            if (index != 0) {
              console.log(parcel);
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
                      <b>Address:</b>{" "}
                      {parcel.parcels.recordset[0].ParcelAddress}
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
            }
          })}
      </div>
    );
  }
}

export default ParcelTable;
