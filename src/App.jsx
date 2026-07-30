import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import DashboardLayout from './pages/DashboardLayout';
import Interview from './pages/Interview';
import Exam from './pages/Exam';
import Resume from './pages/Resume';
import ProtectedRoute from './components/ProtectedRoute'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
              <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="/dashboard/interview" replace />} />
        <Route path="interview" element={<Interview />} />
        <Route path="exam" element={<Exam />} />
        <Route path="resume" element={<Resume />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
