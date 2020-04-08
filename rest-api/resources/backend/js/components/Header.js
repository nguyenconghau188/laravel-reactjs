import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import TodoTextInput from './TodoTextInput';

export default class Header extends Component {

  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    autoBind(this);
  }

  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }

  render() {
    return (
      <header className='header'>
        <h1>todos</h1>
        <TodoTextInput 
          newTodo={true}
          onSave={this.handleSave}
          placeholder='What needs to be done?'
        />
      </header>
    );
  }
}