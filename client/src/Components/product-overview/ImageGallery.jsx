import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ImageListItem from '@material-ui/core/ImageListItem';

export default class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(itemID) {
    this.setState(
      {
        selectedId: itemID,
      },
      () => {
        this.props.handleUpdateCurrentItem(this.state.selectedId);
      }
    );
  }

  render() {
    return (
      <>
        {this.props.allItems.map((item) => (
          <Grid
            item
            elevation={0}
            onClick={() => this.handleClick(item.id)}
            key={item.id}
          >
            <Typography key={item.id}> {item.name} </Typography>
          </Grid>
        ))}
      </>
    );
  }
}
