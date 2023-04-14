import { Navigate } from "react-router-dom";
import { User } from "../models/user";
import {authenticate} from "../remote/services/session-service";
import {getReimbursements} from "../remote/services/reimbursement-service";
import {Reimbursement} from "../models/reimbursement";
import {useState} from "react";

interface IDashboardProps {
    currentUser: User | undefined
    setCurrentUser: (nextUser: User) => void
    setView(data: Reimbursement): void;
}

interface IProps {
    view: Reimbursement | undefined
}

export default function Dashboard(props: IDashboardProps) {
    let view = async () => {
        try{
            let response = await getReimbursements();
            if(response.status === 201){
                let data: Reimbursement = response.data;
                props.setView(data);
            } else {

            }
        } catch (err){
        }
    }
    return (
        props.currentUser ?
            <>
                Hello {props.currentUser.username}  from Dashboard!
                <table>
                    <thead>
                    <tr>
                        <td> title</td>
                        <td>description</td>
                        <td> </td>
                        <td></td>
                        <td></td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
            </>
            :
            <>
                <Navigate to="/login" />
            </>
    );
}