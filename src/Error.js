import { Component } from "react";
import Alert from 'react-bootstrap/Alert';

export default class Error extends Component {

    render() {
        return(
            <div>
                {this.props.error && <Alert variant="danger">Error Code 400. Enter a valid city please.</Alert>}
            </div>
        )
    }
}