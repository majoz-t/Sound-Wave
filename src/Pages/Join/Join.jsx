import React from "react";
/*import { Form } from 'react-router'*/
import Form from "../../components/Form/Form";
import "./Join.css";

const Join = () => {
  return (
    <div className="contein-join">
      <div className="circle-1"></div>
      <div className="circle-2"></div>
      <div>
        <h2>Join the <span className="change-color">fun.</span></h2>
      </div>
      <div>
        <Form />
      </div>
    </div>
  );
};

export default Join;
