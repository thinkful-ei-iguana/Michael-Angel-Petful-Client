import React from 'react';
import Cats from '../Cats/Cats';
import Dogs from '../Dogs/Dogs';
import Utils from '../../Utilities/Fetches';
import config from '../../config';


class Adopt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        cats: {},
        dogs: {},
        currentCat: {},
        currentDog: {}
    }
  }

  componentWillMount() {
    this.getCats();
    this.getDogs();
    this.selectCats();
    this.selectDogs();
  }

  getCats = () => {
    return fetch(`${config.REACT_APP_API_ADDRESS}/cats`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(cats => this.addCats(cats));
  }

  getDogs = () => {
    return fetch(`${config.REACT_APP_API_ADDRESS}/dogs`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(dogs => this.addDogs(dogs));
  }

  addCats = (cats) => {
    this.setState({
      cats: cats
    })
  }

  addDogs = (dogs) => {
    this.setState({
      dogs: dogs
    })
  }

  selectCats = () => {
    this.setState({
      currentCat: this.state.cats[0]
    })
  }
  selectDogs = () => {
    this.setState({
      currentDog: this.state.dogs[0]
    })
  }

  handleCatAdoption = (ev) => {
    ev.preventDefault();
    Utils.adoptCat();
  }

  handleDogAdoption = (ev) => {
    ev.preventDefault();
    Utils.adoptDog();
  }


  render() {
    return(
      <div className="adoptionContainer">
        <div>
          <Cats cat={this.state.currentCat}/>
          <button onClick={this.handleCatAdoption}>Adopt Me</button>
        </div>
        <div>
          <Dogs />
          <button onClick={this.handleDogAdoption}>Adopt Me</button>
        </div>
      </div>
    )
  }
}

export default Adopt;