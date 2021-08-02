import React, { Component } from "react";
import APIURL from "../../helpers/environment";
import LandlordEdit from "./LandlordEdit";
import LandlordDelete from "./LandlordDelete";
import LandlordAdd from "./LandlordAdd";

type AcceptedProps = {
  sessionToken: string | null;
};

type LandlordDisplayState = {
  landlords: Landlord[];
  propertyManagement: string;
  rating: number;
};

export default class LandlordDisplay extends Component<
  AcceptedProps,
  LandlordDisplayState
> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {
      landlords: [],
      propertyManagement: "",
      rating: 0,
    };
  }
  componentDidMount() {
    this.fetchLandlords();
  }

  fetchLandlords = async () => {
    let requestHeaders: any = {
      "Content-Type": "application/json",
      Authorization: this.props.sessionToken,
    };
    try {
      const res = await fetch(`${APIURL}/landlord/all`, {
        method: "GET",
        headers: requestHeaders,
      });
      const data = await res.json();
      console.log(`Landlord Data: ${data.allLandlords[0].propertyManagement}`);
      this.setState({ landlords: data.allLandlords });
      console.log(this.state);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className="list-group">
        <table className="table table-hover table-dark">
          <thead>
            <tr className="bg-primary">
              <th scope="col">Property Management</th>
              <th scope="col">Rating</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
              {/* <LandlordAdd
                id={this.state.id}
                propertyManagement={this.state.propertyManagement}
                rating={this.state.rating}
                sessionToken={this.props.sessionToken}
              /> */}
            </tr>
          </thead>
          <tbody>
            {this.state.landlords.map((landlord: Landlord, index: number) => {
              return (
                <tr>
                  <td>{landlord.propertyManagement}</td>
                  <td>{landlord.rating}</td>
                  <td>
                    <LandlordEdit
                      id={landlord.id}
                      propertyManagement={landlord.propertyManagement}
                      rating={landlord.rating}
                      sessionToken={this.props.sessionToken}
                    />
                  </td>
                  <td>
                    <LandlordDelete
                      id={landlord.id}
                      sessionToken={this.props.sessionToken}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
