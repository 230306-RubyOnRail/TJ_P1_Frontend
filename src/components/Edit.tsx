// import React, {SyntheticEvent, useEffect, useState} from 'react';
// import axios from "axios"
// import { deleteReimbursement } from "../remote/services/reimbursement-service";
// import { Navigate } from "react-router-dom";

// import {useParams} from "react-router-dom"
// import { User } from '../models/user';


// interface IEditProps{
//   currentUser: User | undefined,
//   setCurrentUser: (nextUser: User) => void
// }

// export default function Edit(props: IEditProps) {
//   const {id} = useParams()
//     const [title, setTitle] = useState("")
//     const [description, setDescription] = useState("")
//     const [approved, setApproved] = useState(false)
//     const [user_id, setUser_id] = useState(0)


//     let updateTitle = (e: SyntheticEvent) => {
//       setTitle((e.target as HTMLInputElement).value); // e.target could be any element, cast as HTMLInput to retrieve the value
//   }
  
//   let updateDescription = (e: SyntheticEvent) => {
//     setDescription((e.target as HTMLInputElement).value); // e.target could be any element, cast as HTMLInput to retrieve the value
// }
//     useEffect(()=>{
//         axios.get(`http://localhost:3000/reimbursements`)
//             .then(res=>{
//                 setTitle("")
//                 setDescription("")
//             })
//             .catch(err=>console.log(err))
//     },[])

//     const submitHandler =(e: { preventDefault: () => void; }) =>{
//         e.preventDefault()
//         axios.put(`http://localhost:8000/api/products/update/${id}`, {title, description, approved, user_id})
//         .then(res => {
//           if(res.data.error){
//               console.log(res.data.error.errors)
//           } else {
//               console.log("It worked!");
//           }
//       })
// }

//   return (
//       <div>
//       <h1> Edit form</h1>
//       <form onSubmit={submitHandler}>
//       <p>
//         <label> Title</label>
//         <input type="text" name="title" value={title} onChange={updateTitle} />
//       </p>
//       <p>
//         <label> Description</label>
//         <input type="text" name="description" value={description} onChange={updateDescription} />
//       </p>
//       <button> Submit</button>
//     </form>

//     </div>)
// };

import { Navigate } from "react-router-dom";
import { User } from "../models/user";

interface IDashboardProps {
    currentUser: User | undefined
}

export default function Edit(props: IDashboardProps) {
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
