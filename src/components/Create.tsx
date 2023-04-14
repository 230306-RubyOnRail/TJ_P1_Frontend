import { SyntheticEvent, useState } from "react";
import { Navigate } from "react-router-dom";
import { Reimbursement } from "../models/reimbursement";
import { createReimburse } from "../remote/services/reimbursement-service";
import { User } from "../models/user";

// interface ICreateReimbursement {
//     getReimbursements: () => void | undefined;
// }

interface ICreateProps {
    currentUser: User | undefined
}
export default function Create(props: ICreateProps) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [message, setMessage] = useState("");

    var response;


    let updateTitle = (e: SyntheticEvent) => {
        setTitle((e.target as HTMLInputElement).value); // e.target could be any element, cast as HTMLInput to retrieve the value
    }

    let updateDescription = (e: SyntheticEvent) => {
        setDescription((e.target as HTMLInputElement).value);
      };



      let submitHandler = async (e: SyntheticEvent) => {
        if (description && title) {
            setMessage("");
            try {
                response = await createReimburse(title, description);

                if (response.status === 200) {
                    setMessage("Reimbursement Created")
                } else {
                    setMessage("Reimbursement not Created.");
                }
            } catch (err) {
                setMessage("Error");
                console.log(err);
            }
        } else {
            setMessage("Not Logged In");
        }
    };        

    
    return (
 

        !props.currentUser ? // if
        <>

            <Navigate to="/"/>
        </>
        : // else
        <>
            <p>Create a Reimbursement!</p>
            <div>
                <input type="text" id="title" placeholder="title" onChange={updateTitle}/>
                <br /><br />
                <input type="text" id="description" placeholder="description" onChange={updateDescription}/>
                <br /><br />
                <button id="login-button" onClick={submitHandler}>Create</button>                
            </div>
            <div>
                {message}
            </div>
        </>
    );
};


