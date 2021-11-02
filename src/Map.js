import { Component } from "react";

export default class Map extends Component {

    render() {
        return (
            <div>
                {this.props.mapData && <img id="map" src={this.props.mapData.config.url} alt="Map of the city"/>}
            </div>
        )
    }
}