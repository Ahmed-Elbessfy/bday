import React from "react";

function Gift(props) {
  const {gift } = props
  return (
    <div className="col-sm-6 col-lg-3 my-4">
      <div className="card">
        <img className="card-img-top" src={gift.img} alt="gift avatar" />
        <div className="card-body">
          <p className="card-text">
            <span className="text-danger">{gift.giftName}</span>
            <img src={props.userPic} alt="user" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Gift;

// https://codeburst.io/getting-started-with-react-router-5c978f70df91
