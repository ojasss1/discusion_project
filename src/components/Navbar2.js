// src/App.js
import React, { useState } from 'react';


function App({head}){

    const [f1, f2] = useState(false);

    function Click (){
        f2(!f1);
        console.log("hello");
        g2(false);
    }


    const [g1, g2] = useState(false);

    function Click2 (){
        g2(!g1);
        console.log("hello");
        f2(false);
    }







    // function SHOW(){

    //     const p = document.getElementById('panel');
    //     const a = document.getElementById('menu');
    //     console.log(a);
    //     console.log(p);
    //     console.log("Hello Anmol")
    //     if(a.style.display != 'none'){
    //         a.style.display = 'none';
    //     }
    //     if(p.style.display != 'none'){
    //         p.style.display = 'none';
    //     }
    //     else{
    //         p.style.display = 'inline-block';
    //     }
    // }
    // function show2(){
    //     const a = document.getElementById('menu');
    //     const p = document.getElementById('panel');
    //     if(p.style.display != 'none'){
    //         p.style.display = 'none';
    //     }
    //     if(a.style.display != 'none'){
    //         a.style.display = 'none';
    //     }
    //     else{
    //         a.style.display = 'inline-block';
    //     }

    // }



  return (
    <div className="App">


                {g1&&
                    <div
                    id="panel"
                    className="mt-24 visible absolute right-0 z-50 w-1/6  ml-auto bg-white no-underline  text-black h-40 rounded-md space-y-2 shadow-xl shadow-yellow-200"
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
                </div>}
                {f1&& <div
                    id="menu"
                    className="mt-24 visible absolute right-0 z-50 text-black z-50 h-28 w-1/6 ml-auto bg-white no-underline rounded-md space-y-2 shadow-xl shadow-yellow-200"
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
                </div>}
        <nav className=" bg-black py-4 sticky">
            <div className="flex   pt-3">
                <div>
                <img
                    className="w-16 h-12 ml-12"
                    src="https://storage.googleapis.com/billinginv-78309.appspot.com/images/1.jpeg?GoogleAccessId=firebase-adminsdk-2nr5t%40billinginv-78309.iam.gserviceaccount.com&Expires=1893456000&Signature=xBRykpSUrn4weJ002AijDsvhxTaP5jiDCTMYjL6ea78j%2BfWaiFRyeVbhR9bn%2FBsaYSAv9ZDG7x4yB1GuLlDaCBMwYyjh3bxBUZQQ9vcQ4bgFf4y%2BL1AzPW9J59HezRl3MqnSimBAIIGApZ7D37kEWCYtNtwRwWwFD3OhkGeDpqHAQwUa4OJy%2FhhA%2FVp%2BzK1H0tCPae9gZSQLgXQoheQ%2BZ4ectX1lqOPuoDd4hK19CKQ2xkl%2Fui6KfHECIfbl%2Bk15QzPLikPTXN3qILcj3bP5zppo1EMXjNgHR1uGbOn%2FpDVmpCt2nnWNh%2F61%2FpMrF7Ip4JIL5U1qaoR1EVVxHqV2rA%3D%3D"
                    alt=""
                />
                </div>
                <div className="w-96 ml-auto">
                <div className="bg-white text-black mr-2 h-9 w-36 font-semibold justify-center flex text-xl rounded-lg text-center ml-[123%]" >
                    {head}
                </div>
                </div>
                <div className="ml-96 cursor-pointer" id="setting" onClick={Click}>
                <img
                    className="w-12 h-12"
                    src="https://www.logolynx.com/images/logolynx/f1/f1a93db4ef09474ba42368a1d2c82a70.png"
                    alt=""
                />
                </div>
                <div id="threedot" onClick={Click2}>
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
