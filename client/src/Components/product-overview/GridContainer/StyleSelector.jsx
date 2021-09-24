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
    width: theme.spacing(11),
    height: theme.spacing(11),
    margin: 10,
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
  },
}))(Avatar);

const StyleSelector = (props) => {
  const classes = useStyles();
  const { currentStyles, currentItemIndex, handleUpdateCarousel } = props;

  const handleClick = (index) => {
    handleUpdateCarousel(index);
  };

  const checkmarkIcon = <CheckCircleIcon />;

  if (currentStyles.results) {
    return (
      <>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h6">
              Style
              {' > '}
            </Typography>
            <Typography variant="h5" color="primary">
              {currentStyles.results[currentItemIndex].name}
            </Typography>
            <br />
          </Grid>
          {currentStyles.results.map((style, index) => (
            <Grid item xs={3} key={index}>
              <Badge
                overlap="circular"
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                badgeContent={
                  <SmallAvatar
                    alt="selected"
                    src="../../../images/checkmark.png"
                  />
                }
              >
                <Avatar
                  alt={currentStyles.results[currentItemIndex].name}
                  src={style.photos[0].thumbnail_url}
                  className={classes.large}
                  onClick={() => {
                    handleClick(index);
                  }}
                />
              </Badge>
            </Grid>
          ))}
        </Grid>
      </>
    );
  }
  return <CircularProgress />;
};

export default StyleSelector;
