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
    padding: 10,
  },
}));

export default function ProductBlurbs(props) {
  const classes = useStyles();
  const { currentItemInfo } = props;

  if (currentItemInfo.features) {
    return (
      <Grid item xs={4}>
        {currentItemInfo.features.map((feature, index) => (
          <List dense className="list of features" key={index}>
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              <ListItemText
                primary={`${feature.feature} :`}
                secondary={` ${feature.value}`}
              />
            </ListItem>
          </List>
        ))}
      </Grid>
    );
  }
  return <CircularProgress />;
}
