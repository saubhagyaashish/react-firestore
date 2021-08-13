import React, { useEffect, useState } from "react";
import firebase from "../firestore";
import Delete from "./Delete";
import Update from "./Update";

function Retrieve() {
  const [Users, setUsers] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("Users").get();
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);
  return (
    <div>
      {Users.map((userData) => (
        <ul key={userData.name} style={{ listStyle: "none", display: "flex" }}>
          <li key={userData.name} style={{ borderBlockStyle: "solid"}}>
            Name : {userData.name} <br />
            Email : {userData.email}
          </li>

          <div style={{ display: "flex", margin: "1rem" }}>
            <Update userData={userData} />
            <Delete userData={userData} />
          </div>
        </ul>
      ))}
    </div>
  );
}

export default Retrieve;
