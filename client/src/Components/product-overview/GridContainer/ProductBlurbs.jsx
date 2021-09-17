/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    margin: 15,
    padding: 50,
    maxWidth: 360,
  },
}));

export default function ProductBlurbs(props) {
  const classes = useStyles();
  const [featureName, setFeatureName] = React.useState(false);
  const [featureValue, setFeatureValue] = React.useState(false);

  const useProps = () => {
    if (props.productInfo.features) {
      console.log(props);
      props.productInfo.features.map((feature) =>
        setFeatureName(feature.feature)
      );
      props.productInfo.features.map((feature) =>
        setFeatureValue(feature.value)
      );
    }
  };

  useEffect(() => {
    useProps();
  }, [ProductBlurbs]);

  return (
    featureName,
    (featureValue && (
      <Grid container elevation={0} className={classes.root}>
        <Grid item xs={12}>
          <List dense className="list of features">
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              <ListItemText variant="button" primary={`${featureName}: `} />
              <ListItemText primary={` ${featureValue}`} />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    )) || (
      <Grid container elevation={0} className={classes.root}>
        <Grid item xs={12}>
          <List dense className="list of features">
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              <ListItemText variant="button" primary="Feature Name: " />
              <ListItemText primary=" Feature Value" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    )
  );
}
