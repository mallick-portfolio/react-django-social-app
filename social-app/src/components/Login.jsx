import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="container">
      <div class="content-section">
        <fieldset class="form-group">
          <legend class="border-bottom mb-4">Log In</legend>
          <div>
            <div class="form-group">
              <label>Username</label>
              <input type="text" class="form-control" placeholder="Username" />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="Password"
              />
            </div>
          </div>
        </fieldset>
        <div class="form-group">
          <p class="btn btn-outline-info">Login</p>
        </div>
        <div class="border-top pt-3">
          <small class="text-muted">
            Need An Account?
            <Link class="ml-2" to="/register/">
              SignIn Up Now
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Login;
