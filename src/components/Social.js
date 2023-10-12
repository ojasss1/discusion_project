// src/components/Todo.js
import React, { useState } from 'react';
import Navbar2 from './Navbar2.js';
import Taskbar from './Taskbar.js';
import { Link } from 'react-router-dom';
import TodoList from './TodoList.js'

const Social = ({image , description, username}) => {
  
    

  return (
    <div className=''>
        
        

        <>


        
    <div className="bg-black shadow-lg rounded-lg overflow-hidden m-10 p-5 w-[30%] mx-auto">
        <div className="w-full h-full rounded-lg bg-white mb-11">

                <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                @{username}
                </span>
            </div>
        </div>
      <img className="w-[70%] rounded-lg mx-auto h-44 mb-2" src={image} alt="Post"  />
      <div className="px-6 py-4">
        <p className="text-white text-base text-center" >{description}</p>
      </div>
      
      <Link to="./TodoList.js">
      <div className="px-6 py-2 rounded-xl w-[40%] mx-auto bg-white hover:px-7 hover:py-3 duration-500 cursor-pointer">
        <p className="text-black text-base text-center" >Comment</p>
      </div>
      </Link>

    </div>





    
  

    <Taskbar />


</>


        <Taskbar />
    </div>
  );
};

export default Social;
