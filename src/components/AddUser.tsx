import { SyntheticEvent, useState } from "react";
import { Navigate } from "react-router-dom";
import { Reimbursement } from "../models/reimbursement";
import { createUser } from "../remote/services/user-service";

interface IAddUser {
    getReimbursements: () => void | undefined;
}


export default function AddUser(props: any) {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("");

    var response;


    let updateUser = (e: SyntheticEvent) => {
        setUser((e.target as HTMLInputElement).value); // e.target could be any element, cast as HTMLInput to retrieve the value
    }

    let updatePassword = (e: SyntheticEvent) => {
        setPassword((e.target as HTMLInputElement).value);
      };



      let submitHandler = async (e: SyntheticEvent) => {
        if (password && user) {
            try {
                response = await createUser(user, password);

                if (response.status === 201) {
                    setMessage("User Created")
                } else {
                    setMessage("User Not Created");
                }
            } catch (err) {
                setMessage("Error");
                console.log(err);
            }
        } else {
            setMessage("not logged in");
        }
    };        

    
    return (
        !props.currentUser ? // if
        <>
            <Navigate to="/"/>
        </>
        : // else
        <>
            <p>Add a User!</p>
            <div>
                <input type="text" id="user" placeholder="user" onChange={updateUser}/>
                <br /><br />
                <input type="text" id="password" placeholder="password" onChange={updatePassword}/>
                <br /><br />
                <button id="login-button" onClick={submitHandler}>Create</button>                
            </div>
            <div>
                {message}
            </div>
        </>
    );
};


