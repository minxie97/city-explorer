import { Component } from "react";

export default class City extends Component {

    render() {
        return (
            <div>
                {this.props.location && <h1>{this.props.location.display_name}</h1>}
            </div>
        )
    }
}