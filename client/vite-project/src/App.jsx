import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from './components/Login';
import StudentDashboard from './components/Student/Dashboard';
import MyResearch from './components/Student/MyResearch';
import FAQ from './components/Student/FAQ';
import Notification from './components/Student/Notification';
import Repository from './components/Student/ResearchRepository';
import Profile from './components/Student/UserProfile';
import ResearchDetails from './components/Student/ResearchDetail';
import ManageMember from './components/Student/ManageMember';

import InstructorDashboard from './components/Instructor/instructor_dashboard';
import InstructorNotification from './components/Instructor/instructor_notification';
import InstructorProfile from './components/Instructor/instructor_profile';
import InstructorRequest from './components/Instructor/instructor_request';
import InstructorStudents from './components/Instructor/instructor_students';
import InstructorSubmissions from './components/Instructor/instructor_submissions';

import AdminDashboard from './components/Admin/admin_dashboard';
import AdminAccounts from './components/Admin/admin_accounts';
import AdminActivity from './components/Admin/admin_acitivty';
import AdminReports from './components/Admin/admin_reports';
import ProtectedRoute from './components/ProtectedRoute';


{/*LANDING PAGE*/ }
import LandingPage from './components/landingPage';
import OTPVerification from './components/OTPVerification';

{/*SUPER ADMIN*/}
import SuperAdminAccounts from './components/SuperAdmin/superAdmin_accounts';
import SuperAdminActivity from './components/SuperAdmin/superAdmin_acitivty';
import SuperAdminReports from './components/SuperAdmin/superAdmin_reports';
import SuperAdminDashboard from './components/SuperAdmin/superAdmin_dashboard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
          {/* Other routes */}
          <Route path="/otp-verification" element={<OTPVerification />} />

        {/* Student Protected Routes */}
        <Route element={<ProtectedRoute allowedRole="student" />}>
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/student/repository" element={<Repository />} />
          <Route path="/student/profile" element={<Profile />} />
          <Route path="/student/myResearch" element={<MyResearch />} />
          <Route path="/student/FAQ" element={<FAQ />} />
          <Route path="/student/project-members" element={<ManageMember />} />
          <Route path="/student/notifications" element={<Notification />} />
          <Route path="/student/logout" element={<Navigate to="/" replace />} />
          <Route path="/repository/:id" element={<ResearchDetails />} />
        </Route>

        {/* Instructor Protected Routes */}
        <Route element={<ProtectedRoute allowedRole="instructor" />}>
          <Route path="/instructor/instructor_dashboard" element={<InstructorDashboard />} />
          <Route path="/instructor/submissions" element={<InstructorSubmissions />} />
          <Route path="/instructor/profile" element={<InstructorProfile />} />
          <Route path="/instructor/students" element={<InstructorStudents />} />
          <Route path="/instructor/requesting" element={<InstructorRequest />} />
          <Route path="/instructor/notifications" element={<InstructorNotification />} />
          <Route path="/instructor/logout" element={<Navigate to="/" replace />} />
        </Route>

          {/* Admin Protected Routes */}
        <Route element={<ProtectedRoute allowedRole="admin" />}>
          <Route path="/admin/admin_dashboard" element={<AdminDashboard />} />
          <Route path="/admin/accounts" element={<AdminAccounts />} />
          <Route path="/admin/activity" element={<AdminActivity />} />
          <Route path="/admin/report" element={<AdminReports />} />
          <Route path="/admin/logout" element={<Navigate to="/" replace />} />
        </Route>

      {/*Super Admin Protected Routes*/}
      <Route element={<ProtectedRoute allowedRole="superadmin" />}>
          <Route path="/superadmin/superAdmin_dashboard" element={<SuperAdminDashboard />} />
          <Route path="/superadmin/superAdmin_accounts" element={<SuperAdminAccounts />} />
          <Route path="/superadmin/superAdmin_activity" element={<SuperAdminActivity />} />
          <Route path="/superadmin/superAdmin_reports" element={<SuperAdminReports />} />
          <Route path="/superadmin/logout" element={<Navigate to="/" replace />} />
        </Route>

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;