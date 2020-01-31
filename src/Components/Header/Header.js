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

  render() {
    return(
      <div className="header">
        <Link to='/'>
          <h1>Petful</h1>
        </Link>
        <div className="adoptionQueue">Now adopting: {this.state.person.name}</div>
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