import { Component } from "react";

export default class Coordinates extends Component {

    render() {
        return(
            <div>
                {this.props.location && <p>{this.props.location.lat}, {this.props.location.lon}</p>}
            </div>
        )
    }
}