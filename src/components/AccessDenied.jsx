import React from "react";
import { Link } from "react-router-dom";
import "./AccessDenied.css";

const AccessDenied = () => {
  return (
    <div id="notfound">
      <div class="notfound">
        <div class="notfound-bg">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h1>oops!</h1>
        <h2>Error 403 : Access Denied</h2>
        <Link to="/">go login</Link>
      </div>
    </div>
  );
};

export default AccessDenied;
