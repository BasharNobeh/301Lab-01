import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1
          style={{
            color: "purple",
            fontSize: "100px",
            textshadow: "#FC0 1px 0 10px",
          }}
        >
          🤘 Gallery of Horns 🤘
        </h1>
      </div>
    );
  }
}

export default Header;
