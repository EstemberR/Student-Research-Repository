import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../component-css/login.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
// Firebase
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/firebaseConfig';

const Login = ({ setUserRole }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Hardcoded admin credentials (for testing purposes)
    const adminEmail = "admin@gmail.com"; 
    const adminPassword = "admin";
    
    // Check if the input matches the hardcoded credentials
    if (email === adminEmail && password === adminPassword) {
      console.log('Admin login successful');
      setUserRole("admin"); // Set user role to admin
      navigate('/admin_dashboard'); // Navigate to admin dashboard
    } else {
      console.error('Invalid credentials');
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('User signed in: ', user);
      
      const userRole = "student"; 
      setUserRole(userRole); 
      if (userRole === "admin") {
        navigate('/admin_dashboard');
      } else if (userRole === "student") {
        navigate('/student_dashboard');
      } else if (userRole === "instructor") {
        navigate('/instructor_dashboard');
      }
    } catch (error) {
      console.error('Error during Google login:', error);
    }
  };

  return (
    <div className="login-container">
      {/* Left Side - Image Container */}
      <div className="col-md-6 d-none d-md-block login-image-container login-image">
        <div className="background"></div>
        <div className="overlay-image"></div>
      </div>

      {/* Right Side - Form */}
      <div className="login-form-container">
        {/* Title */}
        <div className="login-title-container text-center buksu-logo">
          <h1 className="login-title">Student Research Repository System</h1>
        </div>

        {/* User Login Section */}
        <div className="user-section text-center">
          <h2 className="login-label">User Login</h2>
          <button onClick={handleGoogleLogin} className="btn btn-google w-100 mb-3">
            <i className="fab fa-google me-2"></i>Login with Google
          </button>
          <p className="or-label">or</p>
        </div>

        <hr /> 

        {/* Admin Login Section */}
        <div className="admin-section text-center">
          <h2 className="login-label">Admin Login</h2>
          <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm bg-white">
            <div className="form-group">
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control mb-3"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-submit w-100 mb-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
