import React, { Component } from "react";
import axios from "axios";
import profileUserPic from "./media/profile.png";
import bmw from "./media/bmw.jpg";
import classico from "./media/classico.jpg";
import fbshoes from "./media/fbshoes.jpg";
import iphone from "./media/iphone.png";
import maldives from "./media/maldives.jpg";
import playstation from "./media/playstation.jpg";
import likeUser1 from "./media/likeUsers (1).jpg";
import likeUser2 from "./media/likeUsers (2).jpg";
import likeUser3 from "./media/likeUsers (3).jpg";
import likeUser4 from "./media/likeUsers (4).png";
import likeUser5 from "./media/likeUsers (5).png";
import likeUser6 from "./media/likeUsers (6).jpg";

const Context = React.createContext();

class Provider extends Component {
  state = {
    profileUser: {
      name: "ahmed taha",
      profilePic: `${profileUserPic}`
    },
    wishList: [
      {
        id: 1,
        name: "BMW ",
        img: `${bmw}`,
        likes: [
          { name: "mark", pic: `${likeUser1}` },
          { name: "emma ", pic: `${likeUser2}` },
          { name: "micky", pic: `${likeUser3}` },
          { name: "leonardo", pic: `${likeUser4}` }
        ]
      },
      {
        id: 2,
        name: "classico tickets",
        img: `${classico}`,
        likes: [
          { name: "leonardo", pic: `${likeUser4}` },
          { name: "micky", pic: `${likeUser3}` },
          { name: "emma ", pic: `${likeUser2}` }
        ]
      },
      {
        id: 3,
        name: "maldives vacation",
        img: `${maldives}`,
        likes: [
          { name: "jhon", pic: `${likeUser5}` },
          { name: "emy", pic: `${likeUser6}` },
          { name: "mark", pic: `${likeUser1}` },
          { name: "emma ", pic: `${likeUser2}` }
        ]
      },
      {
        id: 4,
        name: "iphone max",
        img: `${iphone}`,
        likes: [
          { name: "micky", pic: `${likeUser3}` },
          { name: "leonardo", pic: `${likeUser4}` },
          { name: "jhon", pic: `${likeUser5}` },
          { name: "emy", pic: `${likeUser6}` }
        ]
      },
      {
        id: 5,
        name: "playstation 4",
        img: `${playstation}`,
        likes: [
          { name: "emma ", pic: `${likeUser2}` },
          { name: "micky", pic: `${likeUser3}` },
          { name: "leonardo", pic: `${likeUser4}` }
        ]
      },
      {
        id: 6,
        name: "football shoes",
        img: `${fbshoes}`,
        likes: [
          { name: "emy", pic: `${likeUser6}` },
          { name: "emma ", pic: `${likeUser2}` }
        ]
      }
    ]
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/todos/1`).then(res => {
      console.log(res);
      // this.setState({res:state})
    });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
const Consumer = Context.Consumer;
export { Provider, Consumer };
