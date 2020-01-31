import React from 'react';
import Cats from '../Cats/Cats';
import Dogs from '../Dogs/Dogs';
import config from '../../config';


class Adopt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCat: {},
      currentDog: {}
    }
  }

  componentDidMount() {
    return fetch(`${config.REACT_APP_API_ADDRESS}/adpoters`, {
      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify({name: 'You'})
        
    })
  }

  render() {
    return(
      <div className="adoptionContainer">
        <Cats />
        <Dogs />
      </div>
    )
  }
}

export default Adopt;