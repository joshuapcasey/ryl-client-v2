import React, { Component } from 'react'


type AcceptedProps = {
    // updateToken: (newToken: string, newUserId: number, newRole: string) => void
}

type HomeState = {
    

}

export default class Home extends Component   <AcceptedProps, HomeState> {
    constructor(props: AcceptedProps) {
    super(props);
    // this.state = {
    }

    render () {
        return (
            <div className="FooterWrapper">
                Footer
            </div>
        )
    }

}