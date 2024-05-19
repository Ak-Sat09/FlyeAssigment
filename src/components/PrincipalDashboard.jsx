import React, { useState } from 'react';
import axios from 'axios';

const RegradeAssignment = () => {
  const [assignmentId, setAssignmentId] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [assignment, setAssignment] = useState(null);


  const handleCheckAssignment = async () => {
    try {
      const response = await axios.get(`https://assigserver.onrender.com/assignments/${assignmentId}`);
      setAssignment(response.data.assignment);
      setError('');
    } catch (error) {
      setError(error.response?.data?.error || 'An error occurred');
      setAssignment(null);
    }
  };

  const handleRegradeAssignment = async () => {
    try {
      const response = await axios.post(`http://localhost:5000/api/assignments/${assignmentId}/regrade`);
      setMessage(response.data.message);
      setError('');
    } catch (error) {
      setError(error.response?.data?.error || 'An error occurred');
      setMessage('');
    }
  };

  return (
    <div className="container mt-5">
       <div className="container mt-5">
      <h2>Check Assignment</h2>
      <div className="form-group">
        <label htmlFor="assignmentId">Assignment ID:</label>
        <input type="text" className="form-control" id="assignmentId" value={assignmentId} onChange={(e) => setAssignmentId(e.target.value)} />
      </div>
      <button className="btn btn-primary" onClick={handleCheckAssignment}>Check Assignment</button>
      {assignment && <div className="alert alert-success mt-3">Assignment Content: {assignment.content}</div>}
      {error && <div className="alert alert-danger mt-3">{error}</div>}
    </div>
      <h2>Regrade Assignment</h2>
      <div className="form-group">
        <label htmlFor="assignmentId">Assignment ID:</label>
        <input type="text" className="form-control" id="assignmentId" value={assignmentId} onChange={(e) => setAssignmentId(e.target.value)} />
      </div>
      <button className="btn btn-primary" onClick={handleRegradeAssignment}>Regrade Assignment</button>
      {message && <div className="alert alert-success mt-3">{message}</div>}
      {error && <div className="alert alert-danger mt-3">{error}</div>}
    </div>
  );
};

export default RegradeAssignment;
