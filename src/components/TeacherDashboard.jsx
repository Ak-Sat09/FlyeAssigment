import React, { useState } from 'react';
import axios from 'axios';

const CheckAssignment = () => {
  const [assignmentId, setAssignmentId] = useState('');
  const [assignment, setAssignment] = useState(null);
  const [error, setError] = useState('');
  const [grade, setGrade] = useState('');
  const [message, setMessage] = useState('');

  
  const handleGradeAssignment = async () => {
    try {
      const response = await axios.post(`https://assigserver.onrender.com/assignments/${assignmentId}/grade`, { grade });
      setMessage(response.data.message);
      setError('');
    } catch (error) {
      setError(error.response?.data?.error || 'An error occurred');
      setMessage('');
    }
  };


  const handleCheckAssignment = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/assignments/${assignmentId}`);
      setAssignment(response.data.assignment);
      setError('');
    } catch (error) {
      setError(error.response?.data?.error || 'An error occurred');
      setAssignment(null);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Check Assignment</h2>
      <div className="form-group">
        <label htmlFor="assignmentId">Assignment ID:</label>
        <input type="text" className="form-control" id="assignmentId" value={assignmentId} onChange={(e) => setAssignmentId(e.target.value)} />
      </div>
      <button className="btn btn-primary" onClick={handleCheckAssignment}>Check Assignment</button>
      {assignment && <div className="alert alert-success mt-3">Assignment Content: {assignment.content}</div>}
      {error && <div className="alert alert-danger mt-3">{error}</div>}
      <div className="container mt-5">
      <h2>Grade Assignment</h2>
      <div className="form-group">
        <label htmlFor="assignmentId">Assignment ID:</label>
        <input type="text" className="form-control" id="assignmentId" value={assignmentId} onChange={(e) => setAssignmentId(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="grade">Grade:</label>
        <input type="text" className="form-control" id="grade" value={grade} onChange={(e) => setGrade(e.target.value)} />
      </div>
      <button className="btn btn-primary" onClick={handleGradeAssignment}>Grade Assignment</button>
      {message && <div className="alert alert-success mt-3">{message}</div>}
      {error && <div className="alert alert-danger mt-3">{error}</div>}
    </div>
    </div>
    


    
  );
};

export default CheckAssignment;
