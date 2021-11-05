import { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import Movie from './Movie.js';

export default class Movies extends Component {

    render() {
        return (
            <Container fluid>
                <Row>
                    {this.props.movieData.map(movie => <Movie movieData={movie} />)}
                </Row>
            </Container>
        )
    }
}
