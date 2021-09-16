import React from 'react';
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

  const getStyles = () => {
    axios
      .get('/getImage', {
        params: { product_id: props.currentItem.id },
      })
      .then((response) => {
        console.log('RESPONSE DATA FROM GET THUMBNAILS', response);
      })
      .catch((err) => {
        console.log('*** this is not working! ***', err);
      });
  };

  return (
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
          {console.log('current item in style selector: ', props.currentItem)}
          {/* {props.currentItem.map((item) => (
            <Avatar key={item.name} cols={1} className={classes.large}>
              <img src="https://via.placeholder.com/300x300" alt={item.name} />
            </Avatar>
          ))} */}
        </Grid>
      </Grid>
    </div>
  );
}
