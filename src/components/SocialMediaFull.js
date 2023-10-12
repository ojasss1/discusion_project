import React, { useState, useEffect } from 'react';
import Social from './Social';
import Taskbar from './Taskbar';
import Navbar2 from './Navbar2';

function App() {
  const [socialMediaData, setSocialMediaData] = useState([]);

  useEffect(() => {
    // Fetch data from your server
    fetch('/getpost')
      .then((response) => response.json())
      .then((data) => {
        // Update the socialMediaData state with the fetched data
        setSocialMediaData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to run the effect only once

  return (
    <>
    <Navbar2 head={"Show It"}/>


    <div className='bg-black text-white text-center p-9 pt-4'>
        <h1 className='text-2xl p-2 bg-white w-[10%] mx-auto text-black rounded-lg mb-7'>Add a post</h1>
        <form action="/addpost" method="POST" encType="multipart/form-data">
            <label htmlFor="fle">Image to be Uploaded : </label>
            <input type="file" name="file" accept="image/*" />

            <label htmlFor="email">Caption : </label>
            <input className='mr-10 text-black' type="text" name="email" />
            <label htmlFor="userid">Username : </label>
            <input className='mr-10 text-black' type="text" name="userid" />


            <button className="bg-white text-black m-3 p-2 rounded-xl"type="submit">Upload</button>
        </form>
    </div>

    <div>
      {socialMediaData.map((post, index) => (
        <Social
          key={index}
          image={post.url}
          description={post.email}
          username={post.userid}
        />
      ))}


    </div>

    <Taskbar />

    </>



  );
}

export default App;
