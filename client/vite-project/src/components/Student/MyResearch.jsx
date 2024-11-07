import casLogo from '../../assets/cas-logo.jpg'; 
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Dashboard.css';


const MyResearch = () => {
  const location = useLocation();
  const [userName, setUserName] = useState('');
  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
        setUserName(storedName);
    }
}, []);

  return (
    <div className="dashboard-container d-flex">
      {/* Sidebar (Occupies full height) */}
      <nav className="col-2 sidebar">
        <h3 className="text-center">STUDENT RESEARCH REPOSITORY SYSTEM</h3>
        <ul className="nav flex-column">
          <li className="nav-item">
          <Link className={`nav-link ${location.pathname === '/student/dashboard' ? 'active' : ''}`} to="/student/dashboard">
              <i className="fas fa-tachometer-alt search zx"></i> Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === '/student/repository' ? 'active' : ''}`} to="/student/repository">
              <i className="fas fa-book search zx"></i> Research Repository
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === '/student/profile' ? 'active' : ''}`} to="/student/profile">
              <i className="fas fa-user search zx"></i> User Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === '/student/myResearch' ? 'active' : ''}`} to="/student/myResearch">
              <i className="fas fa-folder-open search zx"></i> My Research
            </Link>
          </li>
          <li className="nav-item">
          <Link className={`nav-link ${location.pathname === '/student/FAQ' ? 'active' : ''}`} to="/student/FAQ">
          <i className="fas fa-robot search zx"></i> FAQ
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === '/student/notifications' ? 'active' : ''}`} to="/student/notifications">
              <i className="fas fa-bell search zx"></i> Notifications
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === '/student/logout' ? 'active' : ''}`} to="/student/logout">
              <i className="fas fa-sign-out-alt search zx"></i> Logout
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Section (Top logo row + Main content) */}
      <div className="main-section col-10 d-flex flex-column">
        {/* Top Row (Logo and Right Empty Space) */}
        <div className="top-row d-flex align-items-center">
          <header className="col-8 d-flex justify-content-center align-items-center">
            <img src={casLogo} alt="CAS Logo" className="cas-logo" />
          </header>
          <div className="col-2 user-info ms-auto d-flex align-items-center">
          <img
          src={'https://via.placeholder.com/150'} //STATIC NALANG
          alt="Profile"
          className="img-fluid rounded-circle"
          style={{ width: '50PX', height: '50px' }}
        />
            <div className="user-details">
              <p className="user-name">{userName}</p>
              <p className="user-role">Student</p>
            </div>
          </div>
        </div>
{/*---------------------------------END OF HEADER TEMPLATE----------------------------------------------------*/}
        {/* Main Content Area */}
        <main className="main-content">
        </main>
      </div>
    </div>
  );
};

export default MyResearch;
