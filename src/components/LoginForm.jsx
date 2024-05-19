import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://assigserver.onrender.com/login', formData);
      const { role } = response.data;

      if (role === 'student') {
        navigate('/student-dashboard');
      } else if (role === 'teacher') {
        navigate('/teacher-dashboard');
      } else if (role === 'principal') {
        navigate('/principal-dashboard');
      }
    } catch (error) {
      setError(error.response?.data?.error || 'An error occurred');
      console.error('Login error:', error);
    }
  };

  return ( 
    <div className="login-container">
  <h2>Login</h2>
  <form className="login-form" onSubmit={handleSubmit}>
    <input type="email" name="email" placeholder="Email" onChange={handleChange} />
    <input type="password" name="password" placeholder="Password" onChange={handleChange} />
    <button type="submit">Login</button>
  </form>
  {error && <div className="alert alert-danger mt-3">{error}</div>}
</div>

  );
};

export default LoginForm;
