import { SyntheticEvent, useState } from "react";
import { Navigate } from "react-router-dom";
import { Reimbursement } from "../models/reimbursement";
import { createUser } from "../remote/services/user-service";

interface IAddUser {
    getReimbursements: () => void | undefined;
}


export default function AddUser(props: any) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [errorMessage, setErrorMessage] = useState("");

    var response;


    let updateTitle = (e: SyntheticEvent) => {
        setTitle((e.target as HTMLInputElement).value); // e.target could be any element, cast as HTMLInput to retrieve the value
    }

    let updateDescription = (e: SyntheticEvent) => {
        setDescription((e.target as HTMLInputElement).value);
      };



      let submitHandler = async (e: SyntheticEvent) => {
        if (description && title) {
            setErrorMessage("");
            try {
                response = await createUser(title, description);

                if (response.status === 200) {
                    
                } else {
                    setErrorMessage("Something went wrong.");
                }
            } catch (err) {
                setErrorMessage("Unable to send request.");
                console.log(err);
            }
        } else {
            setErrorMessage("Either one is missing");
        }
    };        

    
    return (
        props.currentUser ? // if
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
                {errorMessage}
            </div>
        </>
    );
};


