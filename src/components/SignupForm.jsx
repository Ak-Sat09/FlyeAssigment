// SignupForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: ''
  });
  const navigate = useNavigate()
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://assigserver.onrender.com/signup', formData); // Updated URL with port 5000
      console.log(response.data);
      
      console.log("Register Success");
      alert('Register successful!');
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="signup-container">
  <h2>Flye Assigment</h2>
  <form className="signup-form" onSubmit={handleSubmit}>
    <input type="text" name="name" placeholder="Name" onChange={handleChange} />
    <input type="email" name="email" placeholder="Email" onChange={handleChange} />
    <input type="password" name="password" placeholder="Password" onChange={handleChange} />
    <select name="role" onChange={handleChange}>
      <option value="">Select Role</option>
      <option value="student">Student</option>
      <option value="teacher">Teacher</option>
      <option value="principal">Principal</option>
    </select>
    <button type="submit">Signup</button>
  </form>
</div>

  );
};

export default SignupForm;
