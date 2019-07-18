import React, { Component } from "react";
import { Consumer } from "../Context";
import cover from "../media/cover.jpeg";
import Gifts from "./Gifts";
class Profile extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { profileUser: user } = value;
          return (
            <React.Fragment>
              <header>
                <img
                  src={cover}
                  alt="cover"
                  className="mb-4"
                  style={{ width: "100%", height: "40vh", objectFit: "cover" }}
                />
                <div className="container py-2 mb-4">
                  <div className="row align-items-center">
                    <div className="col-md-4 mb-4 text-center">
                      <img
                        src={user.profilePic}
                        alt="cover"
                        className="profile-pic rounded-circle img-thumbnail w-100"
                        style={{ maxWidth: "20rem" }}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="user-info text-center text-md-left">
                        <p className="h3 text-secondary text-capitalize">
                          {user.name}
                        </p>
                        <p>
                          <span className="text-danger">Aug 28</span> - 26
                          followers
                        </p>
                        <p className="text-secondary">#neverGiveUp</p>
                        <button
                          className="btn btn-outline-danger btn-lg rounded-pill px-5 ml-0 mr-3 my-2 text-capitalize"
                          style={{ minWidth: "13rem" }}
                        >
                          follow
                        </button>
                        <button
                          className="btn btn-danger btn-lg rounded-pill px-5 ml-0 mr-3 my-2 text-capitalize"
                          style={{ minWidth: "13rem" }}
                        >
                          gift group
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
              <Gifts userName="ahmed taha" userPic={user.profilePic} />
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Profile;
