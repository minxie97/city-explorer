import { Component } from 'react';

export default class Weather extends Component {

    render() {
        return (
            <div>
                {this.props.weatherData.length > 0 && this.props.weatherData.map(element => <p id="weather">{element.date}: {element.description}</p>)}
            </div>
        )
    }
}