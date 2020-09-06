import React from "react";
const input = (props) => {
  let inputElement = null;
  switch (props.inputtype) {
    case "input":
      inputElement = <input className="input-element" {...props} />;
      break;
    case "textArea":
      inputElement = <textarea className="input-element" {...props} />;
      break;
    case "checkBox":
      inputElement = <input className="checkbox-element" {...props} />;
      break;
    default:
      inputElement = <input className="input-element" {...props} />;
  }
  return (
    <div className="Input">
      <label className="Label">{props.label}</label>
      {inputElement}
      <span className="Span">{props.checkboxlabel}</span>
    </div>
  );
};
export default input;
