import config from '../config';

const Utilities = {
  ///// DOGS /////
  fetchDogs:  () => {
    fetch(`${config.REACT_APP_API_ADDRESS}/dogs`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(dogs => dogs);
  },

  ///// CATS /////
  fetchCats: () => {
    fetch(`${config.REACT_APP_API_ADDRESS}/cats`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => res.json());
  },
  adoptCat: () => {
    fetch(`${config.REACT_APP_API_ADDRESS}/cats`, {
      method: 'DELETE',
      headers: {
        'content-type':'application/json'
      }
    })
  },
  ///// ADOPTERS /////
  fetchAdopters: () => {
    fetch(`${config.REACT_APP_API_ADDRESS}/adopters`, {
      method: 'GET',
      headers: {
        'content-type':'application/json'
      }
    })
    .then(res => res.json())
    .then(person => console.log(person));
  }

}

export default Utilities;

