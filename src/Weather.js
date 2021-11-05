import { Component } from 'react';
import WeatherDay from './WeatherDay';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

export default class Weather extends Component {

    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                        {this.props.weatherData.map(day => <WeatherDay weatherData={day} />)};
                    </Row>
                </Container>
            </div>
        )
    }
}