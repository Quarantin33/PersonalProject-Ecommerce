import React from "react";
import { Link } from "react-router-dom";
import "./AccessDenied.css";

const AccessDenied = () => {
  return (
    <div id="notfound">
      <div className="notfound">
        <h1>oops!</h1>
        <h2>Error 403 : Access Denied</h2>
        <Link to="/final-excercise/">go login</Link>
      </div>
    </div>
  );
};

export default AccessDenied;
