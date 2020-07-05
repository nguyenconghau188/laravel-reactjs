import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Alert from '@material-ui/lab/Alert';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Card, CardContent, Typography, CardActions, Fab } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import styles from './styles';

class TaskItem extends Component {
    render() {
        const { classes, task, status, listAlert } = this.props;
        return (
            <Box className={classes.box} mt={2} mb={2}>
                <Card className={classes.card}>
                    <CardContent>
                        <Grid container justify="space-between">
                            <Grid item md={8}>
                                <Typography className={classes.cardname} color="textSecondary" gutterBottom>
                                    {task.name}
                                </Typography>
                            </Grid>
                            <Grid item md={4}>
                                <Alert severity={listAlert[task.status]}>
                                    {status.label}
                                </Alert>
                            </Grid>
                            <Grid item md={12}>
                                <Typography className={classes.carddescription} color="textSecondary" gutterBottom>
                                    {task.description}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions className={classes.cardAction}>
                        <Fab color="primary" size="small">
                            <EditIcon fontSize="small" />
                        </Fab>
                        <Fab color="secondary" size="small">
                            <DeleteIcon fontSize="small" />
                        </Fab>
                    </CardActions>
                </Card>
            </Box>
        );
    }
}

export default withStyles(styles)(TaskItem);