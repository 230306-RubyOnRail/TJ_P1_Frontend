import { SyntheticEvent, useState } from "react";
import { User } from "../models/user";
import { Navigate } from "react-router-dom";
import { authenticate } from "../remote/services/session-service";

interface ILoginProps{
    currentUser: User | undefined,
    setCurrentUser: (nextUser: User) => void
}

export default function Login(props: ILoginProps) {

    // let email = '';
    // let password = '';
    // let errorMessage = '';


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // useState => [value, setter]; 

    let updateEmail = (e: SyntheticEvent) => {
        setEmail((e.target as HTMLInputElement).value); // e.target could be any element, cast as HTMLInput to retrieve the value
        // console.log(`email is: ${email}`);
    }

    let login = async () => {
        // console.log(`email: ${email} and password: ${password}`);
        if(email && password){
            setErrorMessage('');
            // console.log(`email: ${email} and password: ${password}`);

            try{
                // let response = await fetch('http://localhost:3000/auth/login', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type' : 'application/json'
                //     }, 
                //     body: JSON.stringify({email, password})
                // });

                let response = await authenticate({email, password});

                if(response.status === 201){
                    let data: User = response.data;
                    props.setCurrentUser(data);
                    sessionStorage.setItem('token', data.token);
                } else {
                    setErrorMessage('Credentials invalid.');
                }
            } catch (err){
               setErrorMessage('Unable to connect to the API');
            }
        } else {
           setErrorMessage('Invalid input for email/password.');
        }
    }

    return (
        props.currentUser ? // if
        <>
            <Navigate to="/"/>
        </>
        : // else
        <>
            <p>Login to To-do app!</p>
            <div>
                <input type="text" id="login-email" placeholder="Enter your email" onChange={updateEmail}/>
                <br /><br />
                <input type="text" id="login-password" placeholder="Enter your password" onChange={(e) => {
                    setPassword(e.target.value);
                    }}/>
                <br /><br />
                <button id="login-button" onClick={login}>Login</button>                
            </div>
            <div>
                {errorMessage}
            </div>
        </>
    );
}