import React from 'react';
import Cats from '../Cats/Cats';
import Dogs from '../Dogs/Dogs';

class Animals extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showDogs: false,
      showCats: false,
    }
  }

  selectCats = () => {
    this.setState({
      showDogs: false,
      showCats: true
    })
  }
  selectDogs = () => {
    this.setState({
      showDogs: true,
      showCats: false
    })
  }

  render(){
    return(
      <div className="allAnimals">
        <div className="types">
          <button onClick={this.selectCats}>Cats</button>
          <button onClick={this.selectDogs}>Dogs</button>
        </div>
        {this.state.showCats && <Cats />}
        {this.state.showDogs && <Dogs />}
      </div>
    )


  }
}

export default Animals;