import { Component } from 'react';
import { Card } from 'react-bootstrap';

export default class Movie extends Component {

    render() {

        return (
            <Card style={{ width: '18rem' }} id="card">
                <Card.Body>
                <Card.Img variant="top" src={this.props.movieData.imageUrl} />
                    <Card.Title>{this.props.movieData.title}</Card.Title>
                    <Card.Text>
                        {this.props.movieData.overview};
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}