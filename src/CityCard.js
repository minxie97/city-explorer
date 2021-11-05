import { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default class CityCard extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: '40rem' }} id="card">
                            <Card.Body>
                                <Card.Title>{this.props.location.display_name}</Card.Title>
                                <Card.Text>
                                    {this.props.location.lat}, {this.props.location.lon};
                                </Card.Text>
                                <Card.Img variant="top" src={this.props.mapData} />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}