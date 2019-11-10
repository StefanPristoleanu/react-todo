import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ToDo from './components/todo';
import { mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// it('Adds a todo', () => {
//   const wrapper = mount(<ToDo />);
//   wrapper.find("[variant=\"outline-success\"]")
//     .text().contains("Todo no");
// });
