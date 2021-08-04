import React from "react";

function Header(props) {
  return (
    <div>
      <h1>{props.text}</h1>
      <h2>Your todo list:</h2>
    </div>
  );
}

export default Header;
