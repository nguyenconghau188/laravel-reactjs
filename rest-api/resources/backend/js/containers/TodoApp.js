import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/TodoActions';

class TodoApp extends Component {
  render() {
    const {todos, actions} = this.props;
    console.log('fadfas')
    return (
      <div>
        <Header addTodo={this.addTodo} />
        <MainSection todos={todos} actions={actions} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todoReducers
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);