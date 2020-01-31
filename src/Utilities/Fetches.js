import config from '../config';

const Utilities = {
  ///// DOGS /////
  fetchDogs:  () => {
    return fetch(`${config.REACT_APP_API_ADDRESS}/dogs`, {
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
    return fetch(`${config.REACT_APP_API_ADDRESS}/cats`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(cats => cats);
  },
  adoptCat: () => {
    return fetch(`${config.REACT_APP_API_ADDRESS}/cats`, {
      method: 'DELETE',
      headers: {
        'content-type':'application/json'
      }
    })
  },
  ///// ADOPTERS /////
  fetchAdopters: () => {
    return fetch(`${config.REACT_APP_API_ADDRESS}/adopters`, {
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

