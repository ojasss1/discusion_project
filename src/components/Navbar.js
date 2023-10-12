// src/App.js
import React from 'react';


function App({head}){


    
    
  return (
    <div className="App">


                <div
                    id="panel"
                    className="invisible absolute right-0 z-50 w-1/6  ml-auto bg-white no-underline  text-black h-40 rounded-md space-y-2 shadow-xl shadow-yellow-200"
                >
                    <li className="flex justify-center hover:bg-gray-300">
                    <a className="" href="">
                        REPORT A FRIEND
                    </a>
                    </li>
                    <li className="flex justify-center hover:bg-gray-300">
                    <a href="">REPORT A BUG</a>
                    </li>
                    <li className="flex justify-center hover:bg-gray-300">
                    <a href="">ABOUT</a>
                    </li>
                    <li className="flex justify-center hover:bg-gray-300">
                    <a href="">HELP CENTRE</a>
                    </li>
                    <li className="flex justify-center hover:bg-gray-300">
                    <a href="">TPL COIN SYSTEM</a>
                    </li>
                </div>
                <div
                    id="menu"
                    className="invisible absolute right-0 z-50 text-black z-50 h-28 w-1/6 ml-auto bg-white no-underline rounded-md space-y-2 shadow-xl shadow-yellow-200"
                >
                    <li className="flex justify-center hover:bg-gray-300">
                    <a href="">MY PROFILE</a>
                    </li>
                    <li className="flex justify-center hover:bg-gray-300">
                    <a href="">MY STREAK</a>
                    </li>
                    <li className="flex justify-center hover:bg-gray-300">
                    <a href="">LOG OUT</a>
                    </li>
                </div>
        <nav className=" bg-black py-4 sticky">
            <div className="flex  ">
                <div>
                <img
                    className="w-16 h-12"
                    src="https://th.bing.com/th/id/OIP.FpBTdmS425XMYJ6kJH-fVAHaHd?pid=ImgDet&rs=1"
                    alt=""
                />
                </div>
                <div className="w-96 ml-auto">
                <div className="bg-white text-black mr-48 h-9 w-56 font-semibold justify-center flex text-xl rounded-lg">
                    {head}
                </div>
                </div>
                <div className="ml-96 cursor-pointer" id="setting" >
                <img
                    className="w-12 h-12"
                    src="https://www.logolynx.com/images/logolynx/f1/f1a93db4ef09474ba42368a1d2c82a70.png"
                    alt=""
                />
                </div>
                <div id="threedot" >
                <img
                    className="w-12 h-12 cursor-pointer"
                    src="https://icon-library.com/images/navigation-bar-icon/navigation-bar-icon-18.jpg"
                    alt=""
                />
                </div>
            </div>
        </nav>

    </div>
  );
}

export default App;
