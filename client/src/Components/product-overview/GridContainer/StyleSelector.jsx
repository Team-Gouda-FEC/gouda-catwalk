import React from 'react';
import Grid from '@material-ui/core/Grid';
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
  const { currentStyles } = props;
  if (currentStyles.length > 0) {
    return currentStyles.map((style) => {
      for (let i = 0; i < style.photos.length; i += 1) {
        const current = style.photos[i];
        return (
          <StyledBadge
            overlap="circular"
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            badgeContent={4}
            variant="dot"
            key={style.style_id}
          >
            <Avatar
              alt={style.name}
              src={current.thumbnail_url}
              sx={{ width: 56, height: 56 }}
              className={classes.large}
            />
          </StyledBadge>
        );
      }
    });
  }
  return <CircularProgress />;
};

export default StyleSelector;
