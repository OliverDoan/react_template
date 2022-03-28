import React from "react";
import { Link } from "react-router-dom";
import user from "../assets/images/user.jpg";
import { useLocation } from "react-router-dom";
const ContactDetail = (props) => {
  const location = useLocation();
  //   const { name, email } = props.location.state.contact;
  //   console.log(props, " props");
  //   console.log(location, " useLocation Hook");
  const data = location.state?.data;

  console.log(props);
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{data.name}</div>
          <div className="description">{data.email}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            Back to Contact List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;
