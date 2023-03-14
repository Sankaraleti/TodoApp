import React, { useState, useEffect } from "react";

const UserProfile = ({ id, todoValues }) => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => setUserData(data));
  }, [id, userData]);
  return (
    <>
      <div className="UserProfile">
        <h2>User Details </h2>
        <div className="userContainer">
          <h3>
            ToDo Id : <span className="userText">{todoValues.id}</span>
          </h3>
          <h3>
            ToDo Title: <span className="userText">{todoValues.title}</span>
          </h3>
          <h3>
            User ID :<span className="userText">{userData.id}</span>{" "}
          </h3>
          <h3>
            Name :<span className="userText">{userData.name}</span>{" "}
          </h3>
          <h3>
            Email :<span className="userText">{userData.email}</span>
          </h3>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
