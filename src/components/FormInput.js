import React from "react";
import "./FormInput.css";

export default function FormInput(props) {
  switch (props.inputType) {
    case "inputbox":
      return (
        <input
          maxLength={20}
          minLength={10}
          required
          pattern="^[A-Z]$"
          inputMode={""}
          type="text"
          {...props}
        />
      );
    case "radio":
      return <input type="radio" required {...props}  />;

    case "email":
      return <input type="email" required {...props} />;

    case "checkbox":
      return <input type="checkbox" {...props} />;
    case "number":
      return<input pattern="^[7-9]{1}[0-9]{9}$" type="number" {...props} />;

    case "button":
      return <input type="button" {...props} />;

    default:
      return "";
  }
}
