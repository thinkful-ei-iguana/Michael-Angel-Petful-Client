import React from 'react';


class Dogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div className="Dogs">
        <h3>{this.props.dog.name}</h3>
        <img src={this.props.dog.imageURL} alt={this.props.dog.imageDescription}/>
        <p>Sex: {this.props.dog.sex}</p>
        <p>Age: {this.props.dog.age}</p>
        <p>Breed: {this.props.dog.breed}</p>
        <p>My Story: <br /><br /> 
        {this.props.dog.story}</p>
      </div>
    )
  }
}

export default Dogs;