import { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import YelpEntry from './YelpEntry';

export default class Yelp extends Component {

    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                        {this.props.yelpData.map(entry => <YelpEntry yelpData={entry}/>)}
                    </Row>
                </Container>
            </div>
        )
    }
}