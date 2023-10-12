import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the server)
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Signup</h2>
        <form onSubmit={handleSubmit}>
          {Object.keys(formData).map((field) => (
            <div className="mb-4" key={field}>
              <label htmlFor={field} className="block text-gray-700">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type={field === 'password' || field === 'confirmPassword' ? 'password' : 'text'}
                name={field}
                id={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>
          ))}
          <Link to="/Login">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Signup
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
