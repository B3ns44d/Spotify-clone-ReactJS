import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <a href={loginUrl}>LOGIN TO SPOTIFY</a>
      <p className="appissues">If you encounter any issues with the app please <a href="https://www.linkedin.com/in/b3ns44d/">contact</a> me to fix it I will be grateful</p>
    </div>
  );
}

export default Login;