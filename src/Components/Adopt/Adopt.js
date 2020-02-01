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
    this.selectDogs();
  }

  // Get all //
  getCats = () => {
    return fetch(`${config.REACT_APP_API_ADDRESS}/cats`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(cats => this.addCats(cats))
    .then(() => this.selectCats(this.state.cats[0]));
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

  //Add to state//
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
  // set current animal //
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

  //click handlers
  handleCatAdoption = (ev) => {
    ev.preventDefault();
    this.adoptCat();
    this.getCats();
  }

  handleDogAdoption = (ev) => {
    ev.preventDefault();
    this.adoptDog();
    this.getDogs();
  }

  //adopt fetches
  adoptCat = () => {
    return fetch(`${config.REACT_APP_API_ADDRESS}/cats`, {
      method: 'DELETE',
      headers: {
        'content-type':'application/json'
      }
    })
  }

  adoptDog = () => {
    return fetch(`${config.REACT_APP_API_ADDRESS}/dogs`, {
      method: 'DELETE',
      headers: {
        'content-type':'application/json'
      }
    })
  }



  render() {
    let cat = this.state.currentCat;
    console.log(cat);

    return(
      <div className="adoptionContainer">
        <div>
          <Cats cat={this.state.currentCat}/>
          <button onClick={this.handleCatAdoption}>Adopt Me</button>
        </div>
        <div>
          <Dogs dog={this.state.currentDog}/>
          <button onClick={this.handleDogAdoption}>Adopt Me</button>
        </div>
      </div>
    )
  }
}

export default Adopt;