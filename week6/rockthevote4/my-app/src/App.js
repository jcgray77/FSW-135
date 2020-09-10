import React, {useContext} from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom'
import Auth from './components/Auth'
import Profile from './components/Profile'
import Global from './components/Global'
import Navbar from './components/Navbar'
import {UserContext} from './context/UserProvider'
import ProtectedRoute from './components/ProtectedRoute'


function App() {
  const {token, logout} = useContext(UserContext)
  return (
    <div className="app">
      {token && <Navbar logout={logout}/>}
      <h1>Rock The Vote</h1>
      <Switch>
        <Route
          exact path="/"
          render={() => token ? <Redirect to="/profile"/> : <Auth />}
        />
        <ProtectedRoute
          path="/profile"
          component={Profile}
          redirectTo="/"
          token={token}
        />
        <ProtectedRoute
          path="/Global"
          component={Global}
          redirectTo="/"
          token={token}
        />
      </Switch>
    </div>
  );
}

export default App;