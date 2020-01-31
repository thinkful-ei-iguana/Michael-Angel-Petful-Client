import React from 'react';
import config from '../../config';


class Cats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cat: {}
    }
  }
  componentDidMount() {
    this.getCurrentCat();
  }

  getCurrentCat = () => {
    return fetch(`${config.API_ADDRESS}/cats`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(cats => this.setCurrentCat(cats[0]));
  }
  setCurrentCat = (cat) => {
    this.setState({
      cat: cat
    })
  }

  handleAdoption = (ev) => {
    ev.preventDefault();
    this.adoptCat();
    this.getCurrentCat();
  }

  adoptCat = () => {
    return fetch(`${config.REACT_APP_API_ADDRESS}/cats`, {
      method: 'DELETE',
      headers: {
        'content-type':'application/json'
      }
    })
  }

  //when you hit the adopt button, you enter a queue and if no selection is made in 30 seconds,
  //the person is removed from the queue.
  //Have an array of ghost names and in a random number of seconds add a random name to the queue

  render() {
    return(
      <div className="Cats">
        <h3>{this.state.cat.name}</h3>
         <img src={this.state.cat.imageURL} alt={this.state.cat.imageDescription}/>
        <p>Sex: {this.state.cat.sex}</p>
        <p>Age: {this.state.cat.age}</p>
        <p>Breed: {this.state.cat.breed}</p>
        <p>My Story: <br /><br /> 
        {this.state.cat.story}</p>
        <button onClick={this.handleAdoption}>Adopt Me</button>
      </div>
    )
  }
}

export default Cats;