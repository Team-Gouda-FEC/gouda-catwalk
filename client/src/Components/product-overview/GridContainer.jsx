import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginRight: theme.spacing(2),
  }
}));





export default function GridContainer () {

  const classes = useStyles();

  return (
    <div classname = {classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} >
        <Paper className={classes.paper}>Example of full width xs=12 </Paper>
        </Grid>
        <Grid item xs={6} >
        <Paper className={classes.paper}> example of xs 6 </Paper>
        </Grid>
        <Grid item xs={6} >
        <Paper className={classes.paper}> example of xs 6 </Paper>
        </Grid>
        <Grid item xs={3} >
        <Paper className={classes.paper}> example of xs 3 </Paper>
        </Grid>
        <Grid item xs={3} >
        <Paper className={classes.paper}> example of xs 3 </Paper>
        </Grid>
        <Grid item xs={3} >
        <Paper className={classes.paper}> example of xs 3 </Paper>
        </Grid>
        <Grid item xs={3} >
        <Paper className={classes.paper}> example of xs 3 </Paper>
        </Grid>
      </Grid>
    </div>
  )

}