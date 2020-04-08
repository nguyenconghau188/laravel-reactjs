import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'
import autoBind from 'react-autobind';
import * as TodoFilters from '../constants/TodoFilters';

const FILTER_TITLES = {
  [TodoFilters.SHOW_ALL]: 'All',
  [TodoFilters.SHOW_UNMARKED]: 'Active',
  [TodoFilters.SHOW_MARKED]: 'Completed'
};

export default class Footer extends Component {
  static propTypes = {
    markedCount: PropTypes.number.isRequired,
    unMarkedCount: PropTypes.number.isRequired,
    filter: PropTypes.string.isRequired,
    onClearMarked: PropTypes.func.isRequired,
    onShow: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    autoBind(this);
  }

  renderFilterLink(filter) {
    const title = FILTER_TITLES[filter];
    const { filter: selectedFilter, onShow } = this.props;
    return (
      <a
        className={classnames({ selected: filter === selectedFilter })}
        style={{ cursor: 'hand' }}
        onClick={() => onShow(filter)}
      >
        {title}
      </a>
    )
  }

  renderTodoCount() {
    const { unMarkedCount } = this.props;
    const itemWord = unMarkedCount === 1 ? 'item' : 'items';

    return (
      <span className='todo-count'>
        <strong>{unMarkedCount || 'No'}</strong> {itemWord} left
      </span>
    );
  }

  renderClearButton() {
    const { markedCount, onClearMarked } = this.props;
    if (markedCount > 0) {
      return (
        <button
          className='clear-completed'
          onClick={onClearMarked}
        >
          Clear completed
        </button>
      )
    }
  }

  render() {
    return (
      <footer className='footer'>
        {this.renderTodoCount()}
        <ul className='filters'>
          {[TodoFilters.SHOW_ALL, TodoFilters.SHOW_MARKED, TodoFilters.SHOW_UNMARKED].map(filter =>
            <li key={filter}>
              {this.renderFilterLink(filter)}
            </li>
          )}
        </ul>
        {this.renderClearButton()}
      </footer>
    );
  }
}