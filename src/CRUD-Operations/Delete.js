import React from "react";
import firebase from "../firestore";

function Delete({ userData }) {
  const onDelete = () => {
    const db = firebase.firestore();
    db.collection("Users").doc(userData.id).delete();
  };
  return (
    <div>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Delete;
