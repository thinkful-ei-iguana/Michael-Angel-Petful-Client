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
          <Link to='/about'><p>About Adoption</p></Link>
          <Link to='/adopt'><p>Adopt</p></Link>
          <Link to='/add'><p>Add Animal</p></Link>
        </div>
      </div>
    )
  }
}

export default Header;