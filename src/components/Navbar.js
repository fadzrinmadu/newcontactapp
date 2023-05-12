import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="col-md-12 bg-dark py-2">
      <div className="container-fluid">
        <nav className="navbar bg-dark navbar-dark">
          <Link to={"/"} className="navbar-brand ml-5">
            New ContactApp
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
