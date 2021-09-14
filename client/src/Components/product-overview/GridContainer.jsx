import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Carousel from './Carousel.jsx';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }
}));



export default function GridContainer () {

  const classes = useStyles();

  return (
    <div classname = {classes.root}>
      <Grid container elevation={0}>
        <Grid item xs={7} >
        <Carousel />
        <Paper className={classes.paper}> this is where the carousel will go! </Paper>
        </Grid>
        <Grid item xs={5} >
        <Paper className={classes.paper}> this is where the interactive category info will go! </Paper>
        </Grid>
        <Grid item xs={8} >
        <Paper className={classes.paper}> this is where blurbs will go </Paper>
        </Grid>
        <Grid item xs={4} >
        <Paper className={classes.paper}> this is the features section </Paper>
        </Grid>
      </Grid>
    </div>
  )

}