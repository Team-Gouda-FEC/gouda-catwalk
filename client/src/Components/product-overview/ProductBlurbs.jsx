import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
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
    <div className={classes.root}>
      <Grid container elevation={0}>
        <Grid item>
          <Typography> Blurb blurb blurbbbb</Typography>
        </Grid>
        <Divider orientation="vertical" />
        <Grid item>
          <List component="nav">
            <ListItem>
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              <ListItemText primary="GMO and Pesticide-free" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              <ListItemText primary="Made ith 100% Genetic Modification" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              <ListItemText primary="This is made up" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </div>
  );
}
