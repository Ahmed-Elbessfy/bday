import React, { Component } from "react";
import { Consumer } from "../Context";
import Gift from "./Gift";

class Gifts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          {
            /* Extract gifts and user data from imported Context state*/
          }
          const { wishList: gifts, profileUser: user } = value;
          return (
            <div className="container">
              <div className="row">
                {/* create a gift component for each new gift data imported from Context state */}
                {gifts.map(gift => {
                  return <Gift key={gift.id} gift={gift} user={user} />;
                })}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Gifts;
