import React from 'react';
import Star from '@material-ui/icons/StarRounded';
import Outline from '@material-ui/icons/StarBorderRounded';
// import '../../../dist/starRating.css';

class Stars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fillAmount: 0
    };
  };

  componentDidMount() {
    this.setRating();
  };

  // convert rating into px width
  setRating= ()=> {
    let width = 0;
    let num = this.props.rating; // start with the rating

    if(typeof num === 'number'  && num <= 5) {
      num *= 24; // convert rating into px width
      while (num >= 24) {
        width += 24; // increase width to meet the whole pixal width
        num -= 24;
      }
      // use the remaining width to get the next quater pixal
      if (num >= 18) {
        width += 15;
      } else if (num >= 12) {
        width += 12;
      }else if (num >= 6) {
        width += 9;
      }
    } else if (num > 5) {
      width = 120;
    }
    this.setState({
      fillAmount: width
    });
  }

  render () {
    return (
      <div id='starRating'>
        <div id='under'>
          <Outline id='star'/>
          <Outline id='star'/>
          <Outline id='star'/>
          <Outline id='star'/>
          <Outline id='star'/>
        </div>
        <div id='starSubContainer' style={{
          width: this.state.fillAmount
        }}>
          <div id='over'>
            <Star id='star'/>
            <Star id='star'/>
            <Star id='star'/>
            <Star id='star'/>
            <Star id='star'/>
          </div>
        </div>
      </div>
    );
  }

}


export default Stars;