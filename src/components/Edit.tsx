import React, {SyntheticEvent, useEffect, useState} from 'react';
import axios from "axios"
import {updateReimburse } from "../remote/services/reimbursement-service";
import { Navigate } from "react-router-dom";

import {useParams} from "react-router-dom"
import { User } from '../models/user';


interface IEditProps{
  currentUser: User | undefined,
}

export default function Edit(props: IEditProps) {
  const {id} = useParams()
  if(id != null) var ids: number = +id;
    const [message, setMessage] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")


    let updateTitle = (e: SyntheticEvent) => {
      setTitle((e.target as HTMLInputElement).value); // e.target could be any element, cast as HTMLInput to retrieve the value
  }
  
  let updateDescription = (e: SyntheticEvent) => {
    setDescription((e.target as HTMLInputElement).value); // e.target could be any element, cast as HTMLInput to retrieve the value
}
   
    let updateReimbursement = async () => {
        console.log(ids)
        try {
            let response = await updateReimburse(title, description, ids)
            if (response.status === 200) {
                setMessage("Updated");
            } else {
                setMessage("Unable to update reimbursement.");
            }
        }
        catch(err){
            setMessage("error")
        }
    }
  return (
    !props.currentUser ? // if
    <>

        <Navigate to="/"/>
    </>
    :
      <div>
      <h1> Edit form</h1>
      <form onSubmit={updateReimbursement}>
      <p>
        <label> Title</label>
        <input type="text" name="title" value={title} onChange={updateTitle} />
      </p>
      <p>
        <label> Description</label>
        <input type="text" name="description" value={description} onChange={updateDescription} />
      </p>
      <button> Update</button>
    </form>
    <div>
                {message}
        </div>
    </div>
    
    )
};

