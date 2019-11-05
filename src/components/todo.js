import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

class ToDo extends Component {
    sendData = () => {
        this.props.parentCallback("Hey Popsie, How’s it going?");
    }
    render() {
        return (
            <Card key={this.props.index} bg="light" style={{ width: '18rem' }}>
                <Card.Header>
                    <Button variant="outline-success">√</Button>
                    Todo no {this.props.index}
                    <Button variant="outline-danger" onClick={() => this.sendData(this.props.index)}>X</Button>
                </Card.Header>
                <Card.Body>
                    <Card.Title>
                        {this.props.value}
                    </Card.Title>
                    <Card.Text>
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default ToDo;