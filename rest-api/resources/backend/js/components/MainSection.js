import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import * as filterTypes from '../constants/TodoFilters';
import TodoItem from '../components/TodoItem';
import Footer from '../components/Footer'

const TODO_FILTERS = {
  [filterTypes.SHOW_ALL]: () => true,
  [filterTypes.SHOW_UNMARKED]: todo => !todo.marked,
  [filterTypes.SHOW_MARKED]: todo => todo.marked
};

export default class MainSection extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      filter: filterTypes.SHOW_ALL
    }

    autoBind(this);
  }

  renderToggleAll(markedCount) {
    const { todos, actions } = this.props;
    if (todos.length > 0) {
      return (
        <input
          className='toggle-all'
          type='checkbox'
          checked={markedCount === todos.length}
          onChange={actions.markAll}
        />
      );
    }
  }

  renderFooter(markedCount) {
    const { todos } = this.props;
    const { filter } = this.state;
    const unMarkedCount = todos.length - markedCount;

    if (todos.length) {
      return (
        <Footer
          markedCount={markedCount}
          unMarkedCount={unMarkedCount}
          filter={filter}
          onClearMarked={this.handleClearMarked}
          onShow={this.handleShow}
        />
      );
    }
  }

  handleClearMarked(filter) {
    this.setState({
      filter
    })
  }

  handleClearMarked() {
    const atLeastOnMarked = this.props.todos.some(todo => todo.marked);
    if (atLeastOnMarked) {
      this.props.actions.clearMarked();
    }
  }

  render() {
    const { todos, actions } = this.props;
    const { filter } = this.state;
    const filterTodos = todos.filter(TODO_FILTERS[filter]);
    const markedCount = todos.reduce((count, todo) => {
      todo.marked ? count + 1 : count
    }, 0);

    return (
      <section className='main'>
        {this.renderToggleAll(markedCount)}
        <ul className='todo-list'>
          {filterTodos.map(todo => {
            <TodoItem key={todo.id} todo={todo} {...actions} />
          })}
        </ul>
        {this.renderFooter(markedCount)}
      </section>
    );
  }

}