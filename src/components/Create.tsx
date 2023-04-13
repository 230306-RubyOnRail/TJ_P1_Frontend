// import axios from 'axios';
// import React, { useState } from 'react';

// const Create = (props) => {
//     const {reloadList} = props
//     const [title, setTitle] = useState("")
//     const [description, setDescription] = useState("")
//     const [approved, setApproved] = useState(false)
//     const [user_id, setUserId] = useState(0);

//     const submitHandler = (e) => {
//         e.preventDefault()
//         axios.post(`http://localhost:3000/reimbursements/new`, {title, description, approved, user_id})
//             .then(res=>{
//                 setTitle("")
//                 setDescription("")
//                 setApproved(false)
//                 setUserId(user_id)

//                 reloadList()
//             })
//             .catch(err=>console.log(err))
//     }
//     return <form onSubmit={submitHandler}>
//     <p>
//         <label>Title: </label>
//         <input type = "text" name = "title" value ={title} onChange = {e=>setTitle(e.target.value)}/>
//     </p>
//     <p>
//         <label>Description: </label>
//         <input type = "text" name = "description" value ={description} onChange = {e=>setDescription(e.target.value)}/>
//     </p>

//     <button>Submit</button>
//     </form>
// };

// export default Create;


import { Navigate } from "react-router-dom";
import { User } from "../models/user";

interface IDashboardProps {
    currentUser: User | undefined
}

export default function Create(props: IDashboardProps) {
    return (
        props.currentUser ?
            <>
                Hello {props.currentUser?.username} from Dashboard!
            </>
            :
            <>
                <Navigate to="/login" />
            </>
    );
}