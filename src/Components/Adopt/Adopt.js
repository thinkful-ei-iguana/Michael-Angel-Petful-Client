import React from 'react';
import Cats from '../Cats/Cats';
import Dogs from '../Dogs/Dogs';
import Utils from '../../Utilities/Fetches';


class Adopt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCat: {},
      currentDog: {}
    }
  }
  
  componentWillMount() {
    this.currentCat();
    this.currentDog();
  }

  componentDidMount() {
    Utils.addAdopter();
  }

  currentCat() {
    Utils.fetchCats().then(cats => this.setCat(cats[0]));
  }

  setCat = (cat) => {
    this.setState({
      currentCat: cat
    });
  }

  currentDog = () => {
    Utils.fetchDogs().then(dogs => this.setDog(dogs[0]))
  }

  setDog = (dog) => {
    this.setState({
      currentDog: dog
    })
  }

  handleCatAdoption = (ev) => {
    ev.preventDefault();
    Utils.adoptCat();
  }

  handleDogAdoption = (ev) => {
    ev.preventDefault();
    Utils.adoptDog();
  }


  render() {
    return(
      <div className="adoptionContainer">
        <div>
          <Cats cat={this.state.currentCat}/>
          <button onClick={this.handleCatAdoption}>Adopt Me</button>
        </div>
        <div>
          <Dogs />
          <button onClick={this.handleDogAdoption}>Adopt Me</button>
        </div>
      </div>
    )
  }
}

export default Adopt;