import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import AddIcon from "@material-ui/icons/Add";
import Grid from '@material-ui/core/Grid';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import styles from './styles.js';
import { STATUSES } from '../../constants';
import TaskList from '../../components/TaskList';
import TaskForm from '../../components/TaskForm';
import * as taskActions from '../../actions/task';

const listAlert = [
    "info",
    "warning",
    "success"
];

class Taskboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    componentDidMount() {
        const { taskActionsCreator } = this.props;
        const { fetchTaskRequest } = taskActionsCreator;
        fetchTaskRequest();
    }

    handleOpenForm = () => {
        this.setState({
            isOpen: true
        });
    }

    handleCloseForm = () => {
        this.setState({
            isOpen: false
        });
    }

    renderBoard() {
        const { listTask } = this.props;
        let board = null;
        board = (
            <Grid container spacing={2}>
                {
                    STATUSES.map((status, index) => {
                        const taskFilter = listTask.filter(task => task.status === status.value);
                        return (
                            <TaskList
                                tasks={taskFilter}
                                status={status}
                                listAlert={listAlert}
                                handleOpenForm={this.handleOpenForm}
                                key={index}
                            />
                        );
                    })
                }
            </Grid>
        );
        return board;
    }

    handleSubmitForm = () => {

    }

    renderForm() {
        let form = null;
        const { isOpen } = this.state;
        form = (
            <TaskForm
                isOpen={isOpen}
                handleCloseForm={() => this.handleCloseForm()}
                handleSubmitForm={() => this.handleSubmitForm()}
            />
        );
        return form;
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.taskboard}>
                <Button variant="contained" color="primary" onClick={() => this.handleOpenForm()} >
                    <AddIcon /> Add new
                </Button>
                <div className={classes.board}>
                    {this.renderBoard()}
                    {this.renderForm()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listTask: state.task.listTask,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        taskActionsCreator: bindActionCreators(taskActions, dispatch)
    };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Taskboard));