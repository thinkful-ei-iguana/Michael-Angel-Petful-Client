import React from 'react';
import { Link } from 'react-router-dom';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div className="header">
        <Link to='/'>
          <h1>Petful</h1>
        </Link>
        <div className="links">
          <Link to='/adopt'>Adopt</Link>
          <Link to='/add'>Add Animal</Link>
        </div>
      </div>
    )
  }
}

export default Header;