import React from 'react';
import Cats from '../Cats/Cats';
import Dogs from '../Dogs/Dogs';
import config from '../../config';
import Utils from '../../Utilities/Fetches';


class Adopt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCat: {},
      currentDog: {}
    }
  }

  componentDidMount() {
    this.setCat();
    this.setDog();
    return fetch(`${config.REACT_APP_API_ADDRESS}/adopters`, {
      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify({name: 'You'}) 
    });
  }

  currentCat = () => {
    return Utils.fetchCats().then(cats => {
      console.log(cats[0]);
      this.setCat(cats[0])});
  }

  setCat = (cat) => {
    this.setState({
      currentCat: cat
    })
  }

  currentDog = () => {
    Utils.fetchDogs().then(dogs => this.setDog(dogs[0]))
  }

  setDog = (dog) => {
    this.setState({
      currentDog: dog
    })
  }


  render() {
    return(
      <div className="adoptionContainer">
        <Cats cat={this.state.currentCat}/>
        <Dogs />
      </div>
    )
  }
}

export default Adopt;