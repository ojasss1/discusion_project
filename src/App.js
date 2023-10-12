// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import TodoList from './components/TodoList';
import SocialMediaFull from './components/SocialMediaFull';
import Taskbar from './components/Taskbar';


function App() {
  return (
    <>
      
        <Router>
        <div>
        
          <Routes>
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Todolist" element={<TodoList />} />
            <Route path="/SocialMediaFull" element={<SocialMediaFull />} />
          </Routes>
        </div>
        <Taskbar />
      </Router>
    
    </>
    
  );
}

export default App;
