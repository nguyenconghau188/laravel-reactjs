import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import autoBind from 'react-autobind';
import todos from '../reducers/todoReducers';
import TodoTextInput from './TodoTextInput';

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.required,
    editTodo: PropTypes.func.required,
    deleteTodo: PropTypes.func.required,
    markTodo: PropTypes.func.required,
  }

  constructor(props) {
    super(props);
    this.state({
      editing: false,
    });

    autoBind(this);
  }

  handleDoubleClick() {
    this.setState({
      editing: true,
    });
  }

  handleSave(id, text) {
    if (text.length === 0) {
      this.props.deleteTodo(id);
    }
    else {
      this.props.editTodo(id, text);
    }
    this.setState({
      editing: false,
    });
  }

  render() {
    const { todo, markTodo, deleteTodo } = this.props;
    let element;
    if (this.state.editing) {
      element = (
        <TodoTextInput
          text={todo.text}
          editing={this.state.editing}
          onSave={(text) => this.handleSave(todo.id, text)}
        />
      );
    } else {
      element = (
        <div className='view'>
          <input
            className='toggle'
            type='checkbox'
            checked={todo.marked}
            onChange={() => markTodo(todo.id)}
          />
          <label
            onDoubleClick={this.handleDoubleClick}
          >
            {todo.text}
          </label>
          <button
            className='destroy'
            onClick={() => deleteTodo(todo.id)}
          />
        </div>
      )
    }

    return (
      <li
        className={classnames({
          completed: todos.marked,
          editing: this.state.editing,
        })}
      >
        {element}
      </li>
    );
  }

}