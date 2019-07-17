import React, { Component } from 'react';
import axios from 'axios'

const Context = React.createContext();

class Provider extends Component {
  state = {
    wishList: [{
      id: 1,
      name: 'gift 1',
      img: '',
      likes: ['user', 'user', 'user', 'user', 'user']
    }, {
      id: 2,
      name: 'gift 2',
      img: '',
      likes: ['user', 'user', 'user', 'user', 'user']
    }, {
      id: 3,
      name: 'gift 3',
      img: '',
      likes: ['user', 'user', 'user', 'user', 'user']
    },]
  }
  render() {
    return (
      <Context.Provider value={ this.state } >
        { this.props.children }
      </Context.Provider>
    );
  }
}
const Consumer = Context.Consumer
export { Provider, Consumer }

