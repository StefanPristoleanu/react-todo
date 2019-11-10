import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

class TodoView extends Component {
    
    render() {
        return (
            <Card key={this.props.todoModel.index} bg="light" style={{ width: '18rem' }}>
                <Card.Header>
                    <Button variant="outline-success">√</Button>
                    Todo no {this.props.todoModel.index}
                    <Button variant="outline-danger" onClick={() => this.props.parentDelete(this.props.todoModel)}>X</Button>
                </Card.Header>
                <Card.Body>
                    <Card.Title>
                        {this.props.todoModel.value}
                    </Card.Title>
                    <Card.Text>
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default TodoView;