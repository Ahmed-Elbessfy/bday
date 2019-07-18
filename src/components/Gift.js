import React from "react";
import { Link } from "react-router-dom";

function Gift(props) {
  {
    /*extract gift and user data passed from Gifts component and stored in Gift component props*/
  }
  const { gift, user } = props;
  return (
    <div className="col-sm-6 col-lg-4 my-4">
      {/* create a link to the GiftPae component including Gift image, gift name and user pic */}
      <Link className="card" to={`/gift/${gift.id}`}>
        <img className="card-img-top" src={gift.img} alt={gift.name} />
        <div className="card-body">
          <p
            className="card-text"
            style={{ display: "flex", alignItems: "center" }}
          >
            <span
              className="text-danger font-weight-bold"
              style={{ fontSize: "1.2rem" }}
            >
              {gift.name}
            </span>
            <img
              src={user.profilePic}
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
