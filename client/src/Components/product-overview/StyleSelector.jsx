import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import itemData from './itemData';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    padding: 10,
    margin: 10,
    border: '1px solid black'
  },
}));

export default function StyleSelector() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid container item xs={12}>
          <Typography>
            Style
            {">"}
            SELECTED STYLE
          </Typography>
        </Grid>
        <Grid container item xs={12}>
          {itemData.results.map((item) => (
            <Avatar key={item.name} cols={1} className={classes.large}>
              <img src="https://via.placeholder.com/300x300" alt={item.name} />
            </Avatar>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
