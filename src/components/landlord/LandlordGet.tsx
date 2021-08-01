import React, { Component } from "react";
import APIURL from "../../helpers/environment";

type AcceptedProps = {
  sessionToken: string | null;
  /* allLandlords: {
        id: number,
        propertyManagement: '',
        rating: number
    } */
};

type LandlordState = {
  landlords: Landlord[];
};

export default class Landlord extends Component<AcceptedProps, LandlordState> {
    constructor(props: AcceptedProps) {
        super(props);
        this.state = {
        landlords: [],
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
        this.setState({landlords: data.allLandlords})
        console.log(this.state)
        } catch (err) {
        console.log(err);
        }
    };

    render() {
        return (
        <div className="Container">
            <div className="LandlordWrapper">landlord page</div>
        </div>
        );
    }
}
