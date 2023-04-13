// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import { Link } from "react-router-dom";
// import { User } from "../models/user";
// import '../styles/Nav.css';

// interface INavProps {
//     currentUser: User | undefined,
//     setCurrentUser: (nextUser: User | undefined) => void
// }

// export default function Nav(props: INavProps) {

//     function logout() {
//         props.setCurrentUser(undefined);
//     }

//     return (
//         <Box sx={{ flexGrow: 1 }}>
//             <AppBar position="static">
//                 <Toolbar>
//                     <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//                         Reimbursements
//                     </Typography>
//                     <Button color="inherit"><Link className="link" to="/home">Home</Link></Button>
//                     {
//                         props.currentUser ?

//                             props.currentUser.manager?
//                             <>
//                                 <Button color="inherit"><Link className="link" to="/user">Add new User</Link></Button>

//                             </>
//                             :
//                             <>
//                             <Button color="inherit" onClick={logout}>Logout</Button>
//                             </>
//                             :


//                             <Button color="inherit"><Link className="link" to="/login">Login</Link></Button>
//                     }
//                 </Toolbar>
//             </AppBar>
//         </Box>
//     );
// }

import { Navigate } from "react-router-dom";
import { User } from "../models/user";

interface IDashboardProps {
    currentUser: User | undefined
}

export default function Nav(props: IDashboardProps) {
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