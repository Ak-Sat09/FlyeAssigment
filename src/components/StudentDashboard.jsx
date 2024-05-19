 import React, { useState } from 'react';
import axios from 'axios';

const EditAssignmentForm = () => {
  const [assignmentId, setAssignmentId] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleEditAssignment = async () => {
    try {
      const response = await axios.put(`https://assigserver.onrender.com/assignments/${assignmentId}/edit`, { content });
      setMessage(response.data.message);
      setError('');
    } catch (error) {
      setError(error.response?.data?.error || 'An error occurred');
      setMessage('');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Edit Assignment</h2>
      <div className="form-group">
        <label htmlFor="assignmentId">Assignment ID:</label>
        <input 
          type="text" 
          className="form-control" 
          id="assignmentId" 
          value={assignmentId} 
          onChange={(e) => setAssignmentId(e.target.value)} 
        />
      </div>
      <div className="form-group">
        <label htmlFor="content">Content:</label>
        <textarea 
          className="form-control" 
          id="content" 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
        />
      </div>
      <button className="btn btn-primary" onClick={handleEditAssignment}>Edit Assignment</button>
      {message && <div className="alert alert-success mt-3">{message}</div>}
      {error && <div className="alert alert-danger mt-3">{error}</div>}
    </div>
  );
};

export default EditAssignmentForm;
