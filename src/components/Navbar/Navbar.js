import React from "react";

const Navbar = props => (
    <nav className="navbar navbar-default">
    <div className="container-fluid">
      
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
          aria-expanded="false">
        </button>
        <a className="navbar-brand"><strong>Clicky Game</strong></a>
      </div>
      
      <div className="navbar-header navbar-right">
        <a className="navbar-brand"><strong>Score:{props.imageClicked}</strong></a>
        
      </div>
    </div>
  </nav>
);


export default Navbar;