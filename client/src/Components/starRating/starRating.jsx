import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMehRollingEyes } from '@fortawesome/free-solid-svg-icons'
import { faMehBlank } from '@fortawesome/free-solid-svg-icons'
import { faLaughBeam } from '@fortawesome/free-solid-svg-icons'
import { faDizzy } from '@fortawesome/free-solid-svg-icons'
import { faGrinStars } from '@fortawesome/free-solid-svg-icons'


class Stars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 24
    };
  }

  componentDidMount() {
    console.log('other');
  }

  render () {
    return (
      <div id='starRating'>
        <div id='under'>
          <FontAwesomeIcon icon = {faDizzy} />
          <FontAwesomeIcon icon = {faMehRollingEyes} />
          <FontAwesomeIcon icon = {faMehBlank} />
          <FontAwesomeIcon icon = {faLaughBeam} />
          <FontAwesomeIcon icon = {faGrinStars} />
        </div>
        <div id='starSubContainer' style={{
        width: this.state.rating}}>
          <div id='over'>
            <FontAwesomeIcon icon = {faDizzy} />
            <FontAwesomeIcon icon = {faMehRollingEyes} />
            <FontAwesomeIcon icon = {faMehBlank} />
            <FontAwesomeIcon icon = {faLaughBeam} />
            <FontAwesomeIcon icon = {faGrinStars} />
          </div>
        </div>
      </div>
    );
  }

}


export default Stars;