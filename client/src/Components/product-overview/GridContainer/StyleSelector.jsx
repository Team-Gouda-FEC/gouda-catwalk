import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Icon from '@material-ui/core/Icon';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: 12,
    border: '4px solid black',
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const SmallAvatar = withStyles((theme) => ({
  root: {
    width: 30,
    height: 30,
    border: '3px solid black',
  },
}))(Avatar);

const StyleSelector = (props) => {
  const classes = useStyles();
  const { currentStyles, currentItemIndex, handleUpdateCarousel } = props;

  const handleClick = (index) => {
    handleUpdateCarousel(index);
  };

  if (currentStyles.results) {
    return (
      <>
        <Grid item xs={12}>
          <Typography variant="h6">
            Style
            {' > '}
          </Typography>
          <Typography variant="h5" color="primary">
            {currentStyles.results[currentItemIndex].name}
          </Typography>
          <br />
          <div className={classes.root}>
            {currentStyles.results.map((style, index) => (
              <Badge
                key={index}
                overlap="circular"
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                badgeContent={<SmallAvatar alt="selected" src="" />}
              >
                <Avatar
                  alt={currentStyles.results[currentItemIndex].name}
                  src={style.photos[0].thumbnail_url}
                  variant="circular"
                  className={classes.large}
                  onClick={() => {
                    handleClick(index);
                  }}
                />
              </Badge>
            ))}
          </div>
        </Grid>
      </>
    );
  }
  return <CircularProgress />;
};

export default StyleSelector;
