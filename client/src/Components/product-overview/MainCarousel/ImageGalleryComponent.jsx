/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageComponent from './ImageComponent.jsx';

export default class ImageGalleryComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: '',
      products: this.props.allItems,
      currentItemId: this.props.currentItemId,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(itemId, itemObj) {
    this.setState(
      {
        selectedItem: itemObj,
      },
      () => {
        this.props.handleUpdateCurrentItem(itemId, itemObj);
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
            onClick={() => this.handleClick(item.id, item)}
            key={item.name}
          >
            <ImageComponent
              key={item.id}
              allItems={this.props.allItems}
              currentItemId={item.id}
              currentItem={item}
            />
          </Grid>
        ))}
      </>
    );
  }
}
