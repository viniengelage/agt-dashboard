import React from "react";

const style = {
  padding: "10px 0",
  borderBottom: "4px solid transparent",
  display: "inline-block",
  cursor: "pointer",
  backgroundColor: "#F39200",
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  width: "300px",
  color: "#ffff",
  textAlign: "center",
  fontWeight: '500'
};

const activeStyle = {
  ...style,
  color: "#ffff",
  fontWeight: '500',
  backgroundColor:"#3F3D56",
  borderBottom: "4px solid #F39200"
};

const CustomTab = ({ children, isActive }) => (
  <span style={isActive ? activeStyle : style}>{children}</span>
);

export default CustomTab;
