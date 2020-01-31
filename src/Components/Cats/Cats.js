import React from 'react';
import Utils from '../../Utilities/Fetches';


class Cats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cat: {}
    }
  }
  componentDidMount() {
    this.setCurrentCat(this.props.cat);
  }

 

  setCurrentCat = (cat) => {
    this.setState({
      cat: cat
    })
  }

  handleAdoption = (ev) => {
    ev.preventDefault();
    Utils.adoptCat();
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
      </div>
    )
  }
}

export default Cats;