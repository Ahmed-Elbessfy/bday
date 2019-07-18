import React from "react";
import { Consumer } from "../Context";
import { Link } from "react-router-dom";

function GiftPage(props) {
  return (
    <Consumer>
      {value => {
        const { wishList: gifts, profileUser: user } = value;
        let gift = gifts.filter(gift => {
          return gift.id === Number(props.match.params.id);
        })[0];
        return (
          <div className="container">
            {/* Back to Profile page link */}
            <Link
              to="/"
              className="btn btn-danger btn-lg rounded-pill px-5 text-capitalize my-5"
            >
              go back
            </Link>
            {/* USer profile pic and Name */}
            <div>
              <img
                src={user.profilePic}
                style={{ width: "6rem" }}
                className="rounded-circle mr-4 my-4"
                alt={user.name}
              />
              <span className="text-secondary text-capitalize h4 ">
                {user.name}
              </span>
            </div>
            {/* Gift Data : Image - information */}
            <div className="row">
              <div className="col-lg-5 text-center shadow p-0 my-4 ">
                <img src={gift.img} alt={gift.name} className="w-100 h-100" />
              </div>
              {/* Gift Information */}
              <div className="col-lg-6  offset-lg-1  py-2">
                <p className="h1 text-secondary my-2 text-capitalize text-center text-lg-left">
                  {gift.name}
                </p>
                <div className="row my-5">
                  {/* Actions */}
                  <div className="col-lg-3 col-sm-6 p-0">
                    <button
                      className="btn text-secondary text-capitalize w-100 border p-3"
                      style={{ fontSize: "1rem" }}
                    >
                      <i
                        className="fas fa-heart fa-2x w-100 mb-2"
                        aria-hidden="true"
                      />
                      like
                    </button>
                  </div>

                  <div className="col-lg-3 col-sm-6 p-0">
                    <button
                      className="btn text-secondary text-capitalize w-100 border p-3"
                      style={{ fontSize: "1rem" }}
                    >
                      <i
                        className="fas fa-star fa-2x  w-100 mb-2"
                        aria-hidden="true"
                      />
                      wish itl
                    </button>
                  </div>

                  <div className="col-lg-3 col-sm-6 p-0">
                    <button
                      className="btn text-secondary text-capitalize w-100 border p-3"
                      style={{ fontSize: "1rem" }}
                    >
                      <i
                        className="fas fa-lock fa-2x  w-100 mb-2"
                        aria-hidden="true"
                      />
                      reserve
                    </button>
                  </div>

                  <div className="col-lg-3 col-sm-6 p-0">
                    <button
                      className="btn text-secondary text-capitalize w-100 border p-3"
                      style={{ fontSize: "1rem" }}
                    >
                      <i
                        className="fas fa-comment-alt fa-2x  w-100 mb-2"
                        aria-hidden="true"
                      />
                      gift group
                    </button>
                  </div>
                </div>
                {/* USers who likes this Gift */}
                <p className="h3 text-secondary">
                  Liked by {gift.likes.length} people
                </p>
                <ul className="list-unstyled text-secondary">
                  {gift.likes.map(user => {
                    return (
                      <li
                        key={user.name}
                        style={{ listStyle: "none", fontSize: "1.4rem" }}
                        className="p-2 text-capitalize"
                      >
                        <img
                          src={user.pic}
                          alt={user.name}
                          className="rounded-circle"
                          style={{ width: "3rem" }}
                        />
                        <span className="ml-3">{user.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default GiftPage;
