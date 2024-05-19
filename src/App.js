import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import StudentDashboard from './components/StudentDashboard';
import TeacherDashboard from './components/TeacherDashboard';
import PrincipalDashboard from './components/PrincipalDashboard';  
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/principal-dashboard" element={<PrincipalDashboard />} /> 
      </Routes>
    </Router>
  );
}
export default App;