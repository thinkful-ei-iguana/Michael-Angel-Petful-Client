import React from 'react';


class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      petInfo: {}
    }
  }

  handleSubmit = () => {

  }

  render() {
    return(
      <div>
        Pets Here! Add Your Pets here!
        <form className="submissionForm" onSubmit={this.handleSubmit}> 
          <select onChange={this.handleSelect}>Animal Type</select>
          <label for='animalName'>Name</label>
          <input id='animalName' value={this.setName} placeholder="Name" required></input>
          <input id='animalSex' value={this.setSex} placeholder="Sex" required></input>
          <input required id='animalBreed' placeholder='Breed'></input>
          <input required id='animalColor' placeholder='Color'></input>
          <button type='Submit'>Place Pet for Adoption</button>
        </form>
      </div>
    )
  }
}

export default Add;