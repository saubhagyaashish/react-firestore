import React, { useState } from "react";
import firebase from '../firestore'


function Update({ userData }) {
  const [name, setName] = React.useState();
  const [Email, setEmail] = useState()
  const onUpdate = () => {
    const db = firebase.firestore();
    db.collection("Users").doc(userData.id).set({ ...userData, email:Email,name:name });
    
  };

  return (
    <div>
        Name : <input onChange={e=>setName(e.target.value)} />
        Email : <input onChange={e=>setEmail(e.target.value)} />
      <button onClick={onUpdate}>Update</button>
    </div>
  );
}

export default Update;
