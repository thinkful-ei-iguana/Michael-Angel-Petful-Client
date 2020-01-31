import React from 'react';
import Cats from '../Cats/Cats';
import Dogs from '../Dogs/Dogs';
import Utils from '../../Utilities/Fetches';

class Animals extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showDogs: false,
      showCats: false,
      cats: {},
      dogs: {},
      currentCat: {},
      currentDog: {}
    }
  }
  
  componentDidMount() {
    this.getCats();
    this.getDogs();
  }

  getCats = () => {
    Utils.fetchCats().then(cats => this.addCats(cats));
  }

  getDogs = () => {
    Utils.fetchDogs().then(dogs => this.addDogs(dogs));
  }

  addCats = (cats) => {
    this.setState({
      cats: cats
    })
  }

  addDogs = (dogs) => {
    this.setState({
      dogs: dogs
    })
  }

  selectCats = () => {
    this.setState({
      showDogs: false,
      showCats: true,
      currentCat: this.state.cats[0]
    })
  }
  selectDogs = () => {
    this.setState({
      showDogs: true,
      showCats: false,
      currentDog: this.state.dogs[0]
    })
  }

  render(){
    return(
      <div className="allAnimals">
        <div className="viewerContainer">
          <div className="types">
            <button onClick={this.selectCats}>Cats</button>
            <button onClick={this.selectDogs}>Dogs</button>
          </div>
          {this.state.showCats && <Cats cat={this.state.currentCat}/>}
          {this.state.showDogs && <Dogs dog={this.state.currentDog}/>}
        </div>
      </div>
    )


  }
}

export default Animals;