import React from "react";
import "./Form.css";
import Button from "../Button/Button";

const Form = () => {
  return (
    <div className="contein-form">
      <div className="contein-item">
        <label htmlFor="name">Name:</label>
        <input type="text" name='name' className='name' />
      </div>
      <div className="contein-item">
        <label htmlFor="email">Email:</label>
        <input type="text" name='email' className='email'/>
      </div>
      <div className="contein-item">
        <label htmlFor="password">Password:</label>
        <input type="text" name='password' className='password' />
      </div>
      <Button fullWidth={true}/>
    </div>
  );
};

export default Form;
