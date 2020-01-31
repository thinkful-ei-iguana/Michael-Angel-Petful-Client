import React from 'react';
import config from '../../config';


class Dogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dog: {}
    }
  }

  componentDidMount() {
    this.getCurrentDog();
  }

  getCurrentDog = () => {
    return fetch(`${config.REACT_APP_API_ADDRESS}/dogs`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(dogs => this.setCurrentDog(dogs[0]));
  }

  setCurrentDog = (dog) => {
    this.setState({
      dog: dog
    })
  }

  handleAdoption = (ev) => {
    ev.preventDefault();
    this.adoptDog();
    this.getCurrentDog();
  }

  adoptDog = () => {
    return fetch(`${config.API_ADDRESS}/dogs`, {
      method: 'DELETE',
      headers: {
        'content-type':'application/json'
      }
    })
  }

  render() {
    return(
      <div className="Dogs">
        <h3>{this.state.dog.name}</h3>
        <img src={this.state.dog.imageURL} alt={this.state.dog.imageDescription}/>
        <p>Sex: {this.state.dog.sex}</p>
        <p>Age: {this.state.dog.age}</p>
        <p>Breed: {this.state.dog.breed}</p>
        <p>My Story: <br /><br /> 
        {this.state.dog.story}</p>
        <button onClick={this.handleAdoption}>Adopt Me</button>
      </div>
    )
  }
}

export default Dogs;