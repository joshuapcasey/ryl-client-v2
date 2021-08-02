import React, { Component } from 'react'


type Props = {
    // updateToken: (newToken: string, newUserId: number, newRole: string) => void
}

type State = {
    

}

export default class Footer extends Component   <Props, State> {
    constructor(props: Props) {
    super(props);
    // this.state = {
    }

    render () {
        return (
            <div className="FooterWrapper">
                <footer>
                    <br/>
                    <h5>&copy; 2021 JpC </h5>
                    <br/>
                </footer>
            </div>
    );
    }

}