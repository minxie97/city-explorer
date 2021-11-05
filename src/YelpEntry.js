import { Component } from 'react';
import { Card } from 'react-bootstrap';

export default class YelpEntry extends Component {

    render() {
        return (
            <Card style={{ width: '12rem' }} id="card">
                <Card.Body>
                    <Card.Img variant="top" src={this.props.yelpData.imageUrl}/>
                    <Card.Title>{this.props.yelpData.name}</Card.Title>
                    <Card.Text>Rating: {this.props.yelpData.rating}</Card.Text>
                    <Card.Text>Price: {this.props.yelpData.price}</Card.Text>
                    <Card.Link href={this.props.yelpData.url} target="_blank">Go to Yelp</Card.Link>
                </Card.Body>
            </Card>
        )
    }
}