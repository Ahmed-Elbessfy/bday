import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Profile from './components/Profile'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from './Context'

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Nav />
          <Profile />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
