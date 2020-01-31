import React from 'react';
import Cats from '../Cats/Cats';
import Dogs from '../Dogs/Dogs';
import config from '../../config';
import Utils from '../../Utilities/Fetches';


class Adopt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCat: {},
      currentDog: {}
    }
  }

  componentDidMount() {
    this.currentCat();
    this.currentDog();
    return fetch(`${config.REACT_APP_API_ADDRESS}/adopters`, {
      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify({name: 'You'}) 
    });
  }

  async currentCat() {
    let cats = await Utils.fetchCats();
    console.log(cats);
    this.setCat(cats[0]);
  }

  setCat = (cat) => {
    this.setState({
      currentCat: cat
    }, console.log(this.state.currentCat))
  }

  currentDog = () => {
    Utils.fetchDogs().then(dogs => this.setDog(dogs[0]))
  }

  setDog = (dog) => {
    this.setState({
      currentDog: dog
    })
  }


  render() {
    return(
      <div className="adoptionContainer">
        <Cats cat={this.state.currentCat}/>
        <Dogs />
      </div>
    )
  }
}

export default Adopt;