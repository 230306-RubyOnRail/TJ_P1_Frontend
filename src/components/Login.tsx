import { SyntheticEvent, useState } from "react";
import { Navigate } from "react-router-dom";
import { User } from "../models/user";
import { authenticate } from "../remote/services/session-service";

interface ILoginProps{
    currentUser: User | undefined,
    setCurrentUser: (nextUser: User) => void
}

export default function Login(props: ILoginProps) {

    // let email = '';
    // let password = '';
    // let message = '';


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(''); // useState => [value, setter]; 

    let updateUsername = (e: SyntheticEvent) => {
        setUsername((e.target as HTMLInputElement).value); // e.target could be any element, cast as HTMLInput to retrieve the value
        // console.log(`email is: ${email}`);
    }

    let updatePassword = (e: SyntheticEvent) => {
        setPassword((e.target as HTMLInputElement).value);
      };

    let login = async () => {
        // console.log(`email: ${email} and password: ${password}`);
        if(username && password){
            setMessage('');
            // console.log(`email: ${email} and password: ${password}`);

            try{
                // let response = await fetch('http://localhost:3000/auth/login', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type' : 'application/json'
                //     }, 
                //     body: JSON.stringify({email, password})
                // });

                let response = await authenticate({username, password});

                if(response.status === 201){
                    let data: User = response.data;
                    props.setCurrentUser(data);
                    sessionStorage.setItem('token', data.token);
                } else {
                    setMessage('Credentials invalid.');
                }
            } catch (err){
               setMessage('Unable to connect to the API');
            }
        } else {
           setMessage('Invalid input for username/password.');
        }
    }

    return (
        props.currentUser ? // if
            props.currentUser.manager ?
        <>
            <Navigate to="/manager"/>
        </>
        :
        <>
            <Navigate to ="/"/>
        </>
        : // else
        <>
            <p>Login to Reimbursment app!</p>
            <div>
                <input type="text" id="login-username" placeholder="Enter your Username" onChange={updateUsername}/>
                <br /><br />
                <input type="text" id="login-password" placeholder="Enter your password" onChange={updatePassword}/>
                <br /><br />
                <button id="login-button" onClick={login}>Login</button>                
            </div>
            <div>
                {message}
            </div>
        </>
    );
}