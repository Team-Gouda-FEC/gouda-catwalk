/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
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
    width: theme.spacing(9),
    height: theme.spacing(9),
    padding: 5,
    margin: 10,
    border: '1px solid black',
  },
}));

export default function StyleSelector(props) {
  const classes = useStyles();

  // define state
  const [selectedStyleName, setSelectedStyleName] = useState('SELECTED STYLE');
  const [selectedStylePhotos, setselectedStylePhotos] = useState(
    'https://via.placeholder.com/300x300'
  );

  const setStyle = () => {
    if (props.currentStyles.length > 0) {
      setSelectedStyleName(props.currentStyles[0].name);
      setselectedStylePhotos(props.currentStyles[0].photos[0]);
    }
  };

  useEffect(() => {
    setStyle();
  }, []);

  return (
    selectedStyleName,
    selectedStylePhotos && (
      <div className={classes.root}>
        <Grid container>
          <Grid container item xs={12}>
            <Typography>
              Style
              {'>'}
              {selectedStyleName}
            </Typography>
          </Grid>
          <Grid container item xs={12}>
            <Avatar
              alt={selectedStyleName}
              src={selectedStylePhotos}
              sx={{ width: 56, height: 56 }}
            />
          </Grid>
        </Grid>
      </div>
    )
  );
}
