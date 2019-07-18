import React from "react";
import { Link } from "react-router-dom";

function Gift(props) {
  const { gift } = props;
  return (
    <div className="col-sm-6 col-lg-3 my-4">
      <Link className="card" to={`/gift/${gift.id}`}>
        <img className="card-img-top" src={gift.img} alt="gift avatar" />
        <div className="card-body">
          <p
            className="card-text"
            style={{ display: "flex", alignItems: "center" }}
          >
            <span
              className="text-danger font-weight-bold"
              style={{ fontSize: "1.5rem" }}
            >
              {gift.name}
            </span>
            <img
              src={props.userPic}
              alt="user"
              style={{ width: "3rem", marginLeft: "auto" }}
              className="rounded-circle"
            />
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Gift;

// https://codeburst.io/getting-started-with-react-router-5c978f70df91
