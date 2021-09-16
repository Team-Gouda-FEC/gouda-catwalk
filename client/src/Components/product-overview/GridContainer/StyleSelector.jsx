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
  const [setProductImage, setStyle] = useState(null);

  const getStyles = () => {
    if (props.currentItemId) {
      axios
        .get('/getImage/', {
          params: { product_id: props.currentItemId },
        })
        .then((response) => {
          console.log('*** get styles is working! ***');
          // response.data.results[0].photos[0].thumbnail_url;
        })
        .catch((err) => {
          console.log('*** get styles is not working! ***', err);
        });
    }
  };

  useEffect(() => {
    getStyles();
  }, []);

  return (
    setProductImage && (
      <div className={classes.root}>
        <Grid container>
          <Grid container item xs={12}>
            <Typography>
              Style
              {'>'}
              SELECTED STYLE
            </Typography>
          </Grid>
          <Grid container item xs={12}>
            {console.log(props.currentItem)}
          </Grid>
        </Grid>
      </div>
    )
  );
}
