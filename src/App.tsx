import { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { User } from './models/user';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import ToDos from './components/ToDos';

function App() {

  const [principal, setPrincipal] = useState<User>();

  return (
    <BrowserRouter>
      <Nav currentUser={principal} setCurrentUser={setPrincipal} />
      <Routes>
        <Route path="/todos" element={<ToDos currentUser={principal} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Dashboard currentUser={principal} />} />
        <Route path="/login" element={<Login currentUser={principal} setCurrentUser={setPrincipal} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;