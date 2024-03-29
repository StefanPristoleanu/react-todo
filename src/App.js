import React, { Component } from 'react';
import logo from './logo.svg';
import { Button, InputGroup, FormControl, Card } from 'react-bootstrap';
import Header from './components/Header';
import TodoModel from './components/TodoModel';
import TodoView from './components/TodoView';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/primereact.min.css';
import { Panel } from 'primereact/panel';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numberOfToDos: 0,
      toDoListModel: [],
      toDoInput: '',
      deleteIndex: 0
    };
    this.deleteToDo = this.deleteToDo.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteToDo = this.deleteToDo.bind(this);
  }

  deleteToDo(model) {
    console.log("Id to del " + model.index + " from " + this.state.toDoListModel.length);
    this.state.toDoListModel.splice(model.index - 1, 1);
    const todos = this.state.toDoListModel;
    console.log("Elem remaining: " + todos.length);

    for(let i = 0; i< todos.length; i++){
      todos[i].index = i + 1;
    }
    this.setState({
      toDoListModel: todos,
      numberOfToDos: this.state.numberOfToDos - 1
    });
  }

  callbackFunction = (childData) => {
    this.setState({ deleteIndex: childData });
    console.log("DELETE ~ " + this.state.deleteIndex);
  }

  addItem(input) {
    console.log("Intra\n");

    let i = this.state.numberOfToDos + 1;
    let newTodo = new TodoModel(i, this.input.value);
    let arrayitems = this.state.toDoListModel;
    arrayitems.push(newTodo);
    this.setState({ toDoListModel: arrayitems, numberOfToDos: i, toDoInput: this.input.value })
    console.log("ToDoList: \n" + this.state.toDoListModel[0] + " \n and end \n");
    console.log("iese\n");
  }

  render() {
    let toDoList = [];
    console.log("Length = " + this.state.numberOfToDos)
    for (let i = 0; i < this.state.numberOfToDos; i++) {
      toDoList.push(<TodoView key={i} todoModel={this.state.toDoListModel[i]} parentDelete={this.deleteToDo} />);
    }

    return (
      <div className="App">
        <Header />
        <h3>ToDo MVC</h3>
        <div >
          <InputGroup size="lg" >
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-lg">Task {this.state.numberOfToDos + 1}</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl ref={(input) => this.input = input} aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
            <Button data-test="submit-todo-button" variant="dark" type="submit" onClick={this.addItem}>Submit</Button>
          </InputGroup>
        </div>
        <br />
        <div className="todo">
          <br />
          {toDoList}
          <br />
        </div>
      </div>
    );
  }
}

export default App;
