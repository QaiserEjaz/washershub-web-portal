import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { LOCALSTORAGE_CONSTANTS } from "../../appConstants";
import NavigationHelper from "../../navigateHelper";


const Login = () => {
  const { goHome } = NavigationHelper();
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [redirectTo] = useState(null);

  // Add static credentials
  const validCredentials = {
    admin: {
      username: 'admin@washershub.com',
      password: 'admin123'
    },
    manager: {
      username: 'manager@washershub.com',
      password: 'manager123'
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    // Check static credentials
    const isValidAdmin = usernameOrEmail === validCredentials.admin.username &&
      password === validCredentials.admin.password;
    const isValidManager = usernameOrEmail === validCredentials.manager.username &&
      password === validCredentials.manager.password;

    if (isValidAdmin || isValidManager) {
      // Mock successful login
      localStorage.setItem(LOCALSTORAGE_CONSTANTS.AUTH_TOKEN, 'mock-token-123');
      localStorage.setItem(LOCALSTORAGE_CONSTANTS.USER_EMAIL, usernameOrEmail);
      goHome();
    } else {
      setError("Invalid credentials. Please try again.");
    }
    setLoading(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "usernameOrEmail") {
      setUsernameOrEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  if (redirectTo) {
    return <Navigate to={redirectTo} />;
  }

  return (
    <>
      <h2 style={{ color: '#3EA4F0' }}>
        <img
          src="/washershub-web-portal/favicon.svg"
          alt="WashersHub"
          height="90"
          className="d-inline-block"
        />
        Washershub
      </h2>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={handleSubmit}>
            <h3>Welcome Back!</h3>
            <div className="mb-3">
              <label>Email address or Username</label>
              <input
                type="text"
                name="usernameOrEmail"
                className="form-control"
                placeholder="Enter email or username"
                value={usernameOrEmail}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button" className="btn btn-light" onClick={toggleShowPassword}>
                  {showPassword ? (
                    <i className="fi fi-br-eye" />
                  ) : (
                    <i className="fi fi-bs-eye-crossed" />
                  )}
                </button>
              </div>
            </div>

            <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label ms-1" htmlFor="customCheck1" > Remember me </label>
              </div>
            </div>

            {error && <p style={{ color: "red" }}>{error}</p>}
            <div className="d-grid">
              <button type="submit" className="bluebtn" disabled={loading}>
                {loading ? "Logging in..." : "Log In"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
