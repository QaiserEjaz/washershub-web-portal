import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LOCALSTORAGE_CONSTANTS } from '../../appConstants';

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get username from login credentials
  const getUserName = () => {
    // const token = localStorage.getItem(LOCALSTORAGE_CONSTANTS.AUTH_TOKEN);
    const email = localStorage.getItem(LOCALSTORAGE_CONSTANTS.USER_EMAIL);
    if (email && email.includes('manager')) {
      return 'Manager';
    }
    return 'Admin';
  };

  const handleLogout = () => {
    localStorage.removeItem('authenticated');
    localStorage.removeItem(LOCALSTORAGE_CONSTANTS.AUTH_TOKEN);
    navigate('/sign-in');
  };

  const getPageName = () => {
    const path = location.pathname;

    if (path.match(/^\/order\/[a-zA-Z0-9]+$/)) {
      return 'Order Details';
    } else if (path.match(/^\/categories\/[a-zA-Z0-9]+$/)) {
      return 'Categories';
    } else if (path.match(/^\/add-category\/[a-zA-Z0-9]+$/)) {
      return 'Add Category';
    } else if (path.match(/^\/vendor-info\/[a-zA-Z0-9]+$/)) {
      return 'Vendor Information';
    }

    switch (path) {
      case '/':
        return '';
      case '/total-vendors':
        return 'Total Vendors';
      case '/commission-management':
        return 'Commission Management';
      case '/total-orders':
        return 'Total Orders';
      case '/project-configuration':
        return 'Project Configuration';
      case '/countries':
        return 'Countries';
      case '/parent-categories':
        return 'Parent Categories';
      case '/add-parent-category':
        return 'Add Parent Category';
      default:
        return '';
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-primary sticky-top" style={{ background: '#3EA4F0' }}>
      <div className="container-fluid">
        <Link className="navbar-brand text-white d-flex align-items-center" to="/home">
          <img
            src="/washershub-web-portal/logo.png"
            alt="WashersHub"
            height="30"
            className="d-inline-block align-text-top me-2"
          />
          WashersHub
        </Link>

        <span className="nav-link active text-white ms-3 me-auto">
          {getPageName()}
        </span>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center me-3">
              <i className="fi fi-sr-user text-white me-2"></i>
              <span className="text-white d-none d-lg-block">{getUserName()}</span>
            </div>
            <button className="redbtn d-flex align-items-center justify-content-center" onClick={handleLogout}>
              <i className="fi fi-sr-sign-out ml-3"></i>
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;