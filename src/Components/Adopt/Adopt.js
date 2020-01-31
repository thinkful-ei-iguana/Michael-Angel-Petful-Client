import React from 'react';
import Cats from '../Cats/Cats';
import Dogs from '../Dogs/Dogs';


class Adopt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCat: {},
      currentDog: {}
    }
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