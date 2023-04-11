import { Navigate } from "react-router-dom";
import { User } from "../models/user";

interface IDashboardProps {
    currentUser: User | undefined
}

export default function Dashboard(props: IDashboardProps) {
    return (
        props.currentUser ?
            <>
                Hello {props.currentUser?.name} from Dashboard!
            </>
            :
            <>
                <Navigate to="/login" />
            </>
    );
}