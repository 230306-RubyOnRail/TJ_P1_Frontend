import { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { User } from './models/user';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Reimbursement} from "./models/reimbursement";
// import Nav from './components/Nav';
import Nav from './components/Nav';
import Create from './components/Create'
import AddUser from './components/AddUser'

// import Edit from './components/Edit';


function App() {

  const [principal, setPrincipal] = useState<User>();
    const [view, setView] = useState<Reimbursement>();

  return (
    <BrowserRouter>
      <Nav currentUser={principal} setCurrentUser={setPrincipal} />
      <Routes>
        <Route path="/" element={<Dashboard currentUser={principal} setCurrentUser={setPrincipal} setView={setView} />} />
        <Route path="/login" element={<Login currentUser={principal} setCurrentUser={setPrincipal} />} />
        <Route path="/create" element={<Create currentUser={principal} />} />
        <Route path="/addUser" element={<AddUser currentUser={principal} />} />


        {/* <Route path="/edit" element={<Edit currentUser={principal} setCurrentUser={setPrincipal} />} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;