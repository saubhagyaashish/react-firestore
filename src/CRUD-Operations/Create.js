import React, { useState } from 'react'
import firebase from '../firestore'

function Create() {
    const [newUser, setNewUser] = useState();
    const [UserEmail, setUserEmail] = useState();
    const onCreate =()=>{
        const db = firebase.firestore()
        db.collection('Users').add({name: newUser, email: UserEmail})
    }
    return (
        <div style={{margin:'2rem'}}>
            Name: <input value ={newUser} onChange={(e)=>setNewUser(e.target.value) }/>
            Email: <input value ={UserEmail} onChange={(e)=>setUserEmail(e.target.value) }/>
            <button onClick={onCreate}>Add User</button>
        </div>
    )
}

export default Create
