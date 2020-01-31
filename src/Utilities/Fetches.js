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
  adoptDog: () => {
    return fetch(`${config.REACT_APP_API_ADDRESS}/dogs`, {
      method: 'DELETE',
      headers: {
        'content-type':'application/json'
      }
    })
  },

  ///// CATS /////
  fetchCats: () => {
    return fetch(`${config.REACT_APP_API_ADDRESS}/cats`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => res.json());
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
  },
  addAdopter: () => {
    return fetch(`${config.REACT_APP_API_ADDRESS}/adopters`, {
      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify({name: 'You'}) 
    });
  }

}

export default Utilities;

