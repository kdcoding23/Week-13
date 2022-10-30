import React from "react";
import '../App.css'

// login form's layout
const LoginForm = () => {
  return (
    <div className="login-box container shadow-lg">
       <form className="p-3">
        <h3>Log In</h3>
        <br></br>
          <div>
             <input type="text" name="username" class="form-control" placeholder="Username" id="username"/>
          </div>
          <div>
              <input type="password" name="password" class="form-control" placeholder="Password" id="password"/>
          </div>
        <br></br>
        <button type="submit" class="btn btn-info">Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;