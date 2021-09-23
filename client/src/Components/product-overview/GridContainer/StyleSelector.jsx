import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    padding: 5,
    margin: 10,
    border: '2px solid black',
  },
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `3px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

const StyleSelector = (props) => {
  const classes = useStyles();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { currentStyles, handleUpdateCarousel } = props;

  const handleClick = (index) => {
    setCurrentIndex(index);
    handleUpdateCarousel(index);
  };

  if (currentStyles.results) {
    return (
      <div>
        <Grid container item xs={8}>
          <Typography>
            Style
            {' > '}
            {currentStyles.results[currentIndex].name}
          </Typography>
        </Grid>
        {currentStyles.results.map((style, index) => (
          <StyledBadge
            key={index}
            overlap="circular"
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            badgeContent={4}
            variant="dot"
          >
            <Avatar
              alt="name"
              src={style.photos[0].thumbnail_url}
              sx={{ width: 64, height: 64 }}
              className={classes.large}
              onClick={() => {
                handleClick(index);
              }}
            />
          </StyledBadge>
        ))}
      </div>
    );
  }
  return <CircularProgress />;
};

export default StyleSelector;
