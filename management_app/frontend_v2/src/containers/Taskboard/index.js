import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import AddIcon from "@material-ui/icons/Add";
import Grid from '@material-ui/core/Grid';

import styles from './styles.js';
import { STATUSES } from '../../constants';
import TaskList from '../../components/TaskList';

const listTask = [
    {
        id: '0',
        name: 'Leaning ReactJS',
        description: 'Very difficult',
        status: 1
    },
    {
        id: 1,
        name: 'Leaning VueJS',
        description: 'After learing Reactjs',
        status: 0
    },
    {
        id: 2,
        name: 'Leaning Laravel',
        description: 'I have some knowledge',
        status: 2
    },
    {
        id: 3,
        name: 'Write a CV',
        description: 'I am writing',
        status: 1
    },
    {
        id: '4',
        name: 'Get a salary: 15m',
        description: 'I will do it',
        status: 1
    },
];
const listAlert = [
    "info",
    "warning",
    "success"
];

class Taskboard extends Component {

    renderBoard() {
        let board = null;
        board = (
            <Grid container spacing={2}>
                {
                    STATUSES.map((status, index) => {
                        const taskFilter = listTask.filter(task => task.status === status.value);
                        return (
                            <TaskList tasks={taskFilter} status={status} listAlert={listAlert} key={index} />
                        );
                    })
                }
            </Grid>
        )
        return board;
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.taskboard}>
                <Button variant="contained" color="primary" >
                    <AddIcon /> Add new
                </Button>
                <div className={classes.board}>
                    {this.renderBoard()}
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Taskboard);