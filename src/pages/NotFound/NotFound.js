import React from "react";
import { NavLink } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center py-5 mt-5" style={{backgroundColor:"#2B3856"}}
    >
      <div className="text-center my-5 py-5">
        <h1 style={{ fontSize: "100px", color: "red" }}>404</h1>
        <h4 className="text-white">OPPS! PAGE NOT FOUND</h4>
        <p className="text-muted">
          Sorry, the page you're looking for doesn't exist. you can return to
          home and look for another.
        </p>
        <NavLink to="/home">
          <button className="btn btn-primary " style={{backgroundColor:"indigo"}}>Return to Home</button>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
