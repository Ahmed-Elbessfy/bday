import React, { Component } from 'react';
import { Consumer } from '../Context'

class Gifts extends Component {
  render() {
    return (
      <Consumer >
        { value => {
          console.log(value.wishList)
          const { wishList: gifts } = value
          gifts.map(gift => {
            console.log(gift)
          })

        } }

      </Consumer >
    );
  }
}

export default Gifts;