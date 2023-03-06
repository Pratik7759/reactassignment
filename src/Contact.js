import React from "react";
// import Button from "./components/button/Button.css";
import FormInput from "./components/FormInput";
import "./Contact.css";

export default function Contact() {
  let inputs = [
    {
      name: "firstname",
      placeholder: "enter your first name",
      type: "text",
      inputType: "inputbox",
      className: "form-field",
    },
    {
      name: "lastname",
      placeholder: "enter your last name",
      type: "text",
      inputType: "inputbox",
      className: "form-field",
    },
    {
      name: "email",
      placeholder: "enter your email",
      type: "email",
      inputType: "email",
      className: "form-field",
    },
    {
      name: "phone",
      placeholder: "enter your contact number",
      type: "number",
      inputType: "number",
      className: "form-field",
    },
    {
      name: "gender",
      inputType: "radio",
      className: "form-field-radio",
    },
    {
      name: "gender",
      inputType: "radio",
      className: "form-field-radio",
    },
    // {
    //   name: "gender",
    //   inputType: "checkbox",
    //   className: "form-field",
    // },
    {
      name: "button",
      inputType: "button",
      className: "form-field",
      value: "Submit",
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(data);
  };

  const onChangeHandler = (e) => {
    console.log(e.target.name, e.target.value);
  }

  return (
    <>
      <h1>Contact Us</h1>
      <form class="abc">
        <div className="app">
          <form onSubmit={handleSubmit}>
            {inputs && inputs.map((props) => <FormInput {...props} onChange={(e)=> onChangeHandler(e)} />)}
          </form>
        </div>
      </form>
    </>
  );
}
