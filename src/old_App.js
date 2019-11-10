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
    console.log("Now remove this todo from the todo list, and reduce the no of todos " + model.index);
    const todos = this.state.toDoListModel.slice(model.index);

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
    let newTodo = new TodoModel(i, input);
    let arrayitems = this.state.toDoListModel;
    arrayitems.push(newTodo);
    this.setState({ toDoListModel: arrayitems, numberOfToDos: i })
    console.log("ToDoList: \n" + this.state.toDoListModel[0] + " \n and end \n");
    console.log("iese\n");
  }

  render() {
    let toDoList = [];
    console.log("Length = " + this.state.numberOfToDos)
    for (let i = 0; i < this.state.numberOfToDos; i++) {
      console.log("elem i: " + this.state.toDoListModel[i]);
      toDoList[i] = <TodoView key={i} todoModel={this.state.toDoListModel[i]} parentDelete={this.deleteToDo} />
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
