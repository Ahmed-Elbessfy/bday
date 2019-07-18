import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Profile from './components/Profile'
import GiftPage from './components/GiftPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from './Context'


function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path='/' component={ Profile } />
            <Route path='/gift/:id' component={ GiftPage } />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
