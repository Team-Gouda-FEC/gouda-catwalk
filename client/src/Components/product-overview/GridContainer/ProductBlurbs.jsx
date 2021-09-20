/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CheckIcon from '@material-ui/icons/Check';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
}));

export default function ProductBlurbs(props) {
  const classes = useStyles();

  if (props.currentItemInfo.features) {
    return props.currentItemInfo.features.map((feature) => (
      <Grid
        container
        elevation={0}
        className={classes.root}
        key={feature.feature}
      >
        <Grid item xs={12}>
          <List dense className="list of features">
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              <ListItemText
                variant="button"
                primary={`${feature.feature} :`}
                secondary={` ${feature.value}`}
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    ));
  }
  return <CircularProgress />;
}
