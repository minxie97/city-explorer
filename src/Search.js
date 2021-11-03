import { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";

export default class Search extends Component {

    render() {
        return (
            <div>
                <Form id="search" onChange={this.props.handleChange} value={this.props.cityValue}>
                    <Form.Group >
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="Enter city" />
                        <Form.Text className="text-muted">
                            Start exploring!
                        </Form.Text>
                        </Form.Group>

                    <Button id="explore" onClick={this.props.handleClick} variant="primary" type="click"> 
                        Explore!
                    </Button>
                </Form>
            </div>
        )
    }
}