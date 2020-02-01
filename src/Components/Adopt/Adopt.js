import React from 'react';
import Cats from '../Cats/Cats';
import Dogs from '../Dogs/Dogs';
import config from '../../config';


class Adopt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        cats: {},
        dogs: {},
        currentCat: {},
        currentDog: {},
        adopting: false,
        turnToAdopt: false
    }
  }

  componentWillMount() {
    this.getCats();
    this.getDogs();
    this.addAdopter();
  }
  
  startTimer = () => setInterval(this.nextAdopter(), 30000)

  nextAdopter = () => {
    return fetch(`${config.REACT_APP_API_ADDRESS}/adopters`, {
      method: 'DELETE',
      headers: {
        'content-type':'application/json'
      }
    })
  }

  addAdopter = () => {
    if(this.state.adopting !== false) {
      return fetch(`${config.REACT_APP_API_ADDRESS}/adopters`, {
        method: 'POST',
        headers: {
          'content-type':'application/json'
        },
        body: JSON.stringify({
          name: 'You', 
          adopting: false
        }) 
      })
      .then(this.setAdopting())
      .then(this.startTimer());
    } else return;
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
    .then(dogs => this.addDogs(dogs))
    .then(() => this.selectDogs(this.state.dogs[0]));
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
  setAdopting = () => {
    this.setState({
      adopting: true
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