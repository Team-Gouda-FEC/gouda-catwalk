import React from 'react';
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
    maxWidth: 360,
  },
}));

export default function ProductBlurbs() {
  const classes = useStyles();

  return (
    <Grid container elevation={0} className={classes.root}>
      <Grid item xs={12}>
        <List dense className="list of features">
          <ListItem alignItems="flex-start">
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            <ListItemText primary="GMO and Pesticide-free" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            <ListItemText primary="i think this is actually where pintrest" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            <ListItemText primary="facebook and" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            <ListItemText primary="twitter should go?" />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}
