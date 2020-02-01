import React from 'react';


class Cats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
 
  render() {
    return(
      <div className="Cats">
        <h3>{this.props.cat.name}</h3>
         <img src={this.props.cat.imageURL} alt={this.props.cat.imageDescription}/>
        <p>Sex: {this.props.cat.sex}</p>
        <p>Age: {this.props.cat.age}</p>
        <p>Breed: {this.props.cat.breed}</p>
        <p>My Story: <br /><br /> 
        {this.props.cat.story}</p>
      </div>
    )
  }
}

export default Cats;