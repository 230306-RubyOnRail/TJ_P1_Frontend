import { Link, Navigate } from "react-router-dom";
import { User } from "../models/user";
import { useEffect, useState } from "react";
import { approveReimburse, deleteReimburse, denyReimburse } from "../remote/services/reimbursement-service";
import { Reimbursement } from "../models/reimbursement";
import axios from "axios";
import '../styles/Table.css';


interface IManagerDashboardProps {
    currentUser: User | undefined
}

export default function ManagerDashboard(props: IManagerDashboardProps) {
    
    const [reimbursements, setReimbursements] = useState<Reimbursement[] | undefined>(undefined);
    const [message, setMessage] = useState("");
    const [showButton, setShowButton] = useState(true);

    const toggleButton = () => {
      setShowButton(!showButton);
    };
    
    useEffect(() => {
        getReimbursements();
    }, [])


    let getReimbursements = async () => {
        let response = await fetch(`http://localhost:3000/reimbursements`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${props.currentUser?.token}`
            }
        })

        if (response.status === 200) {
            let result = await response.json();
            setMessage("");
            setReimbursements(result);
        } else {
            setMessage('can not grab reimbursements.');
        }

    }

 
    const deleteReimbursement = (id:number) => async () => {
        try {
            let response = await deleteReimburse(id);
            if (response.status === 200) {
                setMessage("deleted");
            } 
        } catch (err) {
            setMessage("not right user");
        }    };      
        const approveReimbursement = (id:number) => async () => {
            try {
                let response = await approveReimburse(id);
                if (response.status === 200) {
                    setMessage("approved");
                } 
            } catch (err) {
                setMessage("not right user");
            }    };     

            const denyReimbursement = (id:number) => async () => {
                try {
                    let response = await denyReimburse(id);
                    if (response.status === 200) {
                        setMessage("Denied Request ");
                    } 
                } catch (err) {
                    setMessage("not right user");
                }    };    
        

    return (
        props.currentUser ?
            <>
                <h1> Welcome Back, {props.currentUser.username}</h1> 
                <table className="styled-table">
                <tr>
                    <th>User</th>
                    <th>id</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Approved</th>
                    <th>Actions</th>
                </tr>
                
                {
                   reimbursements ? 
                    reimbursements.map((reimbursement) => {
                        return <tr>
                            <td>{reimbursement.user_id}</td>
                            <td>{reimbursement.id}</td>
                            <td>{reimbursement.title}</td>
                            <td>{reimbursement.description}</td>
                            <td>{reimbursement.approved + ""}</td>                            
                            <td><button onClick= {approveReimbursement(reimbursement.id)}>Approve </button>
                            |<button onClick= {denyReimbursement(reimbursement.id)}>Deny </button>
                             |<button onClick= {deleteReimbursement(reimbursement.id)}>Delete </button>
                             </td>
                        </tr>
                    }) : ""
                }
            </table>
            <div>
                {message}
            </div>
            </>
            :
            <>
                <Navigate to="/login" />
            </>
    );
}