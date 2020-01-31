import React from 'react';
import Header from './Components/Header/Header';
import Landing from './Components/Landing/Landing';
import Adopt from './Components/Adopt/Adopt';
import Add from './Components/Add-Animal/AddAnimalForm';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/adopt' component={Adopt} />
        <Route path='/add' component={Add} />
      </Switch>
    </div>
  );
}

export default App;
