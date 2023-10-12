// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';

import Profile from './components/Profile';
import TodoList from './components/TodoList';
import SocialMediaFull from './components/SocialMediaFull';
import Taskbar from './components/Taskbar';

function App() {
  return (
    <Router>
      
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Profile" element={<Profile />} />
            <Route path="/Todolist" element={<TodoList />} />
            <Route path="/SocialMediaFull" element={<SocialMediaFull />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
