import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import styles from './styles';
import TaskItem from '../TaskItem';

class TaskList extends Component {
    render() {
        const { classes, tasks, status, listAlert } = this.props;
        return (
            <Grid item md={4} xs={12} >
                <Box className={classes.statusname} m={2}>{status.label}</Box>
                {
                    tasks.map(task => {
                        return (
                            <TaskItem task={task} status={status} listAlert={listAlert} />
                        );
                    })
                }
            </Grid>
        );
    }
}

export default withStyles(styles)(TaskList);