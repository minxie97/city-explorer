import { Component } from "react";

export default class Coordinates extends Component {

    render() {
        return(
            <div>
                {this.props.location && <p id="coordinates">{this.props.location.lat}, {this.props.location.lon}</p>}
            </div>
        )
    }
}