import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate, useLocation } from "react-router-dom";

function EditContact({ updateContactHandler }) {
  const location = useLocation();
  const data = location.state?.data;

  const [id, setId] = useState(data.id);
  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);

  const navigate = useNavigate();

  const update = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    updateContactHandler(id, name, email);
    setName("");
    setEmail("");
    navigate("/");
  };

  return (
    <div className="ui main">
      <h2>Edit Contact</h2>
      <form className="ui form">
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <button className="ui button blue" onClick={update}>
          Update
        </button>
      </form>
    </div>
  );
}

export default EditContact;
