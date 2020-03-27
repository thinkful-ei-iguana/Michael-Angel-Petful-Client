import React from 'react';
import { Link } from 'react-router-dom';
import config from '../../config';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {}
    }
  }
  componentDidMount() {
    this.currentAdopter();
    this.startTimer();
  }

  currentAdopter = () => {
    return fetch(`${config.REACT_APP_API_ADDRESS}/adopters`, {
      method: 'GET',
      headers: {
        'content-type':'application/json'
      }
    })
    .then(res => res.json())
    .then(person => this.setPerson(person[0]));
  }

  setPerson = (person) => {
    this.setState({
      person: person
    })
  }

  startTimer = () => {
    setInterval(() => {
      this.nextAdopter();
      this.currentAdopter();
    }, 30000)
  }

  nextAdopter = () => {
    return fetch(`${config.REACT_APP_API_ADDRESS}/adopters`, {
      method: 'DELETE',
      headers: {
        'content-type':'application/json'
      }
    })
  }

  render() {
    let adopting;
    if (this.state.person === [] || !this.state.person || this.state.person === undefined) {
      adopting = <div className="adoptionQueue">Waiting for adopter.</div>;
    }
    else {
      adopting = <div className="adoptionQueue">Now adopting: {this.state.person.name}</div>;
    }

    return(
      <div className="header">
        <Link to='/'>
          <h1>Petful</h1>
        </Link>
        {adopting}
        <div className="links">
          <Link to='/about'><p>About Adoption</p></Link>
          <Link to='/animals'><p>Our Animals</p></Link>
          <Link to='/adopt'><p>Adopt</p></Link>
          <Link to='/add'><p>Add Animal</p></Link>
        </div>
      </div>
    )
  }
}

export default Header;