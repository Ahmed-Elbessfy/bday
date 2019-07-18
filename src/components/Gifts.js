import React, { Component } from 'react';
import { Consumer } from '../Context';
import Gift from './Gift'

class Gifts extends Component {
  render() {
    return (
      <Consumer >
        { value => {
          const { wishList: gifts } = value
          return (
            <div className='container'>
              <div className='row'>
                { gifts.map(gift => {
                  return <Gift key={gift.id} gift={ gift } userName={ this.props.userName } userPic={ this.props.userPic } />
                }) }
              </div>
            </div>
          )
        } }
      </Consumer >
    );
  }
}

export default Gifts;