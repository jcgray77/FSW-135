import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Auth from './components/Auth/Auth'
import Profile from './components/Profile/Profile'

function App() {
  return (
    <div className="app">
      <Switch>
        <Route
          exact path="/"
          render={() => <Auth />}
        />
        <Route
          path="/profile"
          render={() => <Profile />}
        />
      </Switch>
    </div>
  );
}

export default App;

// install axios and install react-router-dom