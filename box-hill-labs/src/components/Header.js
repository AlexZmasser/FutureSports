import React from "react";

function Header() {
  return (
    <div className="container">
      <img src={require('../images/Logo.png')} alt="" height="100" style={{ float: "left" }} />
      <h1>Welcome to Box Hill Labradors</h1>
    </div>
  );
}

export default Header;
