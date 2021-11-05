import { Component } from 'react';
import { Card } from 'react-bootstrap';

export default class WeatherDay extends Component {

    render() {
        return (
            <Card style={{ width: '10rem' }} id="card">
                <Card.Body>
                    <Card.Img variant="top" src={`https://www.weatherbit.io/static/img/icons/${this.props.weatherData.icon}.png`} />
                    <Card.Text>{this.props.weatherData.description}</Card.Text>
                    <Card.Title>{this.props.weatherData.date}</Card.Title>
                    <Card.Text>
                        Today there is a high of {this.props.weatherData.high} and a low of {this.props.weatherData.low}.
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}