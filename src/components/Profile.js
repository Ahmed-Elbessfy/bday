import React, { Component } from "react";
import cover from "../media/cover.jpeg";
import profilePic from "../media/profile.png";
import Gifts from './Gifts'
class Profile extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <img src={ cover } alt="cover" className="mb-4" style={{width:'100%', height: '40vw', objectFit:'cover'}} />
          <div className="container py-2 mb-4">
            <div className="row align-items-center">
              <div className='col-md-4'>
                <img src={ profilePic } alt="cover" className="profile-pic rounded-circle img-thumbnail" />
              </div>
              <div className='col-md-8'>
                <div className="user-info ">
                  <p className="h3 text-secondary text-capitalize">ahmed taha</p>
                  <p>
                    <span className="text-danger">Aug 28</span> - 26 followers
                  </p>
                  <p className="text-secondary">#neverGiveUp</p>
                  <button className="btn btn-outline-secondary text-danger btn-lg rounded-pill px-5 mr-3 text-capitalize">
                    follow
                  </button>
                  <button className="btn btn-danger btn-lg rounded-pill px-5 ml-3 text-capitalize">
                    gift group
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
        <Gifts />
      </React.Fragment>
    );
  }
}

export default Profile;
