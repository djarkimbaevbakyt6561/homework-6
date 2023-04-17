import React from "react";
import "./Input.css";

export const Input = (props) => {
  return (
    <div className="input-container">
      <label style={{ marginLeft: props.marginLeft, marginTop: props.marginTop }} className="label" htmlFor={props.id}>
        {props.children}
      </label>
      <input
        className="input"
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        style={{ marginLeft: props.marginLeft, marginRight: props.marginRight }}
      />
    </div>
  );
};